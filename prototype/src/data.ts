import type { Profile, Strategy } from './engine.ts';
/** Dated research snapshot; rates are fractions except ISC values, expressed in percentage points. */
export const SNAPSHOT_DATE = '2026-11-09';
const allianzRoot = 'https://www.allianz.it/content/dam/onemarketing/azit/allianz-it/le-soluzioni-per-te/previdenza/';
export const SOURCES = [
    { id: 'cometa-costs', title: 'Cometa — Scheda dei costi, pp. 1–3', url: 'https://www.cometafondo.it/parte-i-scheda-ii-i-costi/', effectiveDate: '2026-07-31', retrievedAt: SNAPSHOT_DATE },
    { id: 'cometa-contributions', title: 'Cometa — Destinatari e contributi, p. 2', url: 'https://www.cometafondo.it/parte-i-scheda-iii-i-destinatari-e-i-contributi/', effectiveDate: '2026-07-31', retrievedAt: SNAPSHOT_DATE },
    { id: 'cometa-investments', title: 'Cometa — Opzioni di investimento', url: 'https://www.cometafondo.it/parte-ii-scheda-i-le-opzioni-di-investimento/', effectiveDate: '2026-07-31', retrievedAt: SNAPSHOT_DATE },
    { id: 'allianz-costs', title: 'Allianz Insieme — Scheda dei costi, pp. 1–2', url: allianzRoot + 'costi-insieme.pdf', effectiveDate: '2026-10-31', retrievedAt: SNAPSHOT_DATE },
    { id: 'allianz-investments', title: 'Allianz Insieme — Opzioni di investimento', url: allianzRoot + 'opzioni-investimento-insieme.pdf', effectiveDate: '2026-10-31', retrievedAt: SNAPSHOT_DATE },
    { id: 'allianz-rules', title: 'Allianz Insieme — Regolamento, artt. 5 e 8', url: allianzRoot + 'regolamento-insieme.pdf', effectiveDate: '2026-10-31', retrievedAt: SNAPSHOT_DATE },
    { id: 'fiscal', title: 'Ministero del Lavoro — FAQ previdenza complementare', url: 'https://www.lavoro.gov.it/previdenza-complementare/glossario-e-faq/faq', effectiveDate: '2026 (pagina dinamica)', retrievedAt: SNAPSHOT_DATE },
    { id: 'isc', title: 'COVIP — Metodologia ISC', url: 'https://www.covip.it/isc_dinamico/data/INDICATORE-DEI-COSTI.pdf', effectiveDate: 'Metodologia; data editoriale non esposta', retrievedAt: SNAPSHOT_DATE },
    { id: 'salary', title: 'FIM-CISL — Minimi C3 da giugno 2026', url: 'https://www.fim-cisl.it/2026/06/15/ccnl-federmeccanica-assistal-2025-2028-nuovi-minimi-tabellari-giugno-2026/', effectiveDate: '2026-06-01', retrievedAt: SNAPSHOT_DATE },
    { id: 'education', title: 'Ciao Elsa — Novità fondi pensione 2026 (fonte secondaria commerciale)', url: 'https://www.ciaoelsa.com/blog/novita-fondi-pensione-2026', effectiveDate: '2026-06-30', retrievedAt: SNAPSHOT_DATE },
];
export interface HistoricalPoint {
    year: number;
    value: number | null;
}
export interface Compartment {
    id: string;
    name: string;
    risk: string;
    equityDescription: string;
    annualFee: number;
    isc: number[];
    selectable: boolean;
    sourceId: string;
    history: HistoricalPoint[];
    historySource: string;
    historyNote: string;
    guarantee: string;
}
const netNote = 'Rendimenti annui netti di costi patrimoniali e imposte; esclusi costi individuali. Non sono previsioni.';
function c(id: string, name: string, risk: string, equityDescription: string, annualFee: number, isc: number[], fund: 'cometa' | 'allianz', values: (number | null)[] = [], guarantee = 'Nessuna garanzia'): Compartment {
    return { id, name, risk, equityDescription, annualFee, isc, selectable: id !== 'multiasset', sourceId: fund + '-costs', history: values.map((value, i) => ({ year: 2021 + i, value: value === null ? null : value / 100 })), historySource: fund === 'cometa' ? 'https://www.cometafondo.it/andamenti/' + (id === 'sicurezza' ? 'comparto-sicurezza' : id) + '/' : allianzRoot + 'opzioni-investimento-insieme.pdf', historyNote: values.length ? netNote : 'Serie storica non acquisita: consultare la fonte ufficiale. Nessun dato inventato.', guarantee };
}
export const FUNDS = [
    { id: 'cometa', name: 'Cometa', kind: 'Fondo negoziale', effectiveDate: '2026-07-31', entryFee: 5.16, employerEntryFee: 5.16, annualFixedFee: 12, employerStatus: '2,2% della base contrattuale con minimo dipendente; diritto under 35 acquisito all’adesione.', compartments: [
            c('monetario-plus', 'Monetario Plus', 'basso', 'Obbligazioni e monetario; nessuna azione', .0004, [.57, .24, .13, .06], 'cometa', [-.31, -2.9, 2.9, 3.1, 2.24]),
            c('sicurezza', 'Sicurezza', 'medio-basso', 'Azioni massimo 30%', .0058, [1.13, .80, .70, .63], 'cometa', [1.58, null, 5.9, 2.8, 2.6], 'Condizionata a scadenza convenzione o specifici eventi, non a ogni trasferimento'),
            c('reddito', 'Reddito', 'medio', 'Azioni massimo 37% nella politica corrente', .0006, [.60, .27, .16, .09], 'cometa', [3.78, -10.38, 6.05, 5.52, 5.11]),
            c('crescita', 'Crescita', 'medio-alto', 'Benchmark 55% azioni; intervallo 45–65%', .0008, [.62, .29, .18, .11], 'cometa', [5.2, -12.29, 10.67, 10.42, 7.32]),
        ] },
    { id: 'allianz', name: 'Allianz Insieme', kind: 'Fondo aperto • adesione individuale', effectiveDate: '2026-10-31', entryFee: 100, employerEntryFee: 0, annualFixedFee: 0, employerStatus: 'Non confermato per prima adesione individuale: scenario prudenziale €0; eventuale accordo aziendale da verificare.', compartments: [
            c('flessibile', 'Flessibile con garanzia', 'medio-basso', '2% azioni al 31/12/2025', .006, [2, .89, .68, .61], 'allianz', [], 'Condizionata a pensionamento e specifici eventi; non protegge ogni disinvestimento'),
            c('breve', 'Obbligazionaria Breve Termine', 'basso', '0% azioni al 31/12/2025', .0055, [1.95, .84, .63, .56], 'allianz'),
            c('lungo', 'Obbligazionaria Lungo Termine', 'medio', '0% azioni; rischio di durata', .007, [2.1, .99, .78, .71], 'allianz'),
            c('obbligazionaria', 'Obbligazionaria', 'medio', '10% azioni al 31/12/2025', .007, [2.1, .99, .78, .71], 'allianz'),
            c('bilanciata', 'Bilanciata', 'medio-alto', 'Benchmark 50% azioni; massimo 70%', .0075, [2.15, 1.04, .83, .76], 'allianz'),
            c('azionaria', 'Azionaria', 'alto', 'Benchmark 95% azioni globali con copertura cambio', .008, [2.2, 1.09, .88, .81], 'allianz'),
            c('multiasset', 'Multiasset (solo Life Cycle)', 'medio-alto', '51% azioni al 31/12/2025; riservato Life Cycle', .008, [3.03, 1.50, 1.10, .87], 'allianz'),
        ] },
];
FUNDS[0].compartments.find(x => x.id === 'sicurezza')!.historyNote = netNote + ' Il dato 2022 è sospeso: segno incoerente nella tabella ufficiale; fusione TFR Silente nel 2026.';
const equity = FUNDS[1].compartments.find(x => x.id === 'azionaria')!;
equity.history = [{ year: 2008, value: -.347 }, { year: 2022, value: -.146 }, { year: 2025, value: .1296 }];
equity.historyNote = netNote + ' Solo anni verificati nel dossier; serie incompleta.';
FUNDS[1].compartments.find(x => x.id === 'flessibile')!.history = [{ year: 2022, value: -.162 }];
const balanced = FUNDS[1].compartments.find(x => x.id === 'bilanciata')!;
balanced.history = [{ year: 2021, value: .0945 }, { year: 2022, value: -.119 }, { year: 2023, value: .1018 }, { year: 2024, value: .1029 }, { year: 2025, value: .0785 }];
balanced.historySource = allianzRoot + 'opzioni-investimento-insieme.pdf#page=17';
balanced.historyNote = netNote + ' Serie 2021–2025, Tav. 4 p. 17; verificata il 10/11/2026 sulla versione 31/10/2026.';
export function getCompartment(fundId: string, id: string): Compartment {
    const result = FUNDS.find(f => f.id === fundId)?.compartments.find(c => c.id === id);
    if (!result)
        throw new Error('Comparto non riconosciuto');
    return result;
}
export interface UIProfile {
    age: number;
    retirementAge: number;
    ral: number;
    salaryGrowth: number;
    marginalTaxRate: number | null;
    contractualBase: number;
}
export type Scenario = 'conservative' | 'central' | 'optimistic';
export interface UIStrategy {
    fundId: string;
    compartmentId: string;
    contributionMode: 'percentage' | 'fixed' | 'tfr';
    contributionValue: number;
    returns: Record<Scenario, number>;
    governmentIncomeShare: number;
}
export const DEFAULT_PROFILE: UIProfile = { age: 25, retirementAge: 67, ral: 28750, salaryGrowth: 0, marginalTaxRate: null as number | null, contractualBase: 28748.59 };
export const ASSUMPTIONS = [
    'Simulazione di una nuova adesione esplicita: non determina se sia già avvenuta un’iscrizione automatica. Verificare la data di assunzione.',
    'RAL, base TFR e imponibile INPS sono assunti uguali. Base contrattuale C3 separata: €28.748,59 annui (13 minimi da €2.211,43); confermare con la busta paga.',
    'Crescita e Bilanciata sono accostati per benchmark azionario 55% e 50%, non perché abbiano rischio identico. Le etichette di rischio sono una mappatura comparativa del prototipo.',
    'Scenari lordi illustrativi 1%, 4%, 7%, uguali per isolare contributi e costi; non stimati dai rendimenti storici e senza probabilità assegnate.',
    'Quota di reddito da titoli pubblici agevolati non acquisita: ipotesi iniziale 0%, modificabile. La tassazione effettiva dipende dal reddito, non dal solo peso dei titoli.',
    'Versamenti mensili uniformi, costi patrimoniali mensili: semplificazione rispetto alle effettive rimesse trimestrali Cometa e alle modalità operative dei fondi.',
    'La quota di iscrizione personale Cometa (€5,16) è rappresentata come prelievo dal primo flusso per riconciliare i costi; nella realtà è un esborso personale separato. La quota iniziale datoriale €5,16 non è capitale investito. Le spese associative €12/anno sono ripartite mensilmente.',
    'Regole correnti mantenute per tutto l’orizzonte; età 67 è una scelta di simulazione. Importi nominali, senza inflazione né imposta alla prestazione.',
    'ISC su €2.500 annui e rendimento 4% a 2/5/10/35 anni: indicatore comparativo, mai una commissione aggiuntiva.',
    'Life Cycle, convenzioni aziendali, coperture opzionali e trasferimenti successivi non sono simulati. Multiasset non è selezionabile singolarmente.',
];
export function defaultStrategies(): UIStrategy[] {
    const contributionValue = DEFAULT_PROFILE.contractualBase * .012 / DEFAULT_PROFILE.ral;
    return [{ fundId: 'cometa', compartmentId: 'crescita', contributionMode: 'percentage', contributionValue, returns: { conservative: .01, central: .04, optimistic: .07 }, governmentIncomeShare: 0 }, { fundId: 'allianz', compartmentId: 'bilanciata', contributionMode: 'percentage', contributionValue, returns: { conservative: .01, central: .04, optimistic: .07 }, governmentIncomeShare: 0 }];
}
export function toEngineProfile(profile: UIProfile = DEFAULT_PROFILE): Profile {
    return { age: profile.age, retirementAge: profile.retirementAge, ral: profile.ral, salaryGrowth: profile.salaryGrowth, marginalTaxRate: profile.marginalTaxRate ?? undefined, contractBase: profile.contractualBase, tfrBase: profile.ral };
}
export function toEngineStrategy(strategy: UIStrategy, scenario: Scenario = 'central', profile: UIProfile = DEFAULT_PROFILE): Strategy {
    const fund = FUNDS.find(f => f.id === strategy.fundId)!;
    if (!fund)
        throw new Error('Fondo non riconosciuto');
    if (!['percentage', 'fixed', 'tfr'].includes(strategy.contributionMode))
        throw new Error('Modalità contributiva non riconosciuta');
    if (!['conservative', 'central', 'optimistic'].includes(scenario))
        throw new Error('Scenario non riconosciuto');
    const compartment = getCompartment(strategy.fundId, strategy.compartmentId);
    if (!compartment.selectable)
        throw new Error('Multiasset richiede Life Cycle e non è simulato singolarmente');
    return { fundId: strategy.fundId, contributionMode: strategy.contributionMode === 'percentage' ? 'percent' : strategy.contributionMode === 'fixed' ? 'fixed' : 'tfr', contributionValue: strategy.contributionValue, annualReturn: strategy.returns[scenario], assetFee: compartment.annualFee, annualFee: fund.annualFixedFee, entryFee: fund.entryFee, employerRate: strategy.fundId === 'cometa' ? (profile.age < 35 ? .022 : .02) : 0, employeeMinimumRate: strategy.fundId === 'cometa' ? .012 : 0, employerEligible: strategy.fundId === 'cometa', governmentIncomeShare: strategy.governmentIncomeShare };
}
