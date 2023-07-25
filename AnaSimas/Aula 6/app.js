//1 - Crie um programa que leia duas palavras e as concatene, exibindo a palavra resultante, utilizando "template literals".
function exercicio01() {
    var arrayInputs = document.getElementsByClassName('ex1input');
    var frase = '';

    for (var i = 0; i < arrayInputs.length; i++) {
        frase += `${arrayInputs[i].value} `;
    }

    document.getElementById('resultadoEx01').innerHTML = frase;
}

//2 - Faça um programa que clone uma listagem de frutas, mínimo 3 frutas e crie outro array com frutas diferentes mais o clone, utilize Spread Operator.

function exercicio02() {
    let fruta1 = document.getElementById('ex021').value;
    let fruta2 = document.getElementById('ex022').value;
    let fruta3 = document.getElementById('ex023').value;

    let arrayFrutas = [fruta1, fruta2, fruta3];

    console.log(arrayFrutas.length)
    document.getElementById('resultadoEx02').innerHTML = [...arrayFrutas, 'Pitaya', 'Melão', 'Abacate'];
}

//3- Crie uma classe cliente com os seguintes parametros: nome, email, cpf e chame uma função com Arrow function chamada relatório e exiba em uma string o nome da pessoa, o seu cpf e o seu email utilizando template literals.

let botaoAdicionar = document.getElementById('botaoAdicionar');
var listaDeClientes = [];
botaoAdicionar.addEventListener("click", () => {
    class Cliente {
        constructor(nome, email, cpf) {
            this.nome = nome;
            this.email = email;
            this.cpf = cpf
        }
    }

    let nomeCliente = document.getElementById('nome').value;
    let emailCliente = document.getElementById('email').value;
    let cpfCliente = document.getElementById('cpf').value;

    let clienteNovo = new Cliente(nomeCliente, emailCliente, cpfCliente)
    listaDeClientes.push(clienteNovo);

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cpf').value = '';
});

let botaoExibir = document.getElementById('botaoExibir');
let resultadoEx03 = document.getElementById('resultadoEx03');
botaoExibir.addEventListener("click", () => {
    for (var i = 0; i < listaDeClientes.length; i++) {
        resultadoEx03.innerHTML += `[Nome ${i + 1}: ${listaDeClientes[i].nome}
        E-mail: ${listaDeClientes[i].email}
        CPF: ${listaDeClientes[i].cpf}]`;
    }
});
