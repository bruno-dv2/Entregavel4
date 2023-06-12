const isPrimo = require('../funcoes/numeroprimo');

test('5 deve ser um número primo', () => {
  expect(isPrimo(5)).toBe(true);
});

test('10 não deve ser um número primo', () => {
  expect(isPrimo(10)).toBe(false);
});
