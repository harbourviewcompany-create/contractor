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
  "robots.txt",
  "sitemap.xml",
];

const requiredRewrites = [
  ["/start-a-project", "/start-a-project.html"],
  ["/fix-list-builder", "/fix-list-builder.html"],
  ["/maintenance-plans", "/maintenance-plans.html"],
  ["/inspection-report-repairs", "/inspection-report-repairs.html"],
  ["/thank-you", "/thank-you.html"],
];

const formRequirements = {
  "start-a-project.html": "vail-project-intake",
  "fix-list-builder.html": "vail-fix-list",
  "maintenance-plans.html": "vail-maintenance-plan",
  "inspection-report-repairs.html": "vail-inspection-report",
};

const bannedPatterns = [/SummitLine/i, /Roofing/i, /roof repair/i, /roofing-lead/i];
const failures = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
  for (const pattern of bannedPatterns) {
    if (pattern.test(html)) {
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

  for (const [from, to] of requiredRewrites) {
    const rewritePattern = new RegExp(
      `\\[\\[redirects\\]\\][\\s\\S]*?from\\s*=\\s*["']${escapeRegExp(from)}["'][\\s\\S]*?to\\s*=\\s*["']${escapeRegExp(to)}["'][\\s\\S]*?status\\s*=\\s*200`,
      "m",
    );

    if (!rewritePattern.test(netlifyConfig)) {
      failures.push(`netlify.toml is missing rewrite ${from} -> ${to} (200)`);
    }
  }
}

if (exists("_redirects")) {
  const redirects = read("_redirects");
  for (const [from, to] of requiredRewrites) {
    const redirectLine = new RegExp(`^\\s*${escapeRegExp(from)}\\s+${escapeRegExp(to)}\\s+200\\s*$`, "m");
    if (redirectLine.test(redirects)) {
      failures.push(`_redirects duplicates netlify.toml rewrite ${from} -> ${to} (200)`);
    }
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
