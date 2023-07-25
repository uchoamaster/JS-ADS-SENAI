function calcularMedia(arrayNumeros) {
    let soma = 0;
    let mediaArray = arrayNumeros.map(numero => {
      soma += numero;
      return soma / (arrayNumeros.indexOf(numero) + 1);
    });
    return mediaArray;
  }