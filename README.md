# Iron Brothers

A React + TypeScript website rebuilt from the supplied Iron Brothers Figma reference, for local development in VS Code.

**Status: working frontend foundation (v0.1.0), not a completed production enterprise system.** The project has no backend or administrator account. The design follows the inspected reference; it is not a Figma source-code export or a verified pixel-perfect replica.

## Start on Windows in VS Code

1. Install Node.js 22.12 or newer (Node 24 LTS is suitable).
2. Extract this ZIP to a project folder, for example `D:\iron-brothers`.
3. In VS Code choose **File → Open Folder** and open the folder that contains `package.json`.
4. Open **Terminal → New Terminal** and run:

```powershell
npm ci
npm run dev
```

5. Open the address printed by Vite, normally `http://127.0.0.1:5173`.

Keep that terminal open. To stop the server, press **Ctrl+C**. To start again, run `npm run dev`. Do not use the VS Code Live Server extension for this React project.

If PowerShell blocks `npm.ps1`, use the VS Code **Command Prompt** terminal profile, or run `npm.cmd ci` and `npm.cmd run dev`. There is no need to change Windows execution policy.

## Included

- Home: mountain hero, reference metrics, company introduction, six business lines, mine sites, minerals and trading.
- About: company story, mission, vision and values.
- Mining: seven mineral categories and contextual inquiry links.
- Mine sites: interactive schematic explorer and four individually addressable detail pages.
- Leasing: status filters and contextual lease inquiries.
- Import & trading: product search, category filters, empty states and quote links.
- Portfolio: category filters and project dialogs.
- Media: photo filters, lightbox navigation and an honest unpublished-video state.
- Team: department tabs with role placeholders; no invented staff identities.
- Contact: required-field validation, contextual subjects, inquiry categories, lease fields, error handling and inquiry draft download.
- Shared desktop and mobile navigation, footer, not-found pages, per-route titles, skip link, focus styles, reduced-motion support and error boundary.

## Project structure

```text
src/
  components/       Shared layout, cards, dialog and controls
  pages/            One module per page or related feature
  data.ts           Company settings, content, images and reference listings
  router.tsx        Small History API router and internal Link
  styles.css        Design tokens and responsive styles
  App.tsx           Route selection and document titles
  main.tsx          React entry point
public/
  favicon.svg
tests/
  routes.test.mjs    Server-rendering and inquiry-context smoke tests
docs/
  PRODUCTION-ROADMAP.md
  INQUIRY-API.md
  REFERENCE-REVIEW.md
```

## Commands

```powershell
npm run dev
npm run typecheck
npm test
npm run build
npm run preview
npm run format
```

`npm run build` writes production assets to `dist`. `npm run preview` serves that build locally. `npm ci` uses the exact included lockfile. Dependencies and fonts/images need internet access.

## Change client content

Edit `src/data.ts` for the company details, product catalog, mine sites, projects, image URLs and team roles. Theme variables are at the start of `src/styles.css`.

Contact details are deliberately blank until the client supplies approved values. The reference phone numbers and staff names were placeholders. The reference email address has not been independently verified and is not presented as an operational destination.

All metrics, project years/statuses and geological/business statements originated from the supplied design or are draft copy. They require client approval. Reference images are illustrative Unsplash URLs, not verified photographs of the named mine sites. For production, replace them with approved assets and confirm usage rights. The current site uses remote Google Fonts and remote Unsplash images; download and optimize approved assets for production if appropriate.

## Inquiry behavior

Without `VITE_INQUIRY_ENDPOINT`, the form downloads a local text draft and explicitly says it was **not sent**. It does not store inquiry data in browser storage or send it to an external service.

When the backend exists, copy `.env.example` to `.env.local`, configure `VITE_INQUIRY_ENDPOINT`, restart Vite, and implement the contract in `docs/INQUIRY-API.md`. `VITE_` variables are public: never place SMTP passwords, API secrets or database credentials there. No real email delivery was configured or tested in this build.

## Validation performed

- TypeScript strict-mode check and Vite production build.
- 18 smoke tests covering the page routes, recovery pages, inquiry context and unconfigured submission state.
- Tests are server-rendering checks; they do not replace interactive browser, accessibility or visual regression tests.
- The available remote browser could inspect the Figma reference but could not access this environment's localhost server. Desktop/mobile visual fidelity and browser interactions therefore need verification on your local machine.

See `docs/PRODUCTION-ROADMAP.md` for the remaining launch work and local acceptance checklist.

## Hosting

This version uses client-side routes. A production host must serve `index.html` for unknown application paths while preserving real static-file and API routes; otherwise refreshing `/about` or `/mine-sites/shigar` will fail. No hosting or public deployment has been created.

For a content-led corporate site, add prerendering/SSR and approved per-page metadata before an SEO-focused launch. Hosting configuration and backend technology can be selected once the client's requirements are confirmed.
