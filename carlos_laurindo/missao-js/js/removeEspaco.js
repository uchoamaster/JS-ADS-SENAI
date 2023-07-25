function removerEspacosEmBranco(arrayStrings) {
    return arrayStrings.map(string => string.replace(/\s/g, ''));
  }