const somatorio = require('../funcoes/somatorio');

test('Somatório de 1 a 5 deve ser 15', () => {
  expect(somatorio(5)).toBe(15);
});

test('Somatório de 1 a 10 deve ser 55', () => {
  expect(somatorio(10)).toBe(55);
});
