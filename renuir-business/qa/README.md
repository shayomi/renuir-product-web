# QA Workspace

QA for this repository is browser-first.

## What lives here

- `qa/guide.md` — quick usage guide
- `qa/coverage-matrix.md` — scenario-to-test mapping and gaps
- `qa/browser/` — manual browser scripts and browser QA docs

## Automated Test Location

Executable Playwright tests are in `tests/browser/`.

Use these commands from `renuir-business/`:

```bash
pnpm test:browser:smoke
pnpm test:browser
pnpm test:browser:headed
```
