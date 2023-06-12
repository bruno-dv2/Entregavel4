function mdc(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Os argumentos devem ser números inteiros.');
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

module.exports = mdc;
