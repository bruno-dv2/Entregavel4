function quicksort(array) {
  if (!Array.isArray(array)) {
    throw new Error('O argumento deve ser um array.');
  }

  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

module.exports = quicksort;
