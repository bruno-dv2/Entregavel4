function contarNumeros(inicio, fim) {
  if (typeof inicio !== 'number' || typeof fim !== 'number' || isNaN(inicio) || isNaN(fim) || !Number.isInteger(inicio) || !Number.isInteger(fim)) {
    throw new Error('Os argumentos devem ser números inteiros.');
  }

  if (inicio > fim) {
    throw new Error('O número de início deve ser menor ou igual ao número de fim.');
  }

  const numeros = [];

  for (let i = inicio; i <= fim; i++) {
    numeros.push(i);
  }

  return numeros;
}

module.exports = contarNumeros;
