# Website Full Regression

Manual regression checklist mapped to automated Playwright coverage.

## R — Route integrity

- **R1** `/` renders successfully.
- **R2** `/about-us` renders successfully.
- **R3** `/individual` renders successfully.
- **R4** `/solutions` renders successfully.
- **R5** `/developer` renders successfully.

## N — Navigation integrity

- **N1** Home logo returns to `/`.
- **N2** Desktop nav: About us opens `/about-us`.
- **N3** Desktop nav: Developers opens `/developer`.
- **N4** Solutions dropdown opens.
- **N5** Solutions -> Enterprise opens `/solutions`.
- **N6** Solutions -> Individual opens `/individual`.
- **N7** Mobile menu opens on small viewport.
- **N8** Mobile menu: About us opens `/about-us`.

## F — Form UX (public pages)

- **F1** About-us contact form shows Full name, Email, Subject, Message fields.
- **F2** About-us contact form submit CTA is visible.
- **F3** Developer page has work email field.
- **F4** Developer page CTA is visible.
- **F5** Solutions page has work email field.
- **F6** Solutions page CTA is visible.

## M — Mobile/responsive baseline

- **M1** Mobile menu can open and close.
- **M2** No horizontal body overflow at 375px width on home page.
- **M3** Navigation still functions at 375px width.

## Automation Mapping

| Area | Automated Spec |
|---|---|
| R1-R5 | `tests/browser/routes.spec.ts` |
| N1-N6 | `tests/browser/navigation.spec.ts` |
| N7-N8, M1-M3 | `tests/browser/mobile.spec.ts` |
| F1-F6 | `tests/browser/forms.spec.ts` |
