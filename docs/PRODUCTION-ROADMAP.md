# Path to a production website

## 1. Approve the frontend and content

Review the local website against the reference at desktop, tablet and mobile widths. Replace reference metrics and draft listings with approved information. Populate the team and contact details, supply official media, and finalize the logo and copy.

## 2. Implement inquiry delivery

Build a server-side inquiry endpoint with validation, request-size limits, rate limiting, spam controls, server-owned timestamps and a durable inquiry store. Use an email provider on the server with retry handling. Return a reference number only after accepting the inquiry. Keep customer messages out of analytics and application logs.

The frontend alone cannot provide these protections. Its honeypot and validation are usability measures, not a backend security boundary. Draft downloads are not submissions.

## 3. Add content administration if required

Confirm whether the client needs to manage mine sites, minerals, products, projects, media and team profiles. If so, select a CMS or build a role-based administration service. Do not add client-side password checks or embed administrator credentials in the website.

Suggested separate roles: administrator, content editor and inquiry reviewer. Add an audit history, explicit publish/draft states and controlled media uploads.

## 4. Production deployment

Choose a host and domain. Add HTTPS, SPA routing or prerendering/SSR, canonical URLs, per-page descriptions, sitemap, robots policy, social preview images and a genuine not-found HTTP response where supported. Configure security headers, asset caching and operational monitoring for the chosen host. Set up backups and retention for inquiry data if a backend is introduced.

## Local acceptance checklist

- Visit every main navigation item and refresh its route directly.
- Check widths around 390, 768 and 1440 pixels for overflow and readable type.
- Open/close the mobile menu; confirm links close it and browser Back works.
- Use keyboard Tab, Enter and Escape; check focus visibility and dialogs.
- Select each mine marker and open each site's detail route.
- Filter leasing opportunities and portfolio categories, including empty results.
- Search products with a matching term and a nonsense term; clear the search.
- Use Request Quote; confirm the product subject and inquiry category.
- Open gallery images, use Previous/Next, and close with Escape.
- Switch team departments; replace placeholders before approval.
- Validate required form fields and malformed emails.
- Download a draft; confirm it is accurate and the UI states it was not sent.
- After adding a backend: exercise actual success, server rejection, timeout and retry without losing user input.
- Verify assets, actual contact links, videos and approved privacy information.

The initial build and route smoke tests do not establish production readiness or pixel-perfect fidelity.
