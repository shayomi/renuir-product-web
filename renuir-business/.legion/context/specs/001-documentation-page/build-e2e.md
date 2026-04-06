# Build & E2E Plan: Documentation Page Setup

## Scope
Validate that the `/documentation` route renders all MVP sections, that interactive elements (code toggles, copy buttons, accordion) behave correctly on desktop and mobile, and that download links + navigation entries point to the right assets.

## Scenarios
| Scenario | Flow Type | Steps | Expected Result |
| --- | --- | --- | --- |
| Landing page renders | Primary | 1. From any page open the global nav. <br> 2. Click "Documentation". | Route transitions to `/documentation` server component, hero loads with trust metrics, and both CTAs have correct hrefs (`/developer`, `mailto:support@renuir.com`). |
| Quickstart + code snippets | Interaction | 1. Scroll to Quickstart section. <br> 2. Toggle between TypeScript and cURL. <br> 3. Click copy icon. | Step cards update instantly, only selected language snippet is visible, and `Copied!` toast/indicator appears for two seconds. |
| API reference cards | Content | 1. Scroll to API Reference grid. <br> 2. Inspect each card. <br> 3. Click any anchor in optional TOC. | Each card shows method badge, path, auth chip, body/response bullets, and TOC anchors scroll to the correct section with offset spacing. |
| FAQs + escalation | Interaction | 1. Expand a FAQ accordion item. <br> 2. Tab through focusable controls. <br> 3. Activate "Still stuck?" link. | Accordion panels open/close with focus retained, keyboard navigation works, and contact link opens support route/modal. |
| Downloadable assets | Content | 1. Click Postman/OpenAPI download buttons. | Files download (HTTP 200) and filenames match spec; browsers don’t attempt to navigate away from docs page. |

## Edge Cases
- Clipboard API unavailable → Copy button should degrade to selecting text + tooltip message.
- Very small screens (<360px) should stack timeline vertically without clipping code blocks.
- Missing asset file should visibly surface error (download button disables + tooltip) rather than silent 404.
- Long FAQ questions should wrap but remain accessible via keyboard focus.

## Verification Checklist
- [ ] `pnpm lint`
- [ ] `npx tsc --noEmit`
- [ ] `pnpm build`
- [ ] Manual QA on Chrome + Safari (desktop) and iOS Safari (mobile) validating scenarios above
