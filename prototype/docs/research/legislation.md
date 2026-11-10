# Italian supplementary pension legislation — research baseline

Research cut-off and retrieval date: **9 November 2026 (UTC)**. Scope: a fictional 25-year-old, first-job Italian private-sector employee, RAL €28,750, Metalmeccanico Industria C3 (former level 5), no existing pension fund, comparing Cometa with Allianz Insieme and allocating all future TFR. This document distinguishes enacted rules from product/contract eligibility and modelling assumptions. It is a dated research input, not a determination of an individual's payroll entitlement.

## Findings that change a pre-2026 model

| Item | Position at the research cut-off | Effective date / transition | Evidence |
|---|---|---|---|
| Ordinary contribution deduction | **€5,300**, shared by employee and employer contributions; TFR excluded | Tax year 2026 onward; €5,164.57 is the historical limit through 2025 | [Budget law, art. 1(201)(a)][L1]; [COVIP February 2026 infographic][C1] |
| First-employment extra deduction | Eligible first employment after 31 December 2006: unused contribution capacity from first five participation years can support extra deductions in the following 20 years; current annual extra maximum **€2,650** | Extra deduction starts after the fifth participation year, not in year one | [Budget law amendment][L1]; [Ministry FAQ, fiscalità][M1] |
| New private-sector first hires | Automatic enrollment unless a different choice is made within **60 days**; normally includes contractual employee and employer contribution plus TFR | First hires from **1 July 2026**; hires before July retain the former six-month process | [Budget law, art. 1(204)–(205)][L1]; [COVIP investment instructions, §§1–3][C2] |
| Employer contribution portability | Legislative removal of the collective-contract restriction in the **transfer** provision; this does not create universal first-day employer contributions for someone opening any individual product | Statutory date **31 October 2026**, after an April postponement from July; Ministry FAQ describes **1 November** | [Budget law, art. 1(201)(c)][L1]; [April law, amendment to DL19 art.29][L2]; [Ministry transfer FAQ][M1] |
| Ordinary retirement capital maximum | **50%**, subject to statutory exceptions permitting full capital | Original Budget law's proposed-in-operation 60% was reversed before its July application | [DL62, art.16-ter, coordinated with law112][L3] |
| New retirement options | Defined-duration annuity and constrained discretionary withdrawals; also instalment payment for at least five years | First two from July; instalments from **31 October 2026**; operational transition may run to **31 December 2026** | [COVIP 25 June instructions, §§3,7][C3]; [DL62 art.16-ter][L3] |

The original December 2025 law alone is insufficient: its initial July transfer date and 60% capital wording were amended in 2026. A draft bill, parliamentary amendment, or June article written in the future tense must not override the later enacted text. COVIP itself flags parts of its general introductory guide as being revised for the 2026 changes. [COVIP guide landing page][C4]

## TFR: amount, destination and case implications

Article 2120 calculates annual TFR accrual from the **TFR-eligible remuneration**, divided by 13.5. The usual private-employee shorthand of approximately **6.91%** also reflects the statutory contribution adjustment; it is not a universal rule that all components of RAL are the TFR base. The civil-code revaluation of retained TFR is 1.5% plus 75% of the relevant ISTAT inflation increase, excluding current-year accrual from that year's revaluation. These retained-TFR rules do not determine the return earned once TFR is invested in a pension fund. [Law297/1982, art.1 replacing civil-code art.2120][L4]; [Senate explanatory dossier, TFR section][P1]

**Illustration, not a verified payslip:** assuming both TFR-eligible remuneration and the base for the 0.50% adjustment equal €28,750, use `28,750 / 13.5 − 0.005 × 28,750` = **€1,985.88/year** (before final rounding). A model using 12 equal monthly payments would allocate approximately €165.49/month. Multiplying by the rounded shorthand 6.91% instead gives €1,986.63, about €0.75 more, so that shorthand should not replace the exact conditional formula. Actual payroll accrual bases, rounding, partial-year work and remittance dates must be obtained from payroll/fund documentation; twelve equal flows are an implementation convention.

