// exercício 01 - criar uma função que recebe um array de nºs e retorna o valor máximo
function exercicio01() {
    var elementoInputEx01 = document.getElementById('inputEx01').value;
    var arrayInput = elementoInputEx01.split(',');
    var maiorValor = 0;

    for (var i = 0; i < arrayInput.length; i++) {
        if (maiorValor < arrayInput[i]) {
            maiorValor = arrayInput[i];
        }
    }

    let elementoSpan = document.getElementById('ex01');
    elementoSpan.innerText = maiorValor;
}

//Crie uma função que receba um array de strings e retorne o número total de caracteres.

function exercicio02() {
    var elementoInputEx02 = document.getElementById('inputEx02').value;
    let elementoSpan = document.getElementById('ex02');
    elementoSpan.innerText = elementoInputEx02.length;
}

//Crie um array associativo que armazene o nome e o e-mail de três pessoas diferentes e, em seguida, crie uma função que retorne o e-mail de uma pessoa com base no seu nome.
var arrayCadastros = [];
function pessoaEx3(nome, email) {
    this.nomeCad = nome;
    this.emailCad = email;
}

function exercicio3salvar(pessoaCadastrada) {
    var nomePessoa = document.getElementById(`nome${pessoaCadastrada}`).value;
    var emailPessoa = document.getElementById(`email${pessoaCadastrada}`).value;
    var pessoa = new pessoaEx3(nomePessoa, emailPessoa);
    arrayCadastros.push(pessoa);
}

function exercicio03() {
    var buscar = document.getElementById('buscarEmail').value;
    for (let i = 0; i < arrayCadastros.length; i++) {
        if (buscar == arrayCadastros[i].nomeCad) {
            var elemento = document.getElementById('retornoEx3');
            elemento.innerHTML = arrayCadastros[i].emailCad;
        }
    }
}

//Crie um array de forma literal que armazene os nomes de cinco frutas diferentes e, em seguida, crie uma função que retorne uma mensagem indicando se a fruta informada está presente ou não no array.

function exercicio04() {
    let arrayFrutas = ['banana', 'morango', 'laranja', 'kiwi', 'uva'];
    let inputFruta = document.getElementById('buscarFruta').value;
    let elementoSpan = document.getElementById('resultadoFruta');
    let frutaEncontrada = false;

    for (var i = 0; i < arrayFrutas.length; i++) {
        if (arrayFrutas[i] == inputFruta) {
            elementoSpan.innerHTML = 'Fruta encontrada no array';
            frutaEncontrada = true;
        }
    }

    if (frutaEncontrada == false) {
        elementoSpan.innerHTML = 'Fruta não encontrada';
        inputFruta.innerHTML = '';
    }
}

//Crie uma variável que armazene um número e, em seguida, crie uma função que retorne o dobro desse número.

function exercicio05() {
    let inputNumero = document.getElementById('numEx05').value;
    if (!isNaN(inputNumero)) {
        inputNumero *= 2;
    }
    let elementoSpanEx05 = document.getElementById('resultadoEx05');
    elementoSpanEx05.innerHTML = 'Valor duplicado: ' + inputNumero;
}

//Crie uma função que receba um array de números como parâmetro e retorne um novo array com o dobro de cada número.

function exercicio06() {
    let inputEx06 = document.getElementById('numEx06').value;
    let arrayElementos = inputEx06.split(',');

    for (var i = 0; i < arrayElementos.length; i++) {
        if (!isNaN(arrayElementos[i])) {
            arrayElementos[i] *= 2;
        }
    }

    arrayElementos.toString();
    let elementoSpanEx06 = document.getElementById('resultadoEx06');
    elementoSpanEx06.innerHTML = 'Valores duplicados ' + arrayElementos;
}

//Crie um array de forma literal que armazene os nomes de cinco animais diferentes e, em seguida, crie uma função que retorne uma mensagem indicando a posição do animal informado no array.

function exercicio07salvar() {
    var inputEx07 = document.getElementById('numEx07').value;
    var arrayElementos07 = inputEx07.split(',');
    return arrayElementos07;
}

