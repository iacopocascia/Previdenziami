# Prototype validation — 10 November 2026

## Delivery iteration and evidence

The implementation was split into sourced data, a pure financial engine, interface, and browser acceptance. Engine/data agents wrote failing tests before their implementations; browser checks were written before the page was available and then exercised against the assembled page. Initial browser execution failed on missing dependencies and sandbox socket permissions; the required local server and Chromium runs succeeded with scoped execution approval. Those environment failures are not financial test failures.

The financial suite currently passes **22 tests**, including independent arithmetic/annuity fixtures, eligibility thresholds, TFR-only, annual salary growth, annual investment tax and loss carry-forward, government-income treatment, contribution deductions, first-employment carryover, entry/fixed charges, ledger reconciliation, invalid inputs, solver bounds, employer-unlock discontinuities, and crossover reversals. Data tests cover source metadata, ISC horizons, equal-euro defaults, restricted compartments and historical provenance.

`npm run test:browser` passes in Chromium using Playwright at desktop **1440 × 1100** and mobile **390 × 844**. Browser tests cover:

- Agreed prefilled profile and the two funds; charts and accessible tables.
- All three return scenarios, salary growth, reset and restored baseline.
- Independent TFR-only and fixed contribution controls; editing Cometa does not change Allianz.
- Independent risk selection, mismatch warning, preserved return assumptions and compartment-specific history.
- Personal tax input leaving fund capital unchanged, annual benefit values, and all 43 annual rows including opening balance.
- Invalid retirement age, marginal rate above 100%, and disordered return scenarios removing stale results; valid recovery.
- Mobile inputs, no page-level horizontal overflow, and empty local/session storage after interactions and reload.
- Source links and no uncaught page errors.

Browser screenshots were opened and visually inspected: [desktop](../artifacts/desktop.png), [mobile](../artifacts/mobile.png). Review found tiny chart labels, clipped contribution precision and a concatenated mobile footer; these were corrected and screenshots refreshed. Annual tax benefit originally displayed a cumulative value in the annual table; the view now uses the separate annual benefit field, with a browser regression asserting equal years at constant salary.

## Requirements traceability

| Requirements | Evidence / implementation |
| --- | --- |
| R01–R03: no-login single page, profile, both funds | Browser baseline, reload/no-persistence checks |
| R04: comparable risk and overrides | Crescita/Bilanciata allocation rationale, independent override and mismatch browser test |
| R05–R06: horizon and salary growth | Browser input/invalid recovery; engine annual growth test |
| R07–R09: equal employee outlay, TFR-only, employer rules | Data equal-euro/base tests; financial eligibility boundaries; browser independent controls |
| R10: capital net of accumulation costs/tax, before payout tax | Engine ledger, independent financial fixtures, UI boundary labels |
| R11: separate tax benefit | Engine deduction/carryover tests and unchanged-capital browser test; annual and cumulative views |
| R12: future scenarios | Scenario browser checks and invalid-order invalidation |
| R13: separate historical context | Versioned historical tables and source links; missing points kept unavailable |
| R14: balance composition | Reconciled engine ledger and expandable cumulative breakdown |
| R15–R18: extra saving, required return, crossover and graphics | Solver numerical/edge fixtures, rendered insight graphics, sensitivity numeric table and textual equivalents |
| R19: dated sources | Data provenance tests, source register in page, research dossiers |

## Modeling boundaries retained visibly

The result is a comparison of explicitly documented scenarios, not a verified payslip quote. RAL, contractual/TFR bases, hire/enrollment assumptions and current-law projection remain visible. Government-security income share is an editable assumption with ordinary 20% taxation at its zero default. Direct Allianz employer entitlement is unconfirmed and the conservative scenario explicitly uses zero; subsequent transfer is outside scope. Monthly remittances and fee smoothing are disclosed approximations. Personal tax savings do not flow into capital. Some non-default compartments have incomplete historical series and say so rather than inventing observations. Life Cycle/Multiasset is not separately selectable. Inflation, withdrawal taxation, annuity conversion, existing balances, external AI and profile persistence remain out of scope.

## Reproduce

From `prototype/`, run `npm install`, `npm test`, `npm run build`, then `npm run dev -- --port 5173`. With the server running, use `npm run test:browser`. Browser runner uses `/usr/bin/chromium`; set `PROTOTYPE_URL` to test a different local server. The managed workspace may require execution approval for listening sockets and Chromium. Screenshots are regenerated by the browser suite.