For new first hires from 1 July 2026, the default destination is the collective form identified by applicable collective agreements (including company/territorial agreements), or the form with most employees enrolled if several apply, unless the company agreement determines otherwise. In the absence of such agreements, the residual destination is Cometa. Full contractual contributions accompany automatic enrollment where applicable; in the no-agreement residual case, only TFR is contributed. Defaults must now consider age and investment horizon: the old blanket statement that silent enrollment always means a guaranteed compartment is no longer safe. [Budget law, new art.8(7-bis)–(7-ter)][L1]; [COVIP 23 June, §§2–3][C2]

The actual **first hiring date is missing** from the fictional profile, so the app cannot infer the enrollment deadline from age or first-job status alone. Automatic enrollment after the 60-day period may already have created a position even if the employee describes themselves as having “no fund.” For a July-or-later hire, Ministry guidance describes contributions from the hiring date, with payments beginning after the choice period, and valuation when paid. Explicit choice of another fund is possible within the period. [Ministry, automatic-enrollment directives][M2]

Keeping TFR outside supplementary pensions can subsequently be changed to pension allocation; moving future TFR back to the employer is not the ordinary reversible alternative after a pension allocation. Existing TFR predating enrollment does not automatically transfer: the Ministry says prior TFR may be contributed if agreements permit. The present comparison can therefore consistently assume **all future TFR**, but should not silently add a pre-existing TFR balance. [Ministry FAQ, TFR and prior balances][M1]

The 2026 Budget also changes the employer-size rules for non-fund TFR paid to INPS Treasury, including a 60-employee condition for the new 2026–27 extension and a future 40-employee rule from 2032. “TFR in azienda” is consequently an economic shorthand and need not describe physical custody. This does not change the two pension-fund strategies when both invest all TFR. [Budget law, art.1(203)][L1]

## Employer contribution: initial eligibility and later portability

These are different questions:

1. **Initial eligibility.** An open pension fund can receive collective adhesions; it is wrong to encode `employerContribution = 0` solely because the fund is open. Applicable company/collective agreements and the product's adhesion form determine entitlement, amount, salary base and required employee contribution. An individual first enrollment in Allianz Insieme does **not**, solely through the 2026 transfer reform, establish immediate entitlement to Cometa's contractual employer payment. [Ministry FAQ, “fondo pensione aperto” and explicit enrollment][M1]; [COVIP default instructions §3 includes collective open funds][C2]
2. **Transfer.** D.lgs.252 art.14(6) grants the ordinary transfer right after two years of participation in the form. Budget law art.1(201)(c) deletes the contractual-limit phrase from its last sentence on future TFR and any employer contribution to the selected destination. The April conversion postpones that deletion to **31 October 2026**. It concerns the continuation of an existing contribution right on transfer; the contribution amount and qualifying contribution do not become an unrestricted gift independent of the underlying employment agreement. [Budget law amendment][L1]; [April conversion, DL19 art.29(11-bis)][L2]; [Ministry transfer FAQ][M1]

For this **never-enrolled first-job case**, a pathway of initial Cometa enrollment, earning the contractual contribution, then a possible transfer after two years must be a distinct strategy. It cannot be silently treated as direct Allianz enrollment from month one. The Ciao Elsa portability FAQ makes this same operational distinction; its separate general FAQ oversimplifies initial eligibility by speaking only of negotiated funds, so it should not be generalized over collective open-fund agreements. [Ciao Elsa portability FAQ][E1]; [Ciao Elsa initial-contribution FAQ][E2]

**Date discrepancy:** the enacted April amendment says “a decorrere dal 31 ottobre 2026”; the Ministry FAQ says “dal 1° novembre 2026” and refers to Budget comma203, whereas the deletion is actually in **comma201(c)** (comma203 concerns Treasury TFR). Treat the statute as the source for a legal date, preserve the discrepancy in the evidence log, and do not manufacture an extra reform. Both dates precede the 9 November cut-off. [April conversion][L2]; [Ministry FAQ][M1]

