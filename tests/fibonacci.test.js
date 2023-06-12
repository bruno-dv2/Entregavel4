const fibonacci = require('../funcoes/fibonacci');

test('Deve retornar os primeiros 10 números da sequência de Fibonacci corretamente', () => {
  const result = fibonacci(10);
  const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
  expect(result).toEqual(expected);
});

test('Deve retornar os primeiros 2 números da sequência de Fibonacci corretamente', () => {
  const result = fibonacci(2);
  const expected = [0, 1];
  expect(result).toEqual(expected);
});
