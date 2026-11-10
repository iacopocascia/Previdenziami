# Spec 3 — Source snapshot, validation and delivery

Status: implementation backlog ready. No legal rates, costs, compartments or historical returns have yet been verified in this interview.

## Data contract

Maintain separate versioned records for employment/contract rules, funds, compartments, fee schedules, tax rules and historical series. Each factual record includes stable ID, value and units, applicability conditions, publication/effective dates where available, retrieval date, source URL and relevant section/page. Mark synthetic fixtures distinctly. Never substitute a missing fact with zero.

Verify using authoritative sources: applicable CCNL/employer agreement and Cometa official contribution/eligibility documents; Cometa and Allianz Insieme official compartment and cost documentation; COVIP publications where relevant; current Italian legislative and tax authority sources for tax and TFR treatment. Resolve conflicting effective dates explicitly.

Required facts:

- Exact contractual eligibility and relevant contribution bases for this C3 employee; minimum employee contribution, applicable employer rates, age/first-employment conditions and changes over the modeled horizon.
- TFR accrual formula and pension allocation conventions for this profile.
- Availability/access conditions for selected Allianz Insieme compartments and applicable employer contribution eligibility. Do not assume a universal prohibition or entitlement.
- Matched-risk compartment definitions, risk metadata and mapping rationale.
- Contribution, fixed, asset-based and other applicable charges; whether published returns already include fees and taxes.
- Investment tax treatment, deductible contribution limits and treatment of employer contributions for the separate employee tax benefit estimate.
- Historical return periods, observation dates, currency, gross/net basis and comparable periods for both compartments.

Use dated current rules as a constant-law projection assumption unless a documented future transition applies. Display the snapshot date; 42 years of unchanged legislation is a modeling assumption.

## Data availability behavior

Research and populate the verified snapshot before presenting real-fund numerical results as sourced. If a required field is unresolved, show the missing field and disable affected results. Synthetic data may power development demonstrations only with prominent 'illustrative assumptions, not verified fund data' labels. Never fabricate historical series or label synthetic performance as historical.

Forecast scenario defaults must be explicitly documented assumptions with a rationale; historical returns alone do not establish them. If defensible defaults have not been selected, ask the user to enter the returns before showing projections.

## Proposed implementation boundaries

Use a small TypeScript web application, with a pure calculation module, versioned local data, separate break-even solvers, chart/presentation components and deterministic explanation functions. Framework/chart-library selection is an engineering choice, not a product decision requiring another interview. No backend, external AI, accounts or live data integration is required.

## Delivery slices

1. Source and calculation foundation: verified snapshot, synthetic fixtures, projection engine and independent numerical checks. Acceptance: provenance complete for used rules, ledger reconciles and threshold tests pass.
2. Working comparison page: prefilled profile, two fund cards, scenario controls, results and main balance chart. Acceptance: TFR-only, editable growth/contributions/returns and risk overrides work together; inputs invalidate stale outputs.
3. Decision insights: all three break-even visuals, rule-based explanations, separate tax benefit and source/history views. Acceptance: solver edge cases are explained, charts have table alternatives, and the full agreed workflow can be demonstrated.
4. Review: record feedback against requirement IDs, decide the next iteration, and only then extract generalized application components.

## Validation and definition of done

Use unit tests for the financial engine and solvers, independently worked numerical fixtures for representative cases, and browser checks for the end-to-end workflow. Cover narrow and wide viewports and invalid inputs. Do not rely only on snapshots of implementation outputs as proof of financial correctness.

Done means the fictional employee can compare the two sourced strategies, change assumptions, understand the capital gap and all three break-even insights, inspect sources and exclusions, and reproduce the results without signing in. No funds are moved and no enrollment action is part of this prototype.

## Out of scope

Inflation adjustment; monthly pension-income conversion; withdrawal taxation; reinvestment of personal tax benefits; employment changes or interruptions; additional CCNLs/jurisdictions/funds; existing pension transfers/balances; account persistence; live data pipelines; external generative AI.