**Unresolved implementation/legal friction:** an article published 5 November reports employer/union opposition and sector instructions seeking to stop contractual contributions when leaving the negotiated fund, specifically including Federmeccanica/Cometa. This is evidence of a live dispute and possible payroll resistance, **not evidence that the statute has been repealed**, and not an authoritative adjudication of the clauses' validity. Neither a universal promise of uninterrupted payment nor a categorical statement that transfer always forfeits the payment is justified by this research. Obtain the actual applicable agreement, employer procedure and current fund documentation before assigning a guaranteed contribution to a transferred position. [Money.it, 5 November 2026, sections on sector contracts and legal dispute][N1]

**Recommended data state:** separate `initialCollectiveEligibility`, `employeeMinimumSatisfied`, `employerContributionBase`, `transferAfterTwoYears`, and `portabilityOperationalStatus`. For direct individual Allianz in this profile use “employer contribution not established by supplied information,” with a conservative zero scenario clearly labelled, rather than an assertion that all open funds are legally ineligible.

## Contribution deductions and personal tax benefit

The ordinary annual ceiling is **€5,300 across all pension forms combined**. Employee and employer contributions share it; TFR does not consume it. This is a deduction from taxable income, not a tax credit or refund of the contribution itself. Amounts above the ceiling may be paid but are not automatically deductible. Non-deducted contributions must be communicated by 31 December of the following year, or earlier when the right to the benefit arises, to avoid taxing them again at payout. [COVIP infographic, contribution section][C1]; [D.lgs.252 art.8(4), MEF indexed text][L5]; [Ministry fiscal FAQ][M1]

For a first occupation **after 31 December 2006**, art.8(6) permits an additional deduction during the **20 years following the fifth participation year**, limited by unused capacity from the first five years and by half the ordinary annual limit. With today's €5,300 ceiling that is at most €2,650 extra per year, **€7,950 combined**, subject to an adequate remaining carryover pool and actual deductible contributions. This is not a yearly unrestricted €7,950 ceiling, does not carry over all unused deduction forever, and is not available during the first five years. [Budget amendment of art.8(6)][L1]; [Ministry fiscal FAQ][M1]

For a fictional participant starting in 2026 and constant future rules, the pool can be modelled as `sum(first-five-year allowable contributions) − sum(actual employee+employer contributions in those years)`, floored at zero. Consumption from participation year six is bounded by the remaining pool, the annual €2,650 extra and actual contributions exceeding €5,300. The first-five-year pool is at most €26,500 **only under the explicit constant-current-limit assumption**. For members whose first five years straddle earlier tax years, do not retrospectively substitute €5,300 for every historical ceiling without additional tax guidance. TFR is excluded from this calculation. [Amended statutory formula][L1]

The personal tax-benefit estimate should apply only to deductible **employee** spending after recognising employer contributions consuming the same ceiling; describe employer contributions separately. Use an optional user-supplied marginal rate unless an actual tax calculation is implemented. In 2026 the national IRPEF middle rate is **33%, not 35%**, but RAL is not taxable income: compulsory contributions, other income, deductions, local surtaxes and employment tax relief affect the result. In particular, €28,750 RAL alone does not justify assigning a 33% marginal saving. A constant percentage is a disclosed approximation and the estimated saving must not automatically be reinvested into fund capital. [Government Budget focus, art.1(3)–(4)][P2]; [COVIP infographic example][C1]

## Investment taxation and loss handling

For these defined-contribution pension forms, the ordinary substitute tax is **20% of the net result accrued in the tax period**, not 20% of contributions, assets or withdrawals. Qualifying Italian/white-list public-security income receives effective **12.5%** treatment by including **62.5%** of that income in the 20% taxable base. The rule can apply through qualifying investment funds using the prescribed attribution method. It is not determined by the word “bond” in a compartment name: corporate bonds and other assets are not automatically government securities. [D.lgs.252 art.17(1)–(2), version applicable through 2026][L6]; [Agenzia Entrate circular2/E, 13 February2015, public-security provisions][A1]

Article17(2) permits a declared negative management result to offset future positive results to the extent available, or to be used against results of other investment lines under the statutory allocation mechanism. A projection taxing each positive month and forgetting losses overstates tax and violates the annual structure. A simplified standalone line should retain a loss pool; fund-level cross-line tax accounting cannot be claimed as an exact individual refund without the fund's implementation. Never assume the member can offset the pension fund's tax losses against their personal brokerage gains. [D.lgs.252 art.17(2)][L6]

