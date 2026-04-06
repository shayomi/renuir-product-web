# Skill: Browser QA

## When to use

Use for route regressions, navigation checks, responsive behavior, and form UX on
the Renuir Business website.

## Scope

- In: browser behavior for `/`, `/about-us`, `/individual`, `/solutions`, `/developer`
- Out: backend API contract testing and database mutation testing

## Steps

1. Read `qa/browser/scripts/website-full-regression.md` for scenario IDs.
2. Run smoke checks first.
3. Run full browser suite when touching shared nav/layout, forms, or route composition.
4. Update `qa/coverage-matrix.md` after adding or changing tests.

## Commands

```bash
pnpm test:browser:smoke
pnpm test:browser
pnpm test:browser:headed
```

## Notes

- Keep tests route-driven and content-stable.
- Avoid brittle assertions against animation timing.
