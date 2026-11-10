# First use case — Italian early-career employee

Status: product scope agreed; implementation specs written; source verification pending. This is a requirements document, not a statement of verified pension law.

## Person and decision

Fictional Italian citizen, employed in an Italian enterprise, age 25, first employment, annual gross salary (RAL) EUR 28,750, CCNL Metalmeccanico Industria level C3 (former fifth level), no existing pension fund subscriptions.

Compare Cometa with Allianz Insieme to understand the effect of employee contributions, applicable employer contributions, investment choices, and costs on projected retirement capital. TFR goes into the selected fund in all scenarios. Retaining TFR outside pension funds is out of scope.

## Confirmed requirements

| ID | Requirement | Observable acceptance criterion |
| --- | --- | --- |
| R01 | Single-page prototype without login or saved personal profiles | User can complete a comparison without registering; the application does not persist entered profiles. |
| R02 | Prepopulate the fictional profile | Initial profile displays the agreed age, RAL, employment and CCNL information. |
| R03 | Compare Cometa and Allianz Insieme | Both funds have independently identifiable inputs and outputs. |
| R04 | Default to comparable investment risk, with independent compartment overrides | User can change either compartment and see when risk levels differ. Risk mapping must be documented. |
| R05 | Editable retirement age, default 67 | Horizon updates when changed; 67 is labeled a modeling assumption, not a guaranteed legal retirement age. |
| R06 | Constant salary baseline with editable annual growth | Default growth is 0%; edits affect salary-linked contributions and TFR over the horizon. |
| R07 | Default employee contributions to Cometa minimum for employer eligibility, equal euro amount in the other fund | Initial contributions use the verified qualifying rate and pay basis; corresponding euro amount is visible for both funds. |
| R08 | Editable employee contributions and independent TFR-only options | Each fund can be modeled with no voluntary employee contribution; employer contributions follow verified eligibility rules. |
| R09 | Apply employer contribution rules rather than assume universal matching | Display applicable rates, contribution bases, eligibility conditions, effective dates and sources. |
| R10 | Show projected capital before withdrawal taxation | Annual balances and terminal balance include documented fund costs and investment taxation; withdrawal taxation is excluded explicitly. |
| R11 | Show employee tax benefit separately | Estimated benefit is visible with assumptions and is not reinvested in the projection. |
| R12 | Editable future return assumptions, conservative/central/optimistic scenarios | Changing assumptions changes projections; scenarios are not described as probabilities. |
| R13 | Separate historical performance from projections | History has source dates and periods and is not presented as a forecast. |
| R14 | Explain balance composition | Show employee contributions, employer contributions, TFR, costs, and investment growth with a documented reconciliation. |
| R15 | Calculate extra saving needed to close the final-capital gap | Display additional EUR/month required in the trailing fund, explicitly showing the additional employee spending. |
| R16 | Calculate required annual return to break even | Show the modeled return required to match the comparison fund under stated fixed assumptions. |
| R17 | Calculate crossover timing | Plot projected balances and identify crossover events; explicitly show when none occur in the horizon. |
| R18 | Use graphs and infographics for all three break-even insights | Each insight includes a visualization, units, comparison target and assumptions. |
| R19 | Use a dated, source-linked static data snapshot | Rules, costs and historical inputs have provenance and effective or observation dates; live integrations are not required. |

## Verification required before calculation implementation

- Confirm exact contractual coverage and Cometa eligibility; do not infer the full employer agreement from the level label alone.
- Verify age/first-employment-specific provisions, qualifying employee contribution, employer contribution, contribution bases and conditions.
- Verify TFR calculation and allocation conventions, costs, access to selected compartments, and investment taxation.
- Verify tax deductibility rules and the information needed for the separate estimated employee tax benefit.
- Avoid assuming that all percentages apply to RAL or that an open fund can never receive employer contributions.
- Track source publication/effective dates separately from retrieval dates. Synthetic assumptions must be labeled and separated from verified rules.

## Final decisions and implementation specs

Employee contributions support percentage of salary and fixed EUR/month; percentages grow with salary, fixed amounts do not. Inflation is excluded. Employee tax benefit uses an editable assumed marginal tax rate and verified deduction rules. Explanations are deterministic; external AI is deferred.

- [Interface and interaction](01-interface-spec.md)
- [Calculations and break-even analysis](02-calculation-spec.md)
- [Data, validation and delivery](03-data-and-delivery-spec.md)

The specs distinguish agreed product behavior from engineering defaults and facts requiring authoritative verification.

## Candidate component boundaries

Profile and strategy controls; versioned fund/rule data; deterministic projection engine; break-even solvers; visual comparison; explanation layer. Validate boundaries against the first working workflow before generalizing.

## Acceptance completion

Before implementation, add numerical fixtures with independently calculated expected balances, eligibility threshold cases, TFR-only cases, equal-strategy cases, crossover/no-crossover cases, and unreachable break-even cases. No verified numeric pension rates or costs have been established during this interview.
