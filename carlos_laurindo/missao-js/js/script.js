function executarDobrarValores() {
    const arrayNumerosInput = document.getElementById('arrayNumeros').value;
    const arrayNumeros = arrayNumerosInput.split(',').map(numero => parseFloat(numero.trim()));
    const arrayDobrado = dobrarValores(arrayNumeros);
    document.getElementById('resultado1').innerText = `Array dobrado: ${arrayDobrado}`;
  }
  
  function executarConverterNomes() {
    const arrayNomesInput = document.getElementById('arrayNomes').value;
    const arrayNomes = arrayNomesInput.split(',').map(nome => nome.trim());
    const arrayNomesMaiusculas = converterNomesParaMaiusculas(arrayNomes);
    document.getElementById('resultado2').innerText = `Nomes em maiúsculas: ${arrayNomesMaiusculas}`;
  }
  
  const objeto1 = { nome: 'João', idade: 25, cidade: 'São Paulo' };
  const objeto2 = { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' };
  
  function extrairPropriedades(arrayObjetos, propriedade) {
    return arrayObjetos.map(objeto => `${propriedade}: ${objeto[propriedade]}`);
  }
  
  function executarExtrairPropriedades() {
    const propriedade = document.getElementById('propriedade').value;
    const arrayObjetos = [objeto1, objeto2];
    const arrayPropriedades = extrairPropriedades(arrayObjetos, propriedade);
    document.getElementById('resultado3').innerText = `Propriedades extraídas:\n${arrayPropriedades.join('\n')}`;
  }

  function calcularMedia(array) {
    if (array.length === 0) {
      return 0;
    }
    const soma = array.reduce((acumulador, valor) => acumulador + valor);
    return soma / array.length;
  }
  
  function executarCalcularMedia() {
    const arrayNumerosInput = document.getElementById('arrayNumeros2').value;
    const arrayNumeros = arrayNumerosInput.split(',').map(numero => parseFloat(numero.trim()));
    const arrayMedia = arrayNumeros.map((valor, indice, arr) => calcularMedia(arr.slice(0, indice + 1)));
    document.getElementById('resultado4').innerText = `Médias: ${arrayMedia}`;
  }
  
  function executarRemoverEspacos() {
    const arrayStringsInput = document.getElementById('arrayStrings').value;
    const arrayStrings = arrayStringsInput.split(',').map(string => string.trim());
    const arrayStringsSemEspacos = removerEspacosEmBranco(arrayStrings);
    document.getElementById('resultado5').innerText = `Strings sem espaços: ${arrayStringsSemEspacos}`;
  }
  
  function executarRequisicaoAssincrona() {
    simularRequisicaoAssincrona()
      .then(resultado => {
        document.getElementById('resultado6').innerText = resultado;
      })
      .catch(erro => {
        document.getElementById('resultado6').innerText = `Erro na requisição: ${erro}`;
      });
  }
  
  function executarLerArquivoAssincronamente() {
    const caminhoArquivo = document.getElementById('caminhoArquivo').value;
    lerArquivoAssincronamente(caminhoArquivo)
      .then(conteudo => {
        document.getElementById('resultado7').innerText = `Conteúdo do arquivo: ${conteudo}`;
      })
      .catch(erro => {
        document.getElementById('resultado7').innerText = `Erro ao ler o arquivo: ${erro}`;
      });
  }