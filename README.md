# Vail Renovations Platform Foundation

This repo is being converted from a static Netlify HTML site into a Next.js App Router foundation for the Vail Renovations public website and future mobile-friendly CRM.

## Current scope

Implemented in the platform foundation:

- Next.js App Router
- TypeScript
- Tailwind configuration
- Public layout, header, footer and mobile sticky CTAs
- Homepage foundation
- Public route placeholders
- Legacy static-route redirects
- Netlify Next.js build configuration
- Platform foundation report

Not implemented in this ticket:

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

## Required routes

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

Legacy static URLs redirect to the new foundation routes:

- `/start-a-project` -> `/project-request`
- `/fix-list-builder` -> `/scope-builder`
- `/maintenance-plans` -> `/services/repairs-refreshes`
- `/inspection-report-repairs` -> `/services/pre-sale-improvements`
- `/renovations` -> `/services`
- `/thank-you` -> `/contact`

## Scripts

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
npm run check
```

## Deploy

Netlify settings for this foundation:

- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`
