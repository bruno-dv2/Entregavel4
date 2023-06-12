function isPrimo(numero) {
  if (typeof numero !== 'number' || isNaN(numero) || !Number.isInteger(numero) || numero <= 1) {
    throw new Error('O argumento deve ser um número inteiro maior que 1.');
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = isPrimo;
