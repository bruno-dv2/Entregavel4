const contarNumeros = require('../funcoes/contagem');

test('Contagem de números de 1 a 10 deve retornar 10', () => {
  expect(contarNumeros(1, 10)).toHaveLength(10);
});

test('Contagem de números de 50 a 100 deve retornar 51', () => {
  expect(contarNumeros(50, 100)).toHaveLength(51);
});
