const mdc = require('../funcoes/mdc');

test('MDC de 12 e 8 deve ser 4', () => {
  expect(mdc(12, 8)).toBe(4);
});

test('MDC de 21 e 14 deve ser 7', () => {
  expect(mdc(21, 14)).toBe(7);
});
