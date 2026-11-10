// Import suites in one process so Node reports and executes individual cases.
await import('./engine.test.ts');
await import('./data.test.ts');
await import('./acceptance.test.ts');
