function somatorio(n) {
  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n) || n < 1) {
    throw new Error('O argumento deve ser um número inteiro maior ou igual a 1.');
  }

  let resultado = 0;

  for (let i = 1; i <= n; i++) {
    resultado += i;
  }

  return resultado;
}

module.exports = somatorio;
