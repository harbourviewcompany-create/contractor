# Vail Platform Foundation Report

## GO/HOLD

HOLD pending live dependency installation and command execution in CI or a local environment with npm registry access.

The repository has been converted at the file level from a static Netlify HTML site into a Next.js App Router foundation. Verification commands were defined but not executed by this implementation environment.

## Repo conversion summary

Before this ticket, the repo was a static Netlify site with root-level HTML files, static CSS/JS assets, Netlify Forms and a static checker.

This ticket adds a Next.js App Router foundation with TypeScript, Tailwind, public route placeholders, shared public layout components and Netlify Next.js deployment settings.

## Changed file categories

### Platform configuration

- `package.json` — replaces static-only package with Next.js, React, TypeScript, Tailwind, ESLint and Netlify Next plugin scripts/dependencies.
- `next.config.ts` — adds Next.js configuration and redirects from legacy static routes to the new route architecture.
- `tsconfig.json` — adds strict TypeScript configuration.
- `next-env.d.ts` — adds Next.js type references.
- `tailwind.config.ts` — adds Tailwind configuration and Vail design tokens.
- `postcss.config.js` — adds Tailwind/PostCSS configuration.
- `eslint.config.mjs` — adds Next.js ESLint flat config.
- `netlify.toml` — switches Netlify from static root publish to Next.js build with `.next` and `@netlify/plugin-nextjs`.

### App routes

- `app/layout.tsx` — creates the root public layout.
- `app/page.tsx` — creates the homepage foundation.
- `app/globals.css` — adds global CSS and Tailwind directives.
- `app/services/page.tsx` — adds services overview route.
- `app/services/[slug]/page.tsx` — adds service-detail placeholders.
- `app/how-it-works/page.tsx` — adds How It Works placeholder.
- `app/project-request/page.tsx` — adds Project Starter placeholder.
- `app/scope-builder/page.tsx` — adds Scope Builder placeholder.
- `app/book-call/page.tsx` — adds booking handoff placeholder.
- `app/callback/page.tsx` — adds callback placeholder.
- `app/contact/page.tsx` — adds contact placeholder.
- `app/privacy/page.tsx` — adds privacy placeholder.
- `app/terms/page.tsx` — adds terms placeholder.

### Shared code

- `components/site-header.tsx` — adds desktop/mobile public header.
- `components/site-footer.tsx` — adds public footer.
- `components/mobile-cta-bar.tsx` — adds mobile sticky CTAs.
- `components/placeholder-page.tsx` — adds reusable placeholder-page component.
- `lib/routes.ts` — centralizes public and service route metadata.

### Verification and docs

- `scripts/check-site.js` — replaces static HTML/Netlify Forms checker with platform-foundation checks.
- `README.md` — updates project documentation for the Next.js foundation.
- `sitemap.xml` — updates sitemap to new public routes.
- `docs/control/VAIL_PLATFORM_FOUNDATION_REPORT.md` — records this report.

## Routes added

- `/`
- `/services`
- `/services/bathroom-renovations`
- `/services/basement-renovations`
- `/services/kitchen-updates`
- `/services/repairs-refreshes`
- `/services/pre-sale-improvements`
- `/services/rental-turnovers`
- `/how-it-works`
- `/project-request`
- `/scope-builder`
- `/book-call`
- `/callback`
- `/contact`
- `/privacy`
- `/terms`

## Legacy redirects

- `/start-a-project` -> `/project-request`
- `/fix-list-builder` -> `/scope-builder`
- `/maintenance-plans` -> `/services/repairs-refreshes`
- `/inspection-report-repairs` -> `/services/pre-sale-improvements`
- `/renovations` -> `/services`
- `/thank-you` -> `/contact`

## Scripts added

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run typecheck`
- `npm run lint`
- `npm run check`

## Deployment assumptions

- Netlify remains the deployment target for this foundation.
- Netlify must install dependencies and run `npm run build`.
- The publish directory is `.next`.
- `@netlify/plugin-nextjs` is required for runtime support.

## Explicit V1 deferrals

This ticket does not implement:

- CRM
- Database
- Auth
- Lead creation
- Project Starter functionality
- Scope Builder functionality
- Callback submission
- Photo uploads
- Private storage
- Notifications
- Analytics
- Estimate workflow
- Native booking engine

## Remaining blockers before full V1 CRM

The full V1 CRM remains blocked until a real backend path is implemented or selected:

1. Database persistence.
2. Authenticated CRM users.
3. Role-protected CRM routes.
4. Private photo/file storage.
5. Durable migrations or equivalent schema mechanism.
6. Server-side validation and permission enforcement.
7. First-admin bootstrap path.
8. Environment variable inventory for backend/auth/storage.

## Verification commands required

Run in an environment with npm registry access:

```bash
npm install
npm run check
npm run typecheck
npm run lint
npm run build
```

## Known limitations

- No package lock file was generated in this environment.
- Build/typecheck/lint were not executed in this environment.
- Existing root-level static HTML files remain in the repo for now and are superseded by Next.js routes and redirects.
- The current public routes are placeholders where the implementation ticket required placeholders.
- No backend, auth, storage or CRM behavior exists yet.