function exercicio07buscar() {
    var array07 = exercicio07salvar();
    var inputBusca07 = document.getElementById('buscarAnimal').value;
    var posicao = 0;
    var elementoSpanEx07 = document.getElementById('resultadoEx07');

    console.log(array07);

    for (var i = 0; i < array07.length; i++) {
        if (inputBusca07 == array07[i]) {
            posicao = i + 1;
        }
    }

    if (posicao) {
        elementoSpanEx07.innerHTML = 'Animal na ' + posicao + 'ª posição do array';
    } else {
        elementoSpanEx07.innerHTML = 'Animal não localizado';
    }
}

//Crie uma variável que armazene uma string e, em seguida, crie uma função que retorne essa string em maiúsculas.

function exercicio08() {
    var inputEx08 = document.getElementById('numEx08').value;
    var elementoSpanEx08 = document.getElementById('resultadoEx08');
    elementoSpanEx08.innerHTML = inputEx08.toUpperCase();;
}

//Crie uma função que receba uma variável como parâmetro e, em seguida, armazene esse parâmetro em uma nova variável. Em seguida, retorne a nova variável.

function exercicio09(variavel) {
    let variavelNova = variavel;
    let elementoSpanEx09 = document.getElementById('resultadoEx09');
    elementoSpanEx09.innerHTML = variavelNova;
}

//-------------------------------------------Segundo bloco de exercícios-----------------------------------------------

//Crie uma função que receba uma string e retorne o número de vogais presentes nessa string.

function exercicio01b2() {
    var inputEx01b2 = document.getElementById('ex01blco2').value;
    var numVogais = 0;
    var regEx = /[aeiou]/i;

    for (var i = 0; i < inputEx01b2.length; i++) {
        if (inputEx01b2[i].match(regEx)) {
            numVogais++;
        }
    }
    var elementoSpanEx1b2 = document.getElementById('resultadoex01blco2');
    elementoSpanEx1b2.innerHTML = 'Total de vogais: ' + numVogais;
}

//Crie uma função que receba um número e retorne o fatorial desse número.

function exercicio02b2() {
    var inputEx02b2 = document.getElementById('ex02blco2').value;
    var fatorial = inputEx02b2;
    for (var multiplicador = inputEx02b2 - 1; multiplicador > 1; multiplicador--) {
        fatorial *= multiplicador;
    }
    var elementoSpanEx2b2 = document.getElementById('resultadoex02blco2');
    elementoSpanEx2b2.innerHTML = fatorial;
}

//Crie um formulário HTML que tenha um campo de entrada de texto para o nome e outro para o e-mail. Em seguida, crie uma função JavaScript que valide se os campos foram preenchidos corretamente (ou seja, se o campo de nome não está vazio e se o campo de e-mail contém um endereço de e-mail válido).

function exercicio03b2() {
    var inputNomeEx3 = document.getElementById('nomeEx3').value;
    var inputEmailEx3 = document.getElementById('emailEx3').value;
    var regExNome = /[A-zÀ-ü]{2,}([ ]{1}[A-zÀ-ü]{2,})+/;
    var regExEmail = /\S+@\S+\.\S+/;

    if (!inputNomeEx3.match(regExNome)) {
        alert('Preencha o nome corretamente');
        return false;
    }

    if (!inputEmailEx3.match(regExEmail)) {
        alert('Preencha o e-mail corretamente');
        return false;
    }

    return true;
}

//Crie um formulário HTML que tenha um campo de entrada de número para a idade e outro para a altura em centímetros. Em seguida, crie uma função JavaScript que valide se os campos foram preenchidos corretamente (ou seja, se a idade está entre 18 e 60 anos e se a altura está entre 150 e 200 centímetros).

function exercicio04b2() {
    var inputIdadeEx4 = document.getElementById('idade').value;
    var inputAlturaEx4 = document.getElementById('altura').value;
    var regExAltura = /[0-9]{3}/;

    if (inputIdadeEx4 < 18 || inputIdadeEx4 > 60) {
        alert('Preencha com uma idade entre 18 e 60 anos');
    }

    if (!inputAlturaEx4.match(regExAltura)) {
        alert('Preencha a altura em cm! Ex.: 180');
    }

    if (inputAlturaEx4 < 150 || inputAlturaEx4 > 200) {
        alert('Preencha com uma altura entre 150 e 200cm');
    }
}
