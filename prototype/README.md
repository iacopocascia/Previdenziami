# Previdenziami prototype

A space to validate one concrete pension comparison use case before generalizing the application components.

## Status

Working local prototype for the agreed Italian early-career employee comparison. Research-backed fund rules and explicit modeling assumptions drive deterministic projections; case-specific payroll inputs still require confirmation.

## Structure

- `src/`: typed fund data, deterministic calculation engine and comparison interface.
- `fixtures/`: synthetic profiles and fund data used for repeatable demonstrations.
- `docs/use-case.md`: scenario, requirements, and acceptance criteria.
- `docs/backlog.md`: iteration plan and validation record.

## Working approach

1. Define the use case and agree on a small demonstrable outcome.
2. Record inputs, rules, assumptions, and observable acceptance criteria.
3. Implement and demonstrate one complete workflow using synthetic data.
4. Capture feedback and revise the backlog.
5. Extract reusable components after validating the workflow.

Keep calculations separate from presentation and AI explanations. Record the source of any pension rule used by the prototype.

## Implementation specifications

1. [Interface and interaction](docs/01-interface-spec.md)
2. [Calculation engine and break-even analysis](docs/02-calculation-spec.md)
3. [Data verification and delivery](docs/03-data-and-delivery-spec.md)

## Research snapshot — 9 November 2026

Independent research agents examined official legislation/COVIP guidance, Cometa, Allianz Insieme, and supplementary educational sources. Their findings were reviewed and consolidated into:

- [Italian pension legislation](docs/research/legislation.md): statutory rules, 2026 changes, taxation, TFR, employer-contribution portability and general comparison guidance.
- [Cometa](docs/research/cometa.md): contractual contribution bases, young-member eligibility, compartment policies, charges, ISC and historical-data checks.
- [Allianz Insieme](docs/research/allianz-insieme.md): current product documents, compartment charges/ISC, access, conventions, guarantees and historical returns. This dossier preserves Italian technical terminology.

Each dossier records sources, retrieval/effective dates and unresolved points. Retrieved text, indexed excerpts and inaccessible material are distinguished. These are research inputs, not a claim that every payroll or legal interpretation has been resolved. In particular, direct first enrollment and later transfer with employer-contribution portability are different strategies; ISC must not be deducted on top of the actual fee schedule.

## Run and verify

Requires Node.js 24 or newer. From this folder:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

```sh
npm test
npm run build
npm run test:browser
```

Browser checks expect the dev server on port 5173 (override with `PROTOTYPE_URL`) and Chromium at `/usr/bin/chromium`. Screenshots are written to `artifacts/`. No user profiles are persisted. The production build is in `dist/`.

See [validation and acceptance evidence](docs/validation.md) for tested behavior and disclosed limits.
