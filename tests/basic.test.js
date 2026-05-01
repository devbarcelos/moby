const lib = require('../src/index.js');

test('module loads', () => {
  expect(lib).toBeDefined();
});

test('init function works', () => {
  // Simple test
  expect(typeof lib.init).toBe('function');
});