Model implications (inferences from the cited rules):

- Record annual results, tax-eligible government income and carried losses; apply annual tax after the documented cost/tax-base conventions.
- A constant weighted rate `20% × (1 − 0.375 × q)` is only an approximation where `q` is the share of **taxable income** eligible for the concession. A portfolio government-bond asset weight is not necessarily that income share.
- If asset/income attribution is unavailable, show an explicit assumption or tax range instead of inventing a fund-specific “effective tax rate.”
- Published historical net performance must be checked for its existing fee/tax treatment before being reused. Do not charge fees or taxes a second time to an already net series.

COVIP's published return-list methodology specifically says negotiated/open-fund returns deduct compartment-asset costs and tax on returns. This does not prove every direct member fee has already been charged. Use compound annual returns over common dates, distinguish them from arithmetic averages and personal money-weighted performance, and keep any forecast assumptions separate from historical data. [COVIP return-list methodology, indexed official text][C7]

**Already enacted future recodification:** Normattiva's retrieved art.17 version explicitly ends on **31 December 2026**. MEF lists new **D.lgs.19 June2026 n.117, art.257** as the replacement tax-regime provision; its application is from **1 January2027**. A future-rule review must track this reference change rather than interpret an undated “abrogato” search result as evidence that pension funds are tax-free in November2026. This research does not establish every coordination amendment for 2027 or guarantee identical law over a 40-year projection. [Normattiva dated version][L6]; [MEF new tax code index, art.257][L7]; [secondary reproduction identifying 2027 application][N2]

## ISC is a comparison indicator, not an extra annual charge

The COVIP ISC compares the internal rate of return of a standard plan without costs to the equivalent plan including costs, excluding taxation. Standard assumptions are **€2,500 annual contribution**, paid at the beginning of each year, **4% annual return**, and **2, 5, 10, 35-year** holding periods. It summarises the effect of differing fixed, entry, contribution and asset charges. It is not the personal tariff for this RAL or an additional management fee. [COVIP methodology, p.1][C5]

The methodology excludes incentive fees, trading commissions and exceptional/unpredictable items. It includes transfer cost for the earlier horizons but excludes it from the 35-year retirement horizon. Consequently, do not claim ISC captures absolutely every possible cost or extrapolate it as an exact fee for a 42-year horizon. Either simulate the actual fee schedule once or use a plainly labelled ISC-based approximation; **never subtract both the fee schedule and ISC**. [COVIP methodology, p.1][C5]; [COVIP comparator explanatory page][C6]

## Benefits, access and future retirement caveats

For a new participant with post-2007 accruals, ordinary eligible retirement payments use a **15%** withholding rate reduced by **0.30 percentage points for each participation year beyond 15**, down to **9%** after 35 years. This applies to the statutory taxable component, excluding already-taxed investment income and properly communicated non-deducted contributions, rather than applying to the entire account balance. TFR in the pension position forms part of the payout-tax context; excluding it from the initial contribution deduction does not make its payout generally tax-free. [COVIP tax infographic][C1]; [Ministry benefits/fiscal FAQ][M1]

The 2026 ordinary capital limit is **50%**. Full capital remains conditional, including the statutory test concerning an annuity obtained from at least 70% of the final position versus 50% of the social allowance. There is no basis to label the entire projected age-67 balance as freely withdrawable cash. [Budget law amended test][L1]; [DL62 art.16-ter restores 50%][L3]

New defined-duration annuities and constrained withdrawals differ from the new at-least-five-year instalment option. Instalments use **20% reduced by 0.25 percentage points per year beyond 15, minimum 15%**, so “every retirement payout is taxed 15%–9%” is now false. COVIP permits an implementation transition until 31 December2026: funds must collect requests but may complete liquidation after their operational adaptation. Life expectancy, longevity risk, retained investment risk, residual capital and product costs need separate treatment. [Budget law art.11(6-bis)–(6-ter) amendments][L1]; [COVIP benefit instructions §§3,6–7][C3]

