const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const requiredFiles = [
  "index.html",
  "start-a-project.html",
  "fix-list-builder.html",
  "maintenance-plans.html",
  "inspection-report-repairs.html",
  "thank-you.html",
  "assets/styles.css",
  "assets/app.js",
  "netlify.toml",
  "_redirects",
  "robots.txt",
  "sitemap.xml",
];

const formRequirements = {
  "start-a-project.html": "vail-project-intake",
  "fix-list-builder.html": "vail-fix-list",
  "maintenance-plans.html": "vail-maintenance-plan",
  "inspection-report-repairs.html": "vail-inspection-report",
};

const bannedPatterns = [/SummitLine/i, /Roofing/i, /roof repair/i, /roofing-lead/i];
const failures = [];

function decodeHtmlEntities(value) {
  const entities = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
  };

  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (full, entity) => {
    if (entity[0] === "#") {
      const isHex = entity[1].toLowerCase() === "x";
      const codePoint = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : full;
    }

    const decoded = entities[entity.toLowerCase()];
    return decoded ?? full;
  });
}

function extractVisibleTextFromHtml(html) {
  const withoutHiddenBlocks = html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ");

  const withoutTags = withoutHiddenBlocks.replace(/<[^>]+>/g, " ");
  return decodeHtmlEntities(withoutTags).replace(/\s+/g, " ").trim();
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

for (const file of requiredFiles) {
  if (!exists(file)) {
    failures.push(`Missing required file: ${file}`);
  }
}

for (const [file, formName] of Object.entries(formRequirements)) {
  if (!exists(file)) {
    continue;
  }

  const html = read(file);
  const formPattern = new RegExp(`<form[^>]*name=["']${formName}["'][\\s\\S]*?</form>`, "i");
  const formMatch = html.match(formPattern);

  if (!formMatch) {
    failures.push(`${file} is missing form ${formName}`);
    continue;
  }

  const form = formMatch[0];
  const checks = [
    { label: "method=\"POST\"", pattern: /method=["']POST["']/i },
    { label: "data-netlify=\"true\"", pattern: /data-netlify=["']true["']/i },
    { label: "action=\"/thank-you\"", pattern: /action=["']\/thank-you["']/i },
    { label: "netlify-honeypot=\"bot-field\"", pattern: /netlify-honeypot=["']bot-field["']/i },
    { label: "hidden form-name input", pattern: new RegExp(`<input[^>]*type=["']hidden["'][^>]*name=["']form-name["'][^>]*value=["']${formName}["']`, "i") },
    { label: "honeypot input", pattern: /<input[^>]*name=["']bot-field["']/i },
  ];

  for (const check of checks) {
    if (!check.pattern.test(form)) {
      failures.push(`${file} form ${formName} is missing ${check.label}`);
    }
  }
}

for (const file of fs.readdirSync(root).filter((name) => name.endsWith(".html"))) {
  const html = read(file);
  const visibleText = extractVisibleTextFromHtml(html);
  for (const pattern of bannedPatterns) {
    if (pattern.test(visibleText)) {
      failures.push(`${file} contains banned legacy term: ${pattern}`);
    }
  }
}

if (exists("netlify.toml")) {
  const netlifyConfig = read("netlify.toml");
  if (!/publish\s*=\s*["']\.["']/.test(netlifyConfig)) {
    failures.push('netlify.toml must contain publish = "."');
  }
  if (/publish\s*=\s*["']dist["']/.test(netlifyConfig)) {
    failures.push('netlify.toml must not contain publish = "dist"');
  }
  if (!/command\s*=\s*["']["']/.test(netlifyConfig)) {
    failures.push('netlify.toml must contain command = ""');
  }
}

if (failures.length > 0) {
  console.error("Static site check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Static site check passed.");
