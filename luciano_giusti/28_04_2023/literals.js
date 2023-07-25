//Atividade 1 - Template Literals
//1 . Crie uma função que recebe um nome e retorna uma string utilizando template literals para dar boas-vindas ao usuário.

const boas_vindas = () => ({

    nome: "Luciano"
});

let mensagem = `Seja bem vindo ${(boas_vindas().nome)}!`;
console.log(mensagem);

//2. Crie uma função que recebe uma data e retorna uma string formatada utilizando template literals.

const data = () => {
    const dataLocal = new Date().toLocaleDateString();
    return `Joinville, ${(dataLocal)}.`

};
console.log(data());

//3. Crie uma função que recebe um objeto com as informações de um produto e retorna uma string utilizando template literals para exibir as informações na tela.


const meuCarro = () => ({

    fabrica: "Ford",
    modelo: "Focus",
    ano: 2017

})
console.log(`Carro: 
    Fabricante: ${meuCarro().fabrica}
    Modelo: ${meuCarro().modelo}
    Ano: ${meuCarro().ano}`);



///////Atividade 2 - Arrow Functions/////////////////////////////////////////////////////////////



// 1. Crie uma função que recebe um array de números e utiliza arrow function para retornar a soma de todos eles.

function numeros() {

    const arrayNum = [1, 2, 3, 4];

    let soma = arrayNum.reduce((total, num) => total + num, 0);

    return `A soma dos números da array é ${soma}.`;
};
console.log(numeros());

// 2. Crie uma função que recebe um array de strings e utiliza arrow function para retornar o número total de caracteres em todas as strings.
const nome = "Luciano Albino Giusti";
function totalCaractere() {

    const arrayString = [nome].join().length;

    return arrayString;
}

console.log(`O número total de caracteres para "${nome}" é ${totalCaractere()}.`);

// 3. Crie uma função que recebe um objeto com informações de um produto e utiliza arrow function para retornar a descrição do produto em uma string.

let carro = {
    fabrica: "ford",
    modelo: "focus",
    cor: "branca",
    ano: 2017
}
const retornoString = () => ({ carro });

console.log(retornoString());


//////Atividade 3 - JSON - /////////////////////////////////////////////////////////////

// 1. Crie um objeto JSON com informações sobre uma pessoa, como nome, idade e endereço.

let objetoJson = `{"nome": "Luciano",
"idade": 44
"endereço": "gardênicas, 231 bairro Fátima"}`
console.log(objetoJson);

// 2. Crie uma função que recebe um objeto JSON com informações de um produto e retorna uma string com o nome e o preço do produto.

const casa = `{
    "casa": "branca", "preço": 80000}`;

function obJson() {
    const carroJson = JSON.parse(casa);
    return carroJson;

}

console.log(obJson());

// 3. Crie uma função que recebe um array de objetos JSON com informações de produtos e retorna uma string com o nome e o preço de cada um dos produtos.

const produtos = `{
    "automovel": 2020, 
    "gol":["2022", " branco", " 4 portas", " valor: R$ 90.000,00"],
    "voyage": ["2020", " prata", " 4 portas", " valor: R$ 80.000,00"] }`;

function veiculo(){
    let objCarro = JSON.parse(produtos);
    //let golEsp = objCarro.especificacoes[0];
    // let esp = "";
    // for(let i in objCarro.gol){
    //     esp += objCarro.gol[i];
    // }
    let msg = `
    Gol: ${objCarro.gol}. 
    Voyage: ${objCarro.voyage}.`;
    
    return  msg;
}
console.log(veiculo());
    

/////Atividade 4 - Tamplate Literals e Arrow functions//////////////////////////////////////////////////////////

// 1. Crie uma função que recebe um array de objetos JSON com informações de produtos e utiliza template literals e arrow function para retornar uma string com o nome e o preço de cada um dos produtos.

const frutas = [
    {frt: "banana", preco: "R$ 3,00 /kg"},
    {frt: "laranja", preco: "R$ 4,00 /kg"},
    {frt: "limão", preco: "R$ 2,50 /kg"}
];

const custo = frutas.map(frutas => `${frutas.frt}: ${frutas.preco} \d`);
console.log(custo);


// 2. Crie uma função que recebe um array de objetos JSON com informações de produtos e utiliza template literals e arrow function para retornar uma tabela HTML com as informações de cada produto.

// Obs.: atividade no arquivo exeJson.html.

// 3. Crie uma função que recebe um array de objetos JSON com informações de produtos e utiliza template literals e arrow function para retornar uma lista HTML com as informações de cada produto.



 