The chosen projection end age must be labelled an **assumed horizon**, not a legal promise of retirement eligibility. Neither age25 nor “first job” fixes future compulsory contribution years, thresholds, age adjustments, annuity coefficients, social allowance or access rules decades ahead. Projected terminal capital after accumulation costs/tax is also different from final benefits after payout taxation and any annuity conversion costs. Do not subtract a generic 9% from the full terminal balance to represent a guaranteed future net pension.

## Educational context and very recent implementation material

Long horizons, risk tolerance, liquidity needs and investment policies belong together when selecting a compartment; age25 alone does not determine suitability. Compare actual equity exposure, guarantees and common historical periods as well as costs. This is a modelling/suitability inference consistent with [COVIP's young-saver checklist][C8], whose indexed material was available but direct PDF access returned403; its exact publication date was not verified. A pension account should not be presented as unrestricted emergency cash.

Ciao Elsa is useful secondary plain-language context. Its own [commercial disclosure][E4] says it receives commissions from providers for some distributed products and charges for some services. It states Elsa Srl's RUI registration and IVASS supervision; this research has not independently checked the register. A product's availability through its comparator or its age-based display order is not evidence of suitability or superiority. Its June30 reform article remains prospective about October portability, so pair it with enacted law and later official material. [June reform explainer][E3]

The official COVIP acts index also identifies **Circular22 October2026 prot.6616**, “Ulteriore aggiornamento degli Statuti e dei Regolamenti.” The title/date were verified from indexed official results; direct retrieval returned403 and the circular's attachment was **not inspected**. It is an explicit implementation follow-up for the next review, not evidence here that portability was repealed or every fund's operational process is complete. Current product-specific October documentation should be checked separately. [Official circular landing page][C9]

## Verification status and unresolved inputs

**Verified from primary official sources:** 2026 €5,300 limit; amended first-employment formula; July automatic-enrollment framework; enacted October portability date; 50% capital reversal; new benefit forms and transition; 20% investment-tax structure, government-security concession, losses; ISC construction.

**Requires case-specific confirmation:** exact hire date; actual first pension participation date; CCNL version and applicable company agreement; Cometa employee threshold and employer rate/base (including young-member provision); direct collective Allianz eligibility; employer/fund handling of portability amid the current dispute; remuneration base for TFR; actual fee schedules; eligible government-income share; any earlier non-deducted contributions or loss balances. Product documents are researched separately in `cometa.md` and `allianz-insieme.md`.

**Not established:** an immediate statutory employer contribution for a never-subscribed person choosing an arbitrary individual open fund; a court resolution of the late-2026 contract dispute; exact individual tax saving from RAL alone; guaranteed retirement age, returns, future fiscal ceilings or full-capital availability.

## Source register and reading notes

All links below were retrieved or checked on **2026-11-09**. “Indexed” means the search engine exposed the relevant text but a full-page fetch failed; do not represent that as a successfully downloaded primary document.

| ID | Authority / document | Specific locator and verification note |
|---|---|---|
| L1 | [Gazzetta, law30 December2025 n.199][L1] | Art.1, commi201–205, full HTML read. Original wording only; apply L2/L3 amendments. |
| L2 | [Gazzetta, law20 April2026 n.50 conversion annex][L2] | Annex amendment to DL19 art.29 inserts comma11-bis, replacing Budget art.1(202), October31 date. Full relevant passage read. |
| L3 | [Gazzetta, coordinated DL30 April2026 n.62 / law25 June2026 n.112][L3] | Art.16-ter(1): 60→50; (2): instalment-date postponement. Direct article retrieved. |
| L4 | [Normattiva, law29 May1982 n.297][L4] | Art.1 / civil-code2120: remuneration/13.5, 1.5%+75% inflation. Indexed official text. |
| L5 | [MEF tax database, D.lgs.252 art.8][L5] | Contribution deduction and combined worker/employer wording; indexed official text, full fetch returned502. |
| L6 | [Normattiva, D.lgs.252 art.17, dated September9 2026][L6] | Paras1–2; page explicitly states version from2017 to2026-12-31. Full text read. |
| L7 | [MEF tax database, D.lgs.117/2026][L7] | Official indexed contents: art.257 successor to art.17; detailed transition additionally flagged via N2. |
| A1 | [Agenzia Entrate circular13 February2015 n.2/E, MEF official archive][A1] | Public-security income, 62.5% inclusion, indirect holding attribution. Indexed official text; original full fetch unreliable. |
| C1 | [COVIP fiscal infographic, published20 February2026][C1] | One-page contribution, return and payout summaries. Read PDF text. Simplified material predates new benefit options: supplement with L3/C3. |
| C2 | [COVIP delibera23 June2026, GU7 July2026 26A03271][C2] | §§1–3: July scope, definitions, life-cycle and collective open funds. Full HTML read. |
| C3 | [COVIP delibera25 June2026, GU7 July2026 26A03313][C3] | §§3,6,7: new benefits, risks and December31 transition. Full HTML read. |
| C4 | [COVIP introductory-guide landing page][C4] | Explicit revision warning for 2026 changes. Older general guide is not sufficient for current enrollment/payout rules. |
| C5 | [COVIP ISC methodology PDF][C5] | Page1: IRR difference, assumptions, included/excluded costs. Read PDF text. Catalog also lists later updates; use current product Scheda dei costi for the applicable numerical ISC. |
| C6 | [COVIP live ISC comparator][C6] | Standardised horizons/assumptions and product-specific footnotes, including incentive-fee exclusion. |
| C7 | [COVIP return listing][C7] | Indexed official methodology: compartment costs and negotiated/open-fund tax deducted. Direct access may return403. |
| C8 | [COVIP young-saver checklist][C8] | Indexed official educational material; direct PDF403, exact publication date unverified. |
| C9 | [COVIP circular22 October2026 prot.6616][C9] | Official indexed title/date only; direct403; attachment not inspected. |
| M1 | [Ministry of Labour, supplementary-pension FAQ][M1] | Fiscalità; first hire/TFR; open funds; transfer. Read current page. Date and comma-number discrepancy preserved above. |
| M2 | [Ministry, COVIP automatic-enrollment directives][M2] | New hires from July, timing, choice and residual scheme. Current official indexed page. |
| P1 | [Senate dossier183, 17th legislature][P1] | Historical TFR explanatory section; indexed6.91% and statutory revaluation only, not a source for 2026 enrollment. Full-page bot check. |
| P2 | [Presidency, Budget2026 focus][P2] | IRPEF middle bracket reduction35→33%, art.1(3)–(4). Official indexed PDF. |
| E1 | [Ciao Elsa portability FAQ][E1] | Secondary commercial educator: direct first enrollment versus two-year transfer. No visible publication date. |
| E2 | [Ciao Elsa employer-contribution FAQ][E2] | Secondary simplification limited to negotiated-fund route; must not erase collective open-fund entitlement. |
| E3 | [Ciao Elsa 2026 reform article][E3] | Updated30 June2026; October change described as future and debated. Useful chronology, not current November operational confirmation. |
| E4 | [Ciao Elsa commercial disclosure][E4] | Provider-paid commissions and paid services; full page read, no visible publication date. |
| N1 | [Money.it,5 November2026][N1] | Secondary reporting of employer/union dispute and Federmeccanica reaction. Not authority on legality or a verified payroll policy for this employer. |
| N2 | [Iuspedia reproduction, new art.257][N2] | Secondary corroboration of January2027 application; review official consolidated new code before implementing2027 rules. |

[L1]: https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticolo?art.codiceRedazionale=25G00212&art.dataPubblicazioneGazzetta=2025-12-30&art.flagTipoArticolo=0&art.idArticolo=1&art.idGruppo=1&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.progressivo=3&art.versione=1
[L2]: https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticolo?art.codiceRedazionale=26G00067&art.dataPubblicazioneGazzetta=2026-04-20&art.flagTipoArticolo=1&art.idArticolo=1&art.idGruppo=0&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.progressivo=0&art.versione=1
[L3]: https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticolo?art.codiceRedazionale=26A03291&art.dataPubblicazioneGazzetta=2026-06-27&art.flagTipoArticolo=0&art.idArticolo=16&art.idGruppo=4&art.idSottoArticolo=3&art.idSottoArticolo1=10&art.progressivo=0&art.versione=1
[L4]: https://www.normattiva.it/atto/caricaDettaglioAtto?atto.codiceRedazionale=082U0297&atto.dataPubblicazioneGazzetta=1982-05-31&tipoDettaglio=singolavigenza&dataVigenza=07%2F11%2F2022
[L5]: https://def.finanze.it/DocTribFrontend/getAttoNormativoDetail.do?ACTION=getArticolo&codiceOrdinamento=0000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000&id=%7B9D90DA16-91FF-4CDC-A68E-043A035CE74C%7D
[L6]: https://www.normattiva.it/atto/caricaDettaglioAtto?atto.articolo.numero=17&atto.codiceRedazionale=005G0278&atto.dataPubblicazioneGazzetta=2005-12-13&bloccoAggiornamentoBreadCrumb=true&classica=true&dataVigenza=09%2F09%2F2026&generaTabId=true&tipoDettaglio=singolavigenza&title=lbl.dettaglioAtto
[L7]: https://def.finanze.it/DocTribFrontend/getAttoNormativoDetail.do?ACTION=getSommario&id=%7BD0F9C7A0-0000-C518-B9A1-B2800D24BB1A%7D
[A1]: https://def.finanze.it/DocTribFrontend/getPrassiDetail.do?id=%7BD19C14F9-A0FE-4773-BD81-053C3C5E393D%7D
[C1]: https://www.covip.it/sites/default/files/i_vantaggi_fiscali_della_previdenza_complementare.pdf
[C2]: https://www.gazzettaufficiale.it/atto/vediMenuHTML?atto.codiceRedazionale=26A03271&atto.dataPubblicazioneGazzetta=2026-07-07&tipoSerie=serie_generale&tipoVigenza=originario
[C3]: https://www.gazzettaufficiale.it/atto/vediMenuHTML?atto.codiceRedazionale=26A03313&atto.dataPubblicazioneGazzetta=2026-07-07&tipoSerie=serie_generale&tipoVigenza=originario
[C4]: https://www.covip.it/per-il-cittadino/educazione-previdenziale/guida-introduttiva-alla-previdenza-complementare
[C5]: https://www.covip.it/isc_dinamico/data/INDICATORE-DEI-COSTI.pdf
[C6]: https://www.covip.it/isc_dinamico/
[C7]: https://www.covip.it/per-gli-operatori/fondi-pensione/costi-e-rendimenti-dei-fondi-pensione/elenco-dei-rendimenti
[C8]: https://www.covip.it/sites/default/files/the_future_tree_versione_web.pdf
[C9]: https://www.covip.it/normativa/fondi-pensione/atti-generali-covip/circolare-del-22-ottobre-2026-prot-n-6616
[M1]: https://www.lavoro.gov.it/previdenza-complementare/glossario-e-faq/faq
[M2]: https://www.lavoro.gov.it/previdenza-complementare/le-direttive-covip-materia-di-adesione-automatica
[P1]: https://www.senato.it/show-doc?id=815612&leg=17&part=dossier_dossier1&tipodoc=DOSSIER
[P2]: https://www.programmagoverno.gov.it/media/rqdje1zg/focus-legge-di-bilancio-2026-rev-2-1.pdf
[E1]: https://www.ciaoelsa.com/faq/articolo/dal-31-ottobre-2026-potro-avere-il-contributo-datoriale-in-qualunque-fondo-pensione
[E2]: https://www.ciaoelsa.com/faq/articolo/come-si-ottiene-il-contributo-datoriale
[E3]: https://www.ciaoelsa.com/blog/novita-fondi-pensione-2026
[E4]: https://www.ciaoelsa.com/faq/articolo/come-guadagna-ciao-elsa
[N1]: https://www.money.it/fondi-pensione-cresce-il-muro-contro-la-portabilita-del-contributo-aziendale-cosa-rischia-chi-cambia-fondo
[N2]: https://www.iuspedia.it/testo-unico-imposte-sui-redditi/art-257
