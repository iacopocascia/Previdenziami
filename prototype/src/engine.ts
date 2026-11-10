/** Pure projection engine. Rates are fractions. Monthly end-of-period cash flows;
 * annual net-return tax settlement with standalone line loss carry-forward.
 * Fixed current law and salary-linked contractual base are explicit assumptions. */
export interface Profile {
    age: number;
    retirementAge: number;
    ral: number;
    salaryGrowth: number;
    marginalTaxRate?: number;
    contractBase?: number;
    tfrBase?: number;
}
export interface Strategy {
    fundId: string;
    contributionMode: 'tfr' | 'percent' | 'fixed';
    contributionValue: number;
    annualReturn: number;
    assetFee: number;
    annualFee: number;
    entryFee: number;
    employerRate: number;
    employeeMinimumRate: number;
    employerEligible: boolean;
    governmentIncomeShare?: number;
    extraMonthly?: number;
}
export interface Ledger {
    month: number;
    age: number;
    employee: number;
    employer: number;
    tfr: number;
    gain: number;
    costs: number;
    tax: number;
    balance: number;
    taxBenefit: number | null;
    annualTaxBenefit?: number | null;
}
export interface Projection {
    monthly: Ledger[];
    annual: Ledger[];
    terminal: number;
    totals: Ledger;
    taxBenefit: number | null;
    annualTaxBenefit?: number | null;
}
/** Annual standalone-compartment settlement; losses offset subsequent positive results. */
export function settleInvestmentTax(netResult: number, carriedLoss: number, rate: number): {
    tax: number;
    loss: number;
} {
    if (![netResult, carriedLoss, rate].every(Number.isFinite) || carriedLoss < 0 || rate < 0 || rate > 1)
        throw new Error('Base fiscale non valida');
    const adjusted = netResult - carriedLoss;
    return adjusted < 0 ? { tax: 0, loss: -adjusted } : { tax: adjusted * rate, loss: 0 };
}
export function project(p: Profile, s: Strategy): Projection {
    const vals = [p.age, p.retirementAge, p.ral, p.salaryGrowth, s.contributionValue, s.annualReturn, s.assetFee, s.annualFee, s.entryFee, s.employerRate, s.employeeMinimumRate, p.contractBase ?? p.ral, p.tfrBase ?? p.ral, s.governmentIncomeShare ?? 0, s.extraMonthly ?? 0];
    if (vals.some(v => !Number.isFinite(v)) || !Number.isInteger(p.age) || !Number.isInteger(p.retirementAge) || p.age < 18 || p.retirementAge <= p.age || p.retirementAge > 100 || p.ral <= 0 || p.salaryGrowth <= -1 || s.annualReturn <= -1 || [s.contributionValue, s.assetFee, s.annualFee, s.entryFee, s.employerRate, s.employeeMinimumRate, p.contractBase ?? p.ral, p.tfrBase ?? p.ral, s.extraMonthly ?? 0].some(v => v < 0) || s.assetFee >= 1 || (s.governmentIncomeShare ?? 0) < 0 || (s.governmentIncomeShare ?? 0) > 1 || !['tfr', 'percent', 'fixed'].includes(s.contributionMode) || (p.marginalTaxRate !== undefined && (!Number.isFinite(p.marginalTaxRate) || p.marginalTaxRate < 0 || p.marginalTaxRate > 1)))
        throw new Error('Input non valido: controlla età, importi e aliquote.');
    const row: Ledger = { month: 0, age: p.age, employee: 0, employer: 0, tfr: 0, gain: 0, costs: 0, tax: 0, balance: 0, taxBenefit: p.marginalTaxRate === undefined ? null : 0, annualTaxBenefit: p.marginalTaxRate === undefined ? null : 0 };
    const monthly: Ledger[] = [{ ...row }], annual: Ledger[] = [{ ...row }];
    let loss = 0, pool = 0, yearGain = 0, yearEmployee = 0, yearEmployer = 0;
    const rate = Math.pow(1 + s.annualReturn, 1 / 12) - 1;
    const taxRate = .2 * (1 - .375 * (s.governmentIncomeShare ?? 0));
    for (let m = 1; m <= 12 * (p.retirementAge - p.age); m++) {
        const y = Math.floor((m - 1) / 12), growth = Math.pow(1 + p.salaryGrowth, y);
        const salary = p.ral * growth, base = (p.contractBase ?? p.ral) * growth;
        const employee = (s.contributionMode === 'tfr' ? 0 : s.contributionMode === 'fixed' ? s.contributionValue : salary * s.contributionValue / 12) + (s.extraMonthly ?? 0);
        const employer = s.employerEligible && employee + 1e-9 >= base * s.employeeMinimumRate / 12 && employee > 0 ? base * s.employerRate / 12 : 0;
        const tfr = ((p.tfrBase ?? p.ral) / 13.5 - (p.tfrBase ?? p.ral) * .005) * growth / 12;
        const gain = row.balance * rate;
        const assetCost = (row.balance + gain) * s.assetFee / 12;
        const fixedCost = s.annualFee / 12 + (m === 1 ? s.entryFee : 0);
        const cost = assetCost + fixedCost;
        yearGain += gain - assetCost;
        yearEmployee += employee;
        yearEmployer += employer;
        let tax = 0;
        if (m % 12 === 0) {
            const settlement = settleInvestmentTax(yearGain, loss, taxRate);
            tax = settlement.tax;
            loss = settlement.loss;
            let extra = 0;
            const contributions = yearEmployee + yearEmployer;
            if (y < 5)
                pool += Math.max(0, 5300 - contributions);
            else if (y < 25) {
                extra = Math.min(pool, 2650, Math.max(0, contributions - 5300));
                pool -= extra;
            }
            if (row.taxBenefit !== null) {
                row.annualTaxBenefit = Math.min(yearEmployee, Math.max(0, 5300 + extra - yearEmployer)) * (p.marginalTaxRate ?? 0);
                row.taxBenefit += row.annualTaxBenefit;
            }
            yearGain = 0;
            yearEmployee = 0;
            yearEmployer = 0;
        }
        row.employee += employee;
        row.employer += employer;
        row.tfr += tfr;
        row.gain += gain;
        row.costs += cost;
        row.tax += tax;
        row.balance += gain - cost - tax + employee + employer + tfr;
        if (!Number.isFinite(row.balance) || row.balance < -1e-8)
            throw new Error('Le ipotesi di costo producono un saldo non supportato.');
        row.month = m;
        row.age = p.age + m / 12;
        monthly.push({ ...row });
        if (m % 12 === 0)
            annual.push({ ...row });
    }
    return { monthly, annual, terminal: row.balance, totals: { ...row }, taxBenefit: row.taxBenefit };
}
export interface BreakEven {
    status: 'solved' | 'equal' | 'bounded' | 'error';
    value: number | null;
    trailing: 0 | 1;
    residual: number | null;
    capital: number | null;
    target: number;
    addedOutlay: number;
    employerAdded: number;
}
function solve(p: Profile, a: Strategy, b: Strategy, kind: 'saving' | 'return'): BreakEven {
    const ra = project(p, a), rb = project(p, b), trailing: 0 | 1 = ra.terminal <= rb.terminal ? 0 : 1, base = trailing === 0 ? a : b, initial = trailing === 0 ? ra : rb, target = Math.max(ra.terminal, rb.terminal);
    const result: BreakEven = { status: 'bounded', value: null, trailing, residual: null, capital: null, target, addedOutlay: 0, employerAdded: 0 };
    if (Math.abs(ra.terminal - rb.terminal) < .01)
        return { ...result, status: 'equal', value: kind === 'saving' ? 0 : base.annualReturn, residual: 0, capital: initial.terminal };
    const run = (x: number) => project(p, kind === 'saving' ? { ...base, extraMonthly: (base.extraMonthly ?? 0) + x } : { ...base, annualReturn: x });
    let lo = kind === 'saving' ? 0 : Math.max(-.999999, base.annualReturn), hi = kind === 'saving' ? 100000 : 1;
    if (lo > hi)
        return result;
    try {
        const top = run(hi);
        if (top.terminal < target)
            return result;
        // Validate monotonicity across the search interval; contribution eligibility only adds nonnegative flows.
        let prev = initial.terminal;
        for (let i = 1; i <= 16; i++) {
            const val = run(lo + (hi - lo) * i / 16).terminal;
            if (val + 1e-6 < prev)
                return { ...result, status: 'error' };
            prev = val;
        }
        const tolerance = kind === 'saving' ? .0001 : .00000001;
        for (let i = 0; i < 100 && hi - lo > tolerance; i++) {
            const mid = (lo + hi) / 2;
            if (run(mid).terminal >= target)
                hi = mid;
            else
                lo = mid;
        }
        const final = run(hi);
        return { ...result, status: 'solved', value: hi, capital: final.terminal, residual: final.terminal - target, addedOutlay: kind === 'saving' ? hi * 12 * (p.retirementAge - p.age) : 0, employerAdded: final.totals.employer - initial.totals.employer };
    }
    catch {
        return { ...result, status: 'error' };
    }
}
export const additionalSaving = (p: Profile, a: Strategy, b: Strategy) => solve(p, a, b, 'saving');
export const requiredReturn = (p: Profile, a: Strategy, b: Strategy) => solve(p, a, b, 'return');
export function crossovers(a: {
    balance: number;
}[], b: {
    balance: number;
}[]) {
    if (a.length !== b.length)
        throw new Error('Orizzonti incompatibili');
    const months: number[] = [], equalityMonths: number[] = [];
    let previous = 0;
    for (let i = 1; i < a.length; i++) {
        const delta = a[i].balance - b[i].balance, sign = Math.abs(delta) < .01 ? 0 : Math.sign(delta);
        if (sign === 0) {
            equalityMonths.push(i);
            continue;
        }
        if (previous !== 0 && sign !== previous)
            months.push(i);
        previous = sign;
    }
    return { status: (equalityMonths.length === a.length - 1 ? 'tied' : months.length ? 'crossed' : 'none') as 'tied' | 'crossed' | 'none', months, equalityMonths };
}
