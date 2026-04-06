# Technical Spec: Documentation Page Setup

## Architecture Overview
- Add a new server component route at `app/(others)/documentation/page.tsx`; it will follow the existing `(others)` layout for consistent navigation/footer.
- Update `components/shared/navbar/Nav.tsx` (and `MobileNav.tsx`) to include a "Documentation" link that points to `/documentation` and reuses the active-link styling hook.
- Static assets (Postman collection, OpenAPI file) live in `public/assets/docs/`; links point to `/assets/docs/<file>.json` so the marketing site can serve them without additional API calls.
- No backend changes are required—the page reads from static data modules and optional JSON stubs bundled at build time.

## Components & Files
- `components/documentation/DocumentationHero.tsx`: headline, supporting copy, trust metrics, and CTA buttons ("Get API Key" → `/developer`, "Contact Support" → `mailto:support@renuir.com` for now).
- `components/documentation/Quickstart.tsx`: timeline of the three key steps (Authenticate, Create Lost Item, Confirm Webhook) with supporting copy and code blocks. Each step renders via a `QuickstartStep` child component to keep layout tight.
- `components/documentation/CodeSnippet.tsx`: client component that receives `language`, `snippet`, and `filename` props, renders syntax-highlight-like styles with Tailwind, and exposes a `CopyButton` (using the same pattern as `components/shared/navbar/MobileNav` uses for clipboard interactions, or a new `components/shared/CopyButton.tsx`).
- `components/documentation/ApiReference.tsx`: card grid describing the three primary endpoints. Accepts typed data (method, path, auth, description, request shape, response summary) so future endpoints are one-line additions.
- `components/documentation/Faq.tsx`: accordion built with shadcn's `Accordion` primitives to render at least five Q&As plus a "Still stuck" footer card.
- `components/documentation/AssetsRail.tsx`: optional aside listing downloadable artifacts (Postman collection, OpenAPI schema) with badge and file size labels.
- `components/data/documentation.ts`: exports typed arrays for quickstart steps, code snippet variants (TypeScript + cURL), endpoint metadata, FAQ entries, and downloadable assets. Keeping everything in one data module avoids hard-coded strings across components.
- `app/(others)/documentation/page.tsx`: orchestrates sections via a `SECTIONS` constant similar to `/developer`, ensuring consistent layout and reducing scroll jank.

## Data & State
- The page is primarily static. Data lives in `components/data/documentation.ts` as strongly typed arrays (`DocumentationQuickstartStep`, `ApiEndpoint`, `FaqItem`, `DocDownload`).
- Interactive pieces (code-language toggles, copy buttons, FAQ accordions) require `'use client'` wrappers:
  - `CodeSnippet` manages `copied` feedback for two seconds after a click using `useState`.
  - Quickstart allows switching between `"ts"` and `"curl"` snippets per step; this is just a segmented control storing the selected language at the section level.
  - Accordion uses shadcn primitives that already ship as client components.
- No remote fetches are necessary; bundling JSON assets with `next/image`/static import keeps TTFB predictable.
- Anchor navigation (optional table of contents) can use CSS scroll margins plus `id` attributes on each section to work without extra state.

## Risks
- **Content ownership:** Without a documented owner, endpoint descriptions or rate limits can become stale. Mitigation: pair this spec with a content checklist in `.legion/context/docs/update-process.md`.
- **Bundle weight:** Hero + multiple rich sections could bloat initial JS if everything becomes a client component. Keep hero/API cards server-side; only wrap the snippet/accordion pieces in client modules.
- **Copy to clipboard:** Some browsers block clipboard APIs on insecure origins. Provide graceful fallback (show instructions to press `⌘+C` when `navigator.clipboard` is unavailable).
- **Future versioning:** We expect `/documentation` to eventually branch into `/documentation/api/v1`. Ensure data structures support `version` fields and that section anchors do not conflict when nested pages are introduced.
