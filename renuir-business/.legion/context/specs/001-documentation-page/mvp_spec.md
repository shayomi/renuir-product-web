# MVP Spec: Documentation Page Setup

## One-liner
Create a first-class docs hub for Renuir partners and developers.

## Must-Haves
- Dedicated `/documentation` route in `app/(others)/documentation/page.tsx` linked from primary nav.
- Hero + overview copy, CTAs (Get API Key, Contact Support), and key trust badges.
- Quickstart section covering auth, first item submission, and webhook confirmation with copyable code blocks.
- API reference summary for core endpoints (auth, lost item create, status webhook) including required params/responses.
- Expandable FAQ + contact panel so individuals know how to escalate.

## Nice-to-Haves
- Side rail table of contents that anchors to each section.
- Postman collection + downloadable OpenAPI schema link.
- Theme-aware code blocks (light/dark) for readability.

## Success Metrics
- Bounce rate from `/documentation` under 35% within first 30 days.
- Support tickets tagged "need api docs" drop by 50%.
- At least three partner engineers complete onboarding without additional PDF guides.
