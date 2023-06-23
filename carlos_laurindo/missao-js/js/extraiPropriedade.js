function extrairPropriedades(arrayObjetos, propriedade) {
  return arrayObjetos.map(objeto => objeto[propriedade]);
}

function executarExtrairPropriedades() {
  const arrayObjetosInput = document.getElementById('arrayObjetos').value;
  const arrayObjetos = JSON.parse(arrayObjetosInput);
  const propriedade = document.getElementById('propriedade').value;
  const arrayPropriedades = extrairPropriedades(arrayObjetos, propriedade);
  document.getElementById('resultado3').innerText = `Propriedades extraídas: ${arrayPropriedades}`;
}