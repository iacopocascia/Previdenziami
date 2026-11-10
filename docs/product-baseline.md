# Product baseline

## Goal

Help individuals understand pension fund choices and explore retirement strategies in the context of their employment and contribution situation.

## Proposed initial workflow

1. Enter an employment and retirement profile.
2. Review comparable pension funds and their underlying data sources.
3. Explore contribution, cost, and retirement scenarios.
4. Read an AI-assisted explanation grounded in the profile and computed results.

## Foundations for implementation

- Use a deterministic calculation layer for financial projections, with visible assumptions and reproducible outputs.
- Use AI to explain results and explore strategies, with references to the data used.
- Record source dates, currency, jurisdiction, fee definitions, and performance periods to make comparisons meaningful.
- Distinguish historical returns from modeled projections.
- Minimize collection of personal employment and financial information and define storage and deletion behavior before collecting real profiles.

## Decisions to resolve

- Target country and applicable pension system.
- Initial audience and supported employment categories.
- Fund data sources, update frequency, and licensing.
- Comparison metrics and projection assumptions.
- Technology stack, hosting, authentication, and AI provider.

## Suggested first milestone

Build a profile form, a comparison table backed by sample data, and a reproducible scenario calculator before connecting live data or AI services.
