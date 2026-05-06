# Northcrest Roofing Co. Contractor Lead-Capture Demo

Static Netlify-ready roofing sales demo for `harbourviewcompany-create/contractor`.

## Purpose

This is a buyer-ready roofing lead-capture demo. It is structured to show a roofing company owner how a focused site can turn roof problems into phone calls, estimate requests and qualified follow-up opportunities.

## Current sales-demo features

- Sticky mobile call and estimate CTA bar
- Urgent leak and storm-damage phone CTA section
- Service paths for replacement, repair, inspection and storm damage
- Proof slots for real reviews, license, insurance, warranty, supplier badges and project photos
- Local service-area copy that can be adapted for city and neighborhood SEO
- Improved lead form qualification fields: property owner, project priority, service type, timing, leak status and project details
- Lead-delivery explanation for Netlify Forms email notification, call tracking, CRM, SMS and analytics upgrades
- Contractor-facing owner-value section explaining why the page can pay for itself
- No fake license, insurance, warranty, years-in-business or verified-review claims

## Deploy

Netlify settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: blank

## Form

The lead form is named `estimate-request` and uses Netlify Forms with a honeypot field. Successful submissions redirect to `/thank-you`.

Minimum live setup before selling to a contractor:

1. Confirm Netlify Forms captures `estimate-request`.
2. Configure form notification email for the contractor.
3. Replace placeholder phone, email and service-area copy.
4. Replace proof slots with verified real proof only.
5. Add call tracking or analytics if selling this as a measurable lead system.

## Demo integrity note

This is a fictional demo contractor site. Replace contact details, service area, licensing, insurance, warranty and review claims before adapting it for a real roofing company. Do not present proof slots or example reviews as verified customer proof.
