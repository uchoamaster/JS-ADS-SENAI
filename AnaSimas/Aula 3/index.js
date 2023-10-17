// Crie uma função que recebe um nome e retorna uma string utilizando template literals para dar boas-vindas ao usuário.
function ex01tl(){
    const elementoInput = document.getElementById('nomeEx01tl').value;
    if(elementoInput==''){
        alert('Digite algum nome');
    } else {
        alert(`Olá ${elementoInput}! Seja bem-vindo(a)!`);
        document.getElementById('nomeEx01tl').value = '';
    }
}

// Crie uma função que recebe uma data e retorna uma string formatada utilizando template literals.
function ex02tl(){
    const elementoInputdata = document.getElementById('dataEx02tl').value;
    if(elementoInputdata==''){
        alert('Informe uma data');
    } else {
        let data = elementoInputdata.split('-'); //cria um array com cada split
        alert(`A data no formato americano fica ${data[0]}/${data[1]}/${data[2]}`);
        document.getElementById('dataEx02tl').value = ''
    }
}

// Crie uma função que recebe um objeto com as informações de um produto e retorna uma string utilizando template literals para exibir as informações na tela.
function ex03tl(){
    const produto = {
        nome: document.getElementById('nomeProdutoEx03tl').value,
        qtd: document.getElementById('qtdProdutoEx03tl').value,
        preco: document.getElementById('precoProdutoEx03tl').value
    };

    if(produto.nome == ''){
        alert('Preencha o nome do produto');
    } else if(produto.qtd == ''){
        alert('Preencha a quantidade do produto');
    } else if(produto.preco == ''){
        alert('Preencha o valor do produto');
    } else {
        alert(`O produto ${produto.nome} possui ${produto.qtd} em estoque, custando ${produto.preco} cada`);
    }

    document.getElementById('nomeProdutoEx03tl').value = ''
    document.getElementById('qtdProdutoEx03tl').value = ''
    document.getElementById('precoProdutoEx03tl').value = ''
}

// Crie uma função que recebe um array de números e utiliza arrow function para retornar a soma de todos eles.
function addNumeroEx1(){
    var elementoDiv = document.getElementById('novosNumerosEx1');
    let novaInput = document.createElement('input');
    novaInput.setAttribute("type", "text");
    novaInput.setAttribute("class", "numEx01af");
    elementoDiv.appendChild(novaInput);

    let span = document.createElement('span');
    span.innerHTML = '<br>'
    elementoDiv.appendChild(span);
}

const botaoEx1af = document.getElementById('botaoEx01af');
botaoEx1af.addEventListener("click", () => {
    let arrayNumEx1 = document.getElementsByClassName('numEx01af');
    let soma = 0;
    for(var i = 0; i < arrayNumEx1.length; i++){
        soma += Number(arrayNumEx1[i].value);
        arrayNumEx1[i].value = '';
    }
    alert(`O total da soma dos números é ${soma}`);
});


// Crie uma função que recebe um array de strings e utiliza arrow function para retornar o número total de caracteres em todas as strings.
const botaoEx02af = document.getElementById('botaoEx02af');
botaoEx02af.addEventListener("click", () => {
    let inputEx02af = document.getElementById('fraseEx02af').value;
    alert(`O total de caracteres na frase é ${inputEx02af.length}`);
    document.getElementById('fraseEx02af').value = '';
});

// Crie uma função que recebe um objeto com informações de um produto e utiliza arrow function para retornar a descrição do produto em uma string.
const botaoEx03af = document.getElementById('botaoEx03af');
botaoEx03af.addEventListener("click", () => {
    var produtoEx2 = {
        nomeEx2: document.getElementById('nomeProdutoEx03af').value,
        precoEx2: document.getElementById('precoProdutoEx03af').value
    };
    alert(`Nome: ${produtoEx2.nomeEx2}, Valor: ${produtoEx2.precoEx2}`);
    document.getElementById('nomeProdutoEx03af').value = '';
    document.getElementById('precoProdutoEx03af').value = '';
})

// Crie um objeto JSON com informações sobre uma pessoa, como nome, idade e endereço.
class pessoaJSON {
    constructor(nomejs, idadejs, endjs) {
        this.nomejson = nomejs;
        this.idadejson = idadejs;
        this.enderecojson = endjs;
    }
}

function ex01js(){
    const inputNomeJs = document.getElementById('nomejson').value;
    const inputIdadeJs = document.getElementById('idadejson').value;
    const inputEndJs = document.getElementById('endjson').value;

    let pessoajs = new pessoaJSON(inputNomeJs, inputIdadeJs, inputEndJs);
    pessoajs = JSON.stringify(pessoajs);
    console.log(pessoajs);

    alert(`Pessoa: ${pessoajs.nomejson}, idade: ${pessoajs.idadejson}, endereço: ${pessoajs.enderecojson}`);
    document.getElementById('nomejson').value = '';
    document.getElementById('idadejson').value = '';
    document.getElementById('endjson').value = '';
}

// Crie uma função que recebe um objeto JSON com informações de um produto e retorna uma string com o nome e o preço do produto.
class produtoJSON {
    constructor(nomeProdjson, valorProdjson) {
        this.nomeProd = nomeProdjson;
        this.valorProd = valorProdjson;
    }
}

