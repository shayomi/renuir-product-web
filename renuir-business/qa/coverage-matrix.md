# Test Coverage Matrix — Renuir Business Website

Browser-only coverage for the public website.

## Layers

- **Manual** — `qa/browser/scripts/*.md`
- **Automated Browser** — Playwright in `tests/browser/`

## Route Coverage

| Route | Manual | Automated | Notes |
|---|---|---|---|
| `/` | yes | yes | Home loads, nav renders, mobile menu works |
| `/about-us` | yes | yes | Contact form visible and interactive |
| `/individual` | yes | yes | Route load and mobile behavior |
| `/solutions` | yes | yes | Hero form visible, CTA button works |
| `/developer` | yes | yes | Developer form visible, CTA button works |

## Feature Coverage

| Feature | Manual ID(s) | Automated Spec |
|---|---|---|
| Top-level route loads | R1-R5 | `tests/browser/routes.spec.ts` |
| Desktop navigation links | N1-N5 | `tests/browser/navigation.spec.ts` |
| Solutions dropdown behavior | N6-N8 | `tests/browser/navigation.spec.ts` |
| Mobile menu open/close + navigation | M1-M4 | `tests/browser/mobile.spec.ts` |
| Contact form presence (`/about-us`) | F1-F4 | `tests/browser/forms.spec.ts` |
| Developer waitlist form presence | F5-F7 | `tests/browser/forms.spec.ts` |
| Business demo form presence | F8-F10 | `tests/browser/forms.spec.ts` |
| Horizontal overflow guard (mobile) | M5 | `tests/browser/mobile.spec.ts` |

## Current Gaps

| Gap | Reason | Priority |
|---|---|---|
| Form submission success path | No production endpoint wired yet | medium |
| Accessibility deep audit (axe/pa11y) | Not yet integrated into browser suite | medium |
| Visual regression snapshots | Baseline not yet approved | low |

## Definition of Done for Frontend Changes

1. `pnpm test:browser:smoke` passes.
2. If nav/layout/forms changed, `pnpm test:browser` passes.
3. `qa/browser/scripts/website-full-regression.md` stays in sync with tests.

*Last updated: 2026-04-06*
