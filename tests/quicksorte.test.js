const quicksort = require('../funcoes/quicksort');

test('Deve ordenar corretamente um array não ordenado', () => {
  const array = [5, 2, 8, 1, 9, 4];
  const result = quicksort(array);
  const expected = [1, 2, 4, 5, 8, 9];
  expect(result).toEqual(expected);
});

test('Deve retornar o mesmo array quando já estiver ordenado', () => {
  const array = [1, 2, 3, 4, 5];
  const result = quicksort(array);
  expect(result).toEqual(array);
});
