import test from 'node:test';
import assert from 'node:assert/strict';
import {project} from '../src/engine.ts';
const profile={age:25,retirementAge:26,ral:12000,salaryGrowth:0,tfrBase:0,contractBase:12000};
const strategy={fundId:'independent-fixture',contributionMode:'fixed' as const,contributionValue:100,annualReturn:0,assetFee:0,annualFee:0,entryFee:0,employerRate:0,employeeMinimumRate:.012,employerEligible:false};
const close=(actual:number,expected:number,tol=1e-6)=>assert.ok(Math.abs(actual-expected)<tol,`${actual} != ${expected}`);
test('independent annuity formula: end-month deposits, gross gain and annual tax',()=>{
 const annual=Math.pow(1.01,12)-1;
 const gross=100*(Math.pow(1.01,12)-1)/.01;
 const gain=gross-1200;
 const result=project(profile,{...strategy,annualReturn:annual});
 close(result.totals.gain,gain);close(result.totals.tax,gain*.2);close(result.terminal,gross-gain*.2);
});
test('government-income concession uses income share rather than universal 20%',()=>{
 const annual=Math.pow(1.01,12)-1;
 const gain=100*(Math.pow(1.01,12)-1)/.01-1200;
 const result=project(profile,{...strategy,annualReturn:annual,governmentIncomeShare:1});
 close(result.totals.tax,gain*.125);
});
test('employer payments consume shared deduction ceiling and TFR is excluded',()=>{
 const result=project({...profile,marginalTaxRate:.3,tfrBase:12000},{...strategy,contributionValue:1000,employerEligible:true,employerRate:.1});
 close(result.totals.employer,1200);close(result.taxBenefit!,4100*.3);
});
test('entry charges counted once and fixed annual fee once per full year',()=>{
 const result=project({...profile,retirementAge:27},{...strategy,entryFee:50,annualFee:12});
 close(result.totals.costs,74);close(result.terminal,2400-74);
});
test('invalid ages, rates and contribution values are rejected',()=>{
 for(const patch of [{age:25.5},{retirementAge:101},{age:17},{salaryGrowth:-1},{marginalTaxRate:1.01}])assert.throws(()=>project({...profile,...patch},strategy));
 assert.throws(()=>project(profile,{...strategy,contributionValue:-1}));
});
test('an unfundable entry cost produces an explicit error rather than clamping a negative balance',()=>{
 assert.throws(()=>project(profile,{...strategy,contributionValue:0,entryFee:100}));
});

test('first-employment carryover starts in year six and caps annual extra deduction',()=>{
 const r=project({...profile,retirementAge:32,salaryGrowth:.5,marginalTaxRate:.3},{...strategy,contributionMode:'percent',contributionValue:1/12});
 close(r.annual[5].taxBenefit!, (1000+1500+2250+3375+5062.5)*.3);
 close(r.annual[6].taxBenefit!-r.annual[5].taxBenefit!,7593.75*.3);
 close(r.annual[7].taxBenefit!-r.annual[6].taxBenefit!,7950*.3);
 close(r.annual[6].annualTaxBenefit!,7593.75*.3);
});
import {settleInvestmentTax} from '../src/engine.ts';
test('a negative year offsets future profits until its loss pool is exhausted',()=>{
 const a=settleInvestmentTax(-100,0,.2);assert.deepEqual(a,{tax:0,loss:100});
 const b=settleInvestmentTax(60,a.loss,.2);assert.deepEqual(b,{tax:0,loss:40});
 const c=settleInvestmentTax(90,b.loss,.2);assert.deepEqual(c,{tax:10,loss:0});
});
