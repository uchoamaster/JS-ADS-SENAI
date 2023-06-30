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

  function executarMathMethods() {
    const resultado = document.getElementById('resultado1');
    resultado.innerHTML = '';

    resultado.innerHTML += Math.trunc(4.9) + '<br>';
    resultado.innerHTML += Math.trunc(4.7) + '<br>';
    resultado.innerHTML += Math.trunc(4.4) + '<br>';
    resultado.innerHTML += Math.trunc(4.2) + '<br>';
    resultado.innerHTML += Math.trunc(-4.2) + '<br>';

    resultado.innerHTML += Math.sign(-4) + '<br>';
    resultado.innerHTML += Math.sign(0) + '<br>';
    resultado.innerHTML += Math.sign(4) + '<br>';

    resultado.innerHTML += Math.cbrt(8) + '<br>';
    resultado.innerHTML += Math.cbrt(64) + '<br>';
    resultado.innerHTML += Math.cbrt(125) + '<br>';

    resultado.innerHTML += Math.log2() + '<br>';
    resultado.innerHTML += Math.log10() + '<br>';
}

// Função para executar o Array Find
function executarArrayFind() {
    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.find(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }

    const resultado = document.getElementById('resultado2');
    resultado.innerHTML = '';

    resultado.innerHTML += first;
}

// Função para executar o Array Find Index
function executarArrayFindIndex() {
    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.findIndex(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }

    const resultado = document.getElementById('resultado3');
    resultado.innerHTML = '';

    resultado.innerHTML += first;
}

// Função para executar o Array From
function executarArrayFrom() {
    const arrayFrom = Array.from("ABCDEFG");

    const resultado = document.getElementById('resultado4');
    resultado.innerHTML = '';

    resultado.innerHTML += arrayFrom;
}

// Função para executar o Array Keys
function executarArrayKeys() {
    const fruits = ["Banana", "Laranja", "Maçã", "Manga"];
    const keys = fruits.keys();

    let text = "";
    for (let x of keys) {
        text += x + "<br>";
    }

    const resultado = document.getElementById('resultado5');
    resultado.innerHTML = '';

    resultado.innerHTML += text;
}