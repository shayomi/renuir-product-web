
# QA Guide

This project now uses a browser-only testing strategy.

## Primary Assets

- `qa/browser/scripts/website-smoke.md`
- `qa/browser/scripts/website-full-regression.md`
- `tests/browser/` (automated Playwright suite)

## Run Order

1. Run smoke checks for fast confidence.
2. Run full browser regression before shipping navigation, forms, or layout changes.
3. Update `qa/coverage-matrix.md` when test scope changes.

## Commands

```bash
pnpm test:browser:smoke
pnpm test:browser
pnpm test:browser:headed
```
