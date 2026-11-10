# Spec 1 — Single-page comparison

Status: ready for implementation. Product choices agreed during the requirements interview. Fund-specific factual values require the source verification in Spec 3.

## Goal

Enable the fictional employee to compare Cometa and Allianz Insieme, understand their projected capital difference, and investigate which assumptions reverse the result.

## Initial profile

Italian employee; age 25; first employment; RAL EUR 28,750; CCNL Metalmeccanico Industria level C3 (former fifth level); no subscribed funds. Initial pension balances are zero. Retirement age defaults to 67 and is editable as a planning assumption. Annual salary growth defaults to 0% and is editable. All amounts are nominal euros; inflation is out of scope.

## Screen layout

1. Profile and common assumptions: age, retirement age, RAL, annual salary growth, and assumed marginal tax rate for estimating employee tax benefits. Keep contractual identity visible. Changing contractual identity or first-employment status is outside this first scenario.
2. Two fund strategy cards: investment compartment, risk label, employee contribution mode and value, employer eligibility and rate, and annual return assumptions for conservative, central, and optimistic scenarios.
3. Results: terminal capital for each fund, difference, cumulative employee outlay, cumulative employer contributions, TFR, costs, investment taxes, and separate employee tax benefit estimates.
4. Projection chart: both balance curves for the selected return scenario, an accessible numeric table, and contribution/growth breakdowns. Scenario selector defaults to central; all three scenarios remain available.
5. Break-even insights: additional monthly saving, required annual return, and crossover timing, each with an appropriate graphic and a plain-language explanation.
6. Assumptions and sources: formula conventions, data effective dates, historical performance, exclusions and source links.

Use Italian UI text, EUR formatting and Italian number/date conventions; this is a reversible implementation default, not a separately confirmed product requirement.

## Interaction rules

- Employee contribution modes: TFR only, percentage of salary, or fixed EUR/month.
- Show the equivalent monthly contribution in percentage mode. Percentage contributions grow with salary; fixed contributions remain constant.
- Default both funds to the same employee contribution in euros using the verified qualifying Cometa minimum and its actual contribution base. Do not label that rate as a percentage of RAL unless the bases match. If necessary, derive an equivalent RAL percentage while displaying the contractual calculation separately.
- Editing one strategy does not silently change the other. Provide a reset to the equal-contribution baseline.
- TFR always enters the selected fund; TFR-only sets voluntary employee contributions to zero. Employer eligibility is recomputed from verified rules, never toggled arbitrarily.
- Select comparable-risk compartments initially; permit independent selection and clearly flag risk differences. Do not silently rewrite return assumptions on compartment selection: use sourced defaults where available, otherwise request explicit assumptions.
- Each scenario has an editable annual return per fund. No scenario probabilities are implied. Keep conservative <= central <= optimistic per fund, otherwise show validation feedback.
- Historical returns are a separate chart/table with periods, sources and gross/net basis. Do not populate forecast assumptions from history without explicit disclosure.
- Tax benefit uses an editable assumed marginal rate. Until supplied, display 'not estimated'; do not invent a personalized tax rate from RAL.
- Update results on valid input changes; invalidate obsolete outputs when an input becomes invalid. No registration, server profile storage, browser persistence or AI API is needed.

## Insight presentation

- Extra saving: EUR/month card plus final-capital comparison before and after the additional contribution; show the added employee outlay and warn that this is a higher-spending strategy.
- Required return: marker on a return-versus-terminal-capital curve, alongside the currently assumed return. A required return is a mathematical threshold, not an expected achievable return.
- Crossover: intersections annotated on the balance chart, excluding the shared zero starting balance; report no crossover, tied curves, multiple crossovers, or initial dominance without a later reversal accurately.
- Rule-based explanation: cite the actual computed capital gap and contribution/cost differences. Explain assumptions and sensitivity; do not claim causal attribution of a compounded gap without a counterfactual calculation. No blanket recommendation or invented AI commentary.

## Acceptance

A user can start from the agreed profile, compare default strategies, switch either fund to TFR-only, change employee contributions/risk/returns, and inspect all three insights without leaving the page. Every displayed result identifies its scenario and units. Invalid or incomplete inputs never leave an apparently current numeric recommendation visible. Charts have legends and accessible table equivalents.
