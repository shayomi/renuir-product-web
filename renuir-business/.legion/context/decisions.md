# Decisions (ADR Log)

Architecture decisions and why we made them.

---

## ADR-001 — Next.js for Web

**Decision:** Use Next.js (App Router) for renuir-product-web and renuir-business.
**Reason:** SSR/SSG for SEO, fast iteration, strong ecosystem.
**Date:** 2026

---

## ADR-002 — Separate business & product web repos

**Decision:** Keep renuir-business and renuir-product-web as separate apps.
**Reason:** Different audiences, different deployment cadences, avoids coupling.
**Date:** 2026

---

## ADR-003 — API-first for business integrations

**Decision:** Build a public REST API as the primary integration method for hotels/institutions.
**Reason:** Enables broad ecosystem adoption without requiring UI usage.
**Status:** In planning.

---

## ADR-004 — Project-local Legion as agent control plane

**Decision:** Use `.legion` + `.opencode` in-repo config as the canonical project agent setup.
**Reason:** Ensures reproducible behavior without depending on user-global OpenCode settings.
**Date:** 2026-04-06

---

## ADR-005 — Browser-only QA for current website scope

**Decision:** Standardize QA on browser-only checks (manual scripts + Playwright automation).
**Reason:** Current app scope is public website UX; API test layers from prior projects add noise.
**Date:** 2026-04-06

---

<!-- Add new ADRs below -->
