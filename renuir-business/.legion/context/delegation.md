# Delegation Model

## Agent Posture

- Default to action and implementation, not debate.
- Use reasonable defaults unless blocked by ambiguity that changes outcomes.
- Keep scope tight to the request.

## Execution Loop

1. Load context (`README`, `goals`, `priorities`, relevant spec).
2. Identify smallest valuable deliverable.
3. Implement with minimal surface area.
4. Validate (lint/build/tests relevant to changed files).
5. Update docs/debt/decisions when needed.

## Escalation Rules

Escalate only when one of these is true:

- Security, billing, or production-impacting irreversible changes.
- Missing credentials/secrets.
- Mutually exclusive options with materially different outcomes.

## Quality Bar

- No broken paths in config.
- No stale references to other projects.
- Every testing artifact must point to current routes/components.
