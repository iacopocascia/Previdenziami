import test from 'node:test';
import assert from 'node:assert/strict';
import { FUNDS, SOURCES, SNAPSHOT_DATE, DEFAULT_PROFILE, defaultStrategies, getCompartment } from '../src/data.ts';
test('snapshot preserves sourced fees, dated provenance and horizon-specific ISC', () => {
 assert.equal(SNAPSHOT_DATE,'2026-11-09');
 assert.equal(getCompartment('cometa','crescita').annualFee, .0008);
 assert.equal(getCompartment('allianz','azionaria').annualFee,.008);
 assert.deepEqual(getCompartment('allianz','azionaria').isc,[2.2,1.09,.88,.81]);
 for (const f of FUNDS) for(const c of f.compartments){assert.equal(c.isc.length,4); assert.ok(SOURCES.find(s=>s.id===c.sourceId));}
});
test('default contributions equal euros without conflating RAL and contractual base',()=>{
 assert.equal(DEFAULT_PROFILE.ral,28750);
 assert.equal(DEFAULT_PROFILE.contractualBase,28748.59);
 const [a,b]=defaultStrategies();
 assert.equal(a.contributionValue,b.contributionValue);
 assert.equal(a.compartmentId,'crescita');assert.equal(b.compartmentId,'bilanciata');
});
test('unverified historical points stay missing; restricted Multiasset is not selectable',()=>{
 assert.equal(getCompartment('cometa','sicurezza').history.find(x=>x.year===2022)?.value,null);
 assert.equal(getCompartment('allianz','multiasset').selectable,false);
 assert.deepEqual(getCompartment('allianz','breve').history,[]);
 assert.throws(()=>getCompartment('cometa','unknown'));
});
import {toEngineProfile,toEngineStrategy} from '../src/data.ts';
test('adapters preserve contribution bases and initial employer uncertainty',()=>{
 const p=toEngineProfile();assert.equal(p.contractBase,28748.59);assert.equal(p.marginalTaxRate,undefined);
 const [a,b]=defaultStrategies();const ca=toEngineStrategy(a);const cb=toEngineStrategy(b);
 assert.equal(ca.employerRate,.022);assert.equal(cb.employerEligible,false);
 assert.ok(Math.abs(ca.contributionValue*p.ral-p.contractBase*.012)<1e-9);
 assert.equal(toEngineStrategy(a,'central',{...DEFAULT_PROFILE,age:35}).employerRate,.02);
 assert.throws(()=>toEngineStrategy({...b,compartmentId:'multiasset'}));
});

test('official Bilanciata history supports the default comparison on common dates',()=>{assert.deepEqual(getCompartment('allianz','bilanciata').history.map(p=>p.value),[.0945,-.119,.1018,.1029,.0785]);});
