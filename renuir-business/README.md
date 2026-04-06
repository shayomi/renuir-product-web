# Renuir Business

Public-facing web platform for **Renuir** - a modern lost-and-found system connecting individuals, venues, and developer integrations.

---

## What This App Is

`renuir-business` is the marketing and product surface for three Renuir audiences:

- **Individuals** - people who lost or found items
- **Businesses** - hotels, airports, restaurants, institutions
- **Developers** - teams integrating with Renuir APIs

Core goals of this app:

- Explain Renuir's value clearly
- Route each audience to the right product path
- Provide a reliable, testable web experience

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animations | Framer Motion |
| Forms | react-hook-form + Zod |
| Icons | Lucide React |
| Package manager | pnpm |
| Browser tests | Playwright |

---

## Quick Start (New Contributor)

### Prerequisites

- **Node.js 22+** (recommended)
- **pnpm** (`npm install -g pnpm`)
- **Git**

### 1) Clone and install

```bash
git clone https://github.com/your-org/renuir-product-web.git
cd renuir-product-web/renuir-business
pnpm install
```

### 2) Install browser runtime (one-time per machine)

```bash
pnpm exec playwright install chromium
```

### 3) Start dev server

```bash
pnpm dev
```

Open `http://localhost:3000`.

### 4) Verify baseline

```bash
pnpm test:browser:smoke
pnpm exec tsc --noEmit
pnpm lint
```

Notes:

- Smoke tests should pass before pushing changes.
- Lint currently has some existing warnings in non-test UI files; no lint errors should be introduced.

---

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint |
| `pnpm test:browser:smoke` | Fast browser QA checks (routes + nav) |
| `pnpm test:browser` | Full Playwright suite |
| `pnpm test:browser:headed` | Full suite with visible browser |
| `pnpm exec tsc --noEmit` | Type check only |

---

## Browser QA Setup

This repo now uses **browser-only QA**.

### Where things live

- Manual QA docs: `qa/`
- Browser playbooks: `qa/browser/scripts/`
- Automated tests: `tests/browser/`
- Playwright config: `playwright.config.ts`

### Test strategy

- **Smoke**: must-run checks for route health and main navigation
- **Full**: broader regression checks
- **Headed**: debugging and visual verification

### Environment knobs (optional)

You can override Playwright behavior with env vars:

- `BROWSER_QA_BASE_URL` - custom test URL (default: `http://127.0.0.1:3000`)
- `BROWSER_QA_SKIP_WEBSERVER=1` - skip auto-starting app server
- `BROWSER_QA_START_COMMAND` - custom start command if needed
- `BROWSER_QA_WORKERS` - worker count override

Example:

```bash
BROWSER_QA_BASE_URL=http://localhost:4000 BROWSER_QA_SKIP_WEBSERVER=1 pnpm test:browser:smoke
```

---

## Project Structure

```text
renuir-business/
|- app/
|  |- (others)/
|  |  |- about-us/
|  |  |- developer/
|  |  |- individual/
|  |  `- solutions/
|  |- globals.css
|  |- layout.tsx
|  `- page.tsx
|- components/
|  |- about/
|  |- data/
|  |- developer/
|  |- home/
|  |- indiviuals/
|  |- shared/
|  |- solutions/
|  `- ui/
|- lib/
|  |- animations.ts
|  `- utils.ts
|- public/
|  |- fonts/
|  `- images/
|- qa/
|- tests/
|  `- browser/
|- .legion/
`- .opencode/
```

---

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home / platform overview |
| `/about-us` | Team, mission, trust, contact |
| `/solutions` | Business/enterprise proposition |
| `/individual` | Individual user proposition |
| `/developer` | Developer/API-facing content |

---

## Working Conventions

### Components and imports

- Prefer server components by default.
- Use `"use client"` only when you need state/effects/browser APIs.
- Use `@/` imports across directories.
- Use relative imports within the same folder when clearer.

### Styling

- Tailwind v4 tokens live in `app/globals.css`.
- Use semantic utility classes and shared UI primitives.

### Validation before done

Run these after meaningful changes:

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm test:browser:smoke
```

---

## Team Handoff (copy/paste)

Use this to onboard a coworker quickly:

```text
To get started on renuir-business:

1) cd renuir-product-web/renuir-business
2) pnpm install
3) pnpm exec playwright install chromium
4) pnpm dev

In another terminal:
5) pnpm test:browser:smoke

Optional:
- pnpm test:browser
- pnpm test:browser:headed
- pnpm exec tsc --noEmit
- pnpm lint
```

---

## Important Context Files

Read these before major feature work:

- `.legion/context/README.md`
- `.legion/context/goals.md`
- `.legion/context/priorities.md`
- Relevant spec under `.legion/context/specs/`

If architectural decisions are made, update:

- `.legion/context/decisions.md`

If intentional shortcuts are taken, track them in:

- `.legion/context/technical-debt.md`

---

## Troubleshooting

### Playwright says browser executable missing

```bash
pnpm exec playwright install chromium
```

### Tests need an already running app

```bash
BROWSER_QA_SKIP_WEBSERVER=1 pnpm test:browser:smoke
```

### Port conflict on 3000

Run app on a different port and point tests to it:

```bash
pnpm dev -- --port 4000
BROWSER_QA_BASE_URL=http://127.0.0.1:4000 BROWSER_QA_SKIP_WEBSERVER=1 pnpm test:browser:smoke
```

---

## License

Proprietary - All rights reserved by Renuir UG.
