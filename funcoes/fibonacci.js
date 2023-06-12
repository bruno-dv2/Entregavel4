function fibonacci(n) {
  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n < 0) {
    throw new Error('O argumento deve ser um número inteiro não negativo.');
  }

  const sequence = [];

  if (n >= 1) {
    sequence.push(0);
  }

  if (n >= 2) {
    sequence.push(1);
  }

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

module.exports = fibonacci;
