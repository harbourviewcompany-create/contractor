# Vail Renovations Static Site

Static Netlify-ready website for Vail Renovations built around the Vail Home Command intake paths.

## Required routes

- `/`
- `/start-a-project`
- `/fix-list-builder`
- `/maintenance-plans`
- `/inspection-report-repairs`
- `/thank-you`

## Netlify Forms

Included forms:

- `vail-project-intake`
- `vail-fix-list`
- `vail-maintenance-plan`
- `vail-inspection-report`

## Deploy

Netlify settings:

- Base directory: blank
- Build command: blank
- Publish directory: `.`

Route rewrites are maintained in `netlify.toml` (`[[redirects]]` entries) to keep deploy configuration centralized.

Run `npm run check` before deploying.
