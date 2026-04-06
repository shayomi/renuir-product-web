# Legion Operating System

`.legion` is the project-local agent operating system for Renuir Business.

It is designed to keep every coding/session assistant aligned with product goals,
engineering rules, and QA standards without relying on global machine config.

## Core Principle

Project context first, tools second.

Agents should always start with:

1. `.legion/context/README.md`
2. `.legion/context/goals.md`
3. `.legion/context/priorities.md`
4. relevant spec in `.legion/context/specs/`

## Structure

- `.legion/context/` — strategy, constraints, ADRs, debt, and specs
- `.legion/context/skills/` — markdown skill playbooks for recurring tasks
- `.legion/skills/` — executable skill bundles (for command-driven workflows)

## Testing Standard

This project uses browser-only QA in `qa/browser/`.

- Manual scripts live in `qa/browser/scripts/`
- Automated Playwright tests live in `tests/browser/`

## Non-Goal

`.legion` should never mutate user-global OpenCode setup in `~/.config/opencode`.
All behavior required for this project must be expressible from repository files.
