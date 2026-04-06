# Skill: create-spec

Spin up a fully scaffolded spec folder (brainstorm, MVP, product, technical, and build/e2e docs) any time a new feature idea needs definition.

## When to use
- No numbered folder exists under `.legion/context/specs/` for the feature.
- A product/engineering conversation needs shared context before implementation.

## Command
```bash
cd renuir-business
pnpm spec:new <slug> "Readable Title" "Optional single-line summary"
```

### Parameters
- `<slug>`: kebab-case identifier (e.g. `documentation-page`).
- `"Readable Title"`: defaults to title-cased slug if omitted.
- `"Optional single-line summary"`: logged at the top of the generated docs.

## What happens
- Determines the next numeric prefix (001, 002, …) in `.legion/context/specs/`.
- Creates `.legion/context/specs/<prefix>-<slug>/`.
- Generates these files pre-populated with editable scaffolding:
  - `brainstorm.md`
  - `mvp_spec.md`
  - `product_spec.md`
  - `technical_spec.md`
  - `build-e2e.md`

## After running
1. Open each file and replace placeholders with feature-specific details.
2. Link the new spec from any relevant project notes or AGENTS files.
3. Keep templates in `.legion/context/specs/templates/` untouched—only edit the generated copies.

## Troubleshooting
- If the slug already exists, the command exits with an error—pick a new slug or update the existing folder instead.
- The command expects `.legion/context/specs/` to exist; create it if the repo was freshly cloned.
