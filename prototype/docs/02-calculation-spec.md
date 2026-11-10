# Spec 2 — Deterministic projections and break-even analysis

Status: ready for implementation subject to verified rule inputs. Monthly mechanics below are implementation conventions; they must be displayed as assumptions.

## Inputs and boundaries

Common inputs: age, retirement age, RAL, annual salary-growth rate, assumed marginal tax rate (optional), zero opening balances. Strategy inputs: compartment, employee contribution mode/value, three annual gross nominal return assumptions and versioned fund rules/costs/tax treatment. Contributions and forecasts are synthetic planning scenarios, not guaranteed future entitlements.

Validate finite numbers, positive salary, nonnegative contributions, retirement age greater than current age and no later than 100, current age at least 18, annual salary growth and annual gross return greater than -100%, and marginal tax rate between 0% and 100%. Use whole ages for this prototype. Reject negative balances created by an unsupported cost convention instead of silently clamping them. These bounds are technical prototype limits, not pension eligibility rules.

## Monthly conventions

N = 12 * (retirement age - age). Salary in projection year y (zero-based) = initial RAL * (1 + annual salary growth)^y. Hold salary constant within each projection year. Annual contractual accruals/contributions are allocated across 12 equal end-of-month payments; disclose that this smooths actual payroll timing, including additional salary installments.

Percentage employee contributions use the selected, explicitly named salary base; the general control is percentage of RAL, while contractual eligibility is evaluated using the verified contractual base. Fixed employee contributions are EUR/month. TFR and employer contribution functions must use sourced bases and eligibility rules. First-employment and age-related conditions must follow their verified time dependence, not freeze the employee at age 25 for the whole horizon.

Convert annual effective gross return r to monthly rate: (1+r)^(1/12)-1. Apply returns to opening monthly balance, then documented asset-based costs and applicable investment tax treatment, then end-of-month contributions net of applicable contribution charges. Charge fixed costs on their documented schedule. Any simplification of a published fee or tax schedule must be explicit and reviewed rather than hidden in a return assumption.

Fund tax rules may require annual assessment, asset-class weighting and loss carry-forward. Accrue required information monthly and settle according to the verified rule schedule. Do not replace these rules with a universal monthly tax on positive returns. If costs and tax interact, the fund adapter must specify the order and assessment bases. Keep the engine general enough to support this without duplicating calculations in the UI.

## Outputs and reconciliation

Return monthly balances, annual chart points including the opening point, terminal capital, employee/employer/TFR contribution totals, gross investment gain or loss, costs and investment taxes. Maintain a ledger satisfying:

closing balance = opening balance + employee + employer + TFR + gross investment gain - costs - investment taxes.

Tax credits/refunds, if supported by a verified rule, are recorded with an explicit sign. Verify reconciliation numerically before rounding. Retain full calculation precision and round only for presentation.

Employee tax benefits are separate estimates: apply the user-entered marginal rate to the remaining eligible employee deduction under verified annual limits and rules, accounting for other contributions consuming the same limit. Do not include TFR in deductible contributions unless an authoritative rule requires it. Assume no other deductible pension contributions for this fictional profile and disclose the assumption. Do not reduce balance contributions by the estimated tax saving or reinvest it. Report annual and cumulative benefit; omit numeric benefit if the rate is missing.

## Break-even analyses

Run each analysis for the currently selected scenario, with both baseline strategies and the same horizon visible. All solvers call the same projection engine and re-evaluate eligibility, fees and taxes. Ignore the separately displayed personal tax benefit in capital-equality targets.

1. Additional saving: identify the fund with lower terminal capital. Find the smallest nonnegative constant extra EUR/month added to that fund's employee contribution schedule that reaches the leading fund's baseline terminal capital. Keep the leading strategy fixed. Preserve the original contribution schedule and add the constant monthly supplement. Re-evaluate employer eligibility where it changes. Report added outlay and any newly unlocked employer contribution. If already equal, report zero. If a rule discontinuity jumps over the target, report the minimum qualifying supplement and resulting surplus rather than claim exact equality.
2. Required return: keep contributions and all other inputs fixed and solve for the trailing fund's constant annual gross return needed to match the other fund's baseline terminal capital. Show that replacing its return assumption is a sensitivity experiment. For equal baseline capital, state equality at the current assumptions.
3. Crossover: inspect monthly balance differences. Exclude the common origin and report the first reversal of dominance, subsequent reversals and equality intervals separately. Use monthly precision and label it accordingly. A fund that leads from the first positive balance and never loses that lead has no later crossover.

Use bracketed numerical search only on intervals shown to be monotone; explicitly evaluate eligibility thresholds/discontinuities. Suggested technical search bounds: extra saving EUR 0–100,000/month, annual return greater than -100% up to 100%. Disclose bounds and distinguish 'no solution within search bounds' from mathematical impossibility. Stop extra-saving search within EUR 0.01/month; return search within 0.000001 in fractional annual rate, reporting residual capital error. Solver failure must produce an explanatory state, not a fabricated threshold.

## Acceptance examples

- With zero returns/costs/taxes and no employer contribution, zero opening capital and EUR 100/month total inflow, 12 monthly payments yield EUR 1,200.
- With identical strategies and data, all balances match, extra saving is zero, and curves are identified as tied.
- Moving below/at/above a verified eligibility threshold changes employer contributions exactly as the rule specifies.
- TFR-only never retains a conditional employer contribution when its qualifying condition is absent.
- Zero salary growth holds salary constant; nonzero growth changes salary only at the stated annual boundary.
- Gross-return, fee and tax fixtures prove that charges are applied once; historical net performance is never taxed again as if it were gross forecast input.
- All monthly and terminal ledgers reconcile; personal tax benefit does not alter balances.
- Break-even fixtures include reachable, bound-exceeded and eligibility-discontinuity cases, plus zero/one/multiple crossover cases.
