const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const requiredFiles = [
  "package.json",
  "next.config.ts",
  "tsconfig.json",
  "tailwind.config.ts",
  "postcss.config.js",
  "eslint.config.mjs",
  "app/layout.tsx",
  "app/page.tsx",
  "app/globals.css",
  "app/services/page.tsx",
  "app/services/[slug]/page.tsx",
  "app/how-it-works/page.tsx",
  "app/project-request/page.tsx",
  "app/scope-builder/page.tsx",
  "app/book-call/page.tsx",
  "app/callback/page.tsx",
  "app/contact/page.tsx",
  "app/privacy/page.tsx",
  "app/terms/page.tsx",
  "components/site-header.tsx",
  "components/site-footer.tsx",
  "components/mobile-cta-bar.tsx",
  "components/placeholder-page.tsx",
  "lib/routes.ts",
  "netlify.toml",
  "docs/control/VAIL_PLATFORM_FOUNDATION_REPORT.md"
];

const bannedLegacyTerms = ["SummitLine", "Roofing", "roof repair", "roofing-lead"];
const forbiddenImplementationTerms = [
  "createLead",
  "lead_photos",
  "supabase",
  "data-netlify",
  "localStorage"
];
const failures = [];

function exists(file) {
  return fs.existsSync(path.join(root, file));
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

for (const file of requiredFiles) {
  if (!exists(file)) {
    failures.push(`Missing required file: ${file}`);
  }
}

if (exists("package.json")) {
  const packageJson = JSON.parse(read("package.json"));
  const scripts = packageJson.scripts || {};
  for (const script of ["dev", "build", "typecheck", "lint", "check"]) {
    if (!scripts[script]) {
      failures.push(`package.json is missing script: ${script}`);
    }
  }
  for (const dependency of ["next", "react", "react-dom"]) {
    if (!packageJson.dependencies || !packageJson.dependencies[dependency]) {
      failures.push(`package.json is missing dependency: ${dependency}`);
    }
  }
}

if (exists("netlify.toml")) {
  const netlifyConfig = read("netlify.toml");
  if (!/command\s*=\s*["']npm run build["']/.test(netlifyConfig)) {
    failures.push('netlify.toml must run "npm run build"');
  }
  if (!/publish\s*=\s*["']\.next["']/.test(netlifyConfig)) {
    failures.push('netlify.toml must publish ".next"');
  }
  if (!/@netlify\/plugin-nextjs/.test(netlifyConfig)) {
    failures.push("netlify.toml must include @netlify/plugin-nextjs");
  }
}

for (const file of fs.readdirSync(root, { recursive: true }).filter((name) => typeof name === "string" && /\.(ts|tsx|js|html|md|toml)$/.test(name))) {
  if (file.includes("node_modules") || file.includes(".next") || file === "scripts/check-site.js") {
    continue;
  }
  const body = read(file);
  for (const term of bannedLegacyTerms) {
    if (body.includes(term)) {
      failures.push(`${file} contains banned legacy term: ${term}`);
    }
  }
}

const scopedFiles = ["app/project-request/page.tsx", "app/scope-builder/page.tsx", "app/callback/page.tsx"];
for (const file of scopedFiles) {
  if (!exists(file)) {
    continue;
  }
  const body = read(file);
  for (const term of forbiddenImplementationTerms) {
    if (body.includes(term)) {
      failures.push(`${file} appears to introduce out-of-scope foundation behavior: ${term}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Platform foundation check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Platform foundation check passed.");
