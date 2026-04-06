# Browser QA

This folder contains browser-only QA assets for the Renuir Business website.

## Scope

- Public routes only: `/`, `/about-us`, `/individual`, `/solutions`, `/developer`
- Navigation behavior (desktop + mobile)
- Form UX and visibility checks
- Basic responsive guardrails

## Structure

```
qa/browser/
├── scripts/
│   ├── website-smoke.md
│   └── website-full-regression.md
└── README.md

tests/browser/
├── forms.spec.ts
├── mobile.spec.ts
├── navigation.spec.ts
└── routes.spec.ts
```

## Commands

```bash
# Smoke (fast)
pnpm test:browser:smoke

# Full browser regression
pnpm test:browser

# Headed run for debugging
pnpm test:browser:headed
```

## Environment Flags

| Variable | Default | Purpose |
|---|---|---|
| `BROWSER_QA_BASE_URL` | `http://127.0.0.1:3000` | Target URL |
| `BROWSER_QA_SKIP_WEBSERVER` | `0` | Set `1` to skip auto-starting local dev server |
| `BROWSER_QA_START_COMMAND` | `pnpm dev` | Override web server command |

## Maintenance Rules

1. Keep manual scripts and Playwright specs aligned.
2. Prefer stable selectors (`getByRole`, labels, placeholders).
3. Avoid brittle animation-timing assertions.
4. Update `qa/coverage-matrix.md` when test scope changes.