function ex02js(){
    const inputNomeProdJs = document.getElementById('nomeProdutoJSON').value;
    const inputValorProdJs = document.getElementById('precoProdutoJSON').value;
    let prodJSON = new produtoJSON(inputNomeProdJs, inputValorProdJs);
    prodJSON = JSON.stringify(prodJSON);
    ex02js2(prodJSON);
    document.getElementById('nomeProdutoJSON').value = '';
    document.getElementById('precoProdutoJSON').value = '';
}

function ex02js2(prodJSON){
    let objProduto = JSON.parse(prodJSON);
    alert(`Produto: ${objProduto.nomeProd}, valor: ${objProduto.valorProd}`);
}

// Crie uma função que recebe um array de objetos JSON com informações de produtos e retorna uma string com o nome e o preço de cada um dos produtos.
// Crie uma função que recebe um array de objetos JSON com informações de produtos e utiliza template literals e arrow function para retornar uma string com o nome e o preço de cada um dos produtos.
// Crie uma função que recebe um array de objetos JSON com informações de produtos e utiliza template literals e arrow function para retornar uma tabela HTML com as informações de cada produto.
// Crie uma função que recebe um array de objetos JSON com informações de produtos e utiliza template literals e arrow function para retornar uma lista HTML com as informações de cada produto.

//cria os campos para novos produtos
function salvarEx03js(){
    var elementoSec03 = document.getElementById('ex03sec');
    let spanBr1 = document.createElement('span');
    spanBr1.innerHTML = 
    `<label for="nomeProdutoJSON03">Digite o nome do produto:</label><br>
    <input type="text" name="nomeProdutoJSON03" class="nomeProdutoJSON03"><br>
    <label for="precoProdutoJSON03">Digite o preço:</label><br>
    <input type="text" name="precoProdutoJSON03" class="precoProdutoJSON03"><br>`
    elementoSec03.appendChild(spanBr1)
}

//cria o JSON e chama o método para mostrar resultado
const botaoEx3js = document.getElementById('botaoEx03js');
botaoEx3js.addEventListener("click", () => {
    let prodEx3 = document.getElementsByClassName('nomeProdutoJSON03');
    let valorEx3 = document.getElementsByClassName('precoProdutoJSON03');
    let produtoEx3;
    let arrayProd3 = [];
    for(var i = 0; i < prodEx3.length; i++){
        produtoEx3 = new produtoJSON(prodEx3[i].value, valorEx3[i].value);
        arrayProd3.push(produtoEx3);
    }
    let arrayJSON = JSON.stringify(arrayProd3);
    mostrarProdutos(arrayJSON);
});

//mostra o resultado conforme a opção escolhida pelo usuário
function mostrarProdutos(arrayJSON){
    const modoDeMostrar = document.querySelector('input[name=mostraResultado]:checked').value;
    const sectionResultado = document.getElementById('resultadoEx3');
    let string = '';
    let arrayParse = JSON.parse(arrayJSON);

    if(modoDeMostrar == 'tabela'){
        //criando a tabela
        montarTabela(arrayParse, sectionResultado);
    } else if(modoDeMostrar == 'lista'){
        //criando lista
        montarLista(arrayParse, sectionResultado);
    } else {
        //alert
        for(var i = 0; i < arrayParse.length; i++){
            string += ` Produto: ${arrayParse[i].nomeProd}, valor: ${arrayParse[i].valorProd} |`
        }
        alert(string);
    }
}

//no caso da opção tabela
function montarTabela(arrayParse, sectionResultado){
    let elementoTabela = document.createElement("table");
    let cabecalho = document.createElement("thead");
    let corpo = document.createElement("tbody");
    var produtoHeader = document.createElement("th");
    var valorHeader = document.createElement("th");
    var elementoHeaderTr = document.createElement("tr");
    
    //cria o header para o produto
    produtoHeader.innerText = 'Produto';
    elementoHeaderTr.appendChild(produtoHeader);
    cabecalho.appendChild(elementoHeaderTr);

    //cria o header para o valor
    valorHeader.innerText = 'Valor';
    elementoHeaderTr.appendChild(valorHeader);
    cabecalho.appendChild(elementoHeaderTr);

    elementoTabela.appendChild(cabecalho);

    for(var i = 0; i < arrayParse.length; i++){
        console.log(arrayParse)
        var elementoTdProduto = document.createElement("td");
        var elementoTdValor = document.createElement("td");
        var elementoTr = document.createElement("tr");
        elementoTdProduto.innerText = arrayParse[i].nomeProd;
        elementoTr.appendChild(elementoTdProduto);
        elementoTdValor.innerText = arrayParse[i].valorProd;
        elementoTr.appendChild(elementoTdValor);
        corpo.appendChild(elementoTr);
    }

    elementoTabela.appendChild(corpo);
    sectionResultado.appendChild(elementoTabela);
}

function montarLista(arrayParse, sectionResultado){
    let elementoLista = document.createElement("ul");
    for(var i = 0; i < arrayParse.length; i++){
        var elementoLi = document.createElement("li");
        elementoLi.innerText = `Produto: ${arrayParse[i].nomeProd} | Valor: ${arrayParse[i].valorProd}`
        elementoLista.appendChild(elementoLi);
    }
    sectionResultado.appendChild(elementoLista); 
}