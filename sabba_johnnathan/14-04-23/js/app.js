// Crie uma função que receba um array de números e retorne o valor máximo
function getMaxValue(arr) {
  return Math.max(...arr);
}
// Crie uma função que receba um array de strings e retorne o número total de caracteres.
function getTotalCharacters(arr) {
  let total = 0;
  arr.forEach((str) => (total += str.length));
  return total;
}
// Crie um array associativo que armazene o nome e o e-mail de três pessoas diferentes e, em seguida, crie uma função que retorne o e-mail de uma pessoa com base no seu nome.
const people = {
  João: "joao@example.com",
  Maria: "maria@example.com",
  Pedro: "pedro@example.com",
};

function getEmailByName(name) {
  return people[name];
}
// Crie um array de forma literal que armazene os nomes de cinco frutas diferentes e, em seguida, crie uma função que retorne uma mensagem indicando se a fruta informada está presente ou não no array.
const fruits = ["banana", "maçã", "laranja", "uva", "manga"];

function checkFruitAvailability(fruit) {
  if (fruits.includes(fruit)) {
    return "A fruta está presente no array.";
  } else {
    return "A fruta não está presente no array.";
  }
}
// Crie uma variável que armazene um número e, em seguida, crie uma função que retorne o dobro desse número.
const number = 10;

function doubleNumber() {
  return number * 2;
}
// Crie uma função que receba um array de números como parâmetro e retorne um novo array com o dobro de cada número.
function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
// Crie um array de forma literal que armazene os nomes de cinco animais diferentes e, em seguida, crie uma função que retorne uma mensagem indicando a posição do animal informado no array.
const animals = ["cachorro", "gato", "coelho", "elefante", "leão"];

function getAnimalPosition(animal) {
  const index = animals.indexOf(animal);
  if (index !== -1) {
    return `O ${animal} está na posição ${index + 1} do array.`;
  } else {
    return `O ${animal} não está presente no array.`;
  }
}
// Crie uma variável que armazene uma string e, em seguida, crie uma função que retorne essa string em maiúsculas.
const str = "hello world";

function uppercaseString() {
  return str.toUpperCase();
}
// Crie uma função que receba uma variável como parâmetro e, em seguida, armazene esse parâmetro em uma nova variável. Em seguida, retorne a nova variável.
function storeVariable(variable) {
  const newVariable = variable;
  return newVariable;
}
//Crie uma função que receba uma string e retorne o número de vogais presentes nessa string.
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}
//Crie uma função que receba um número e retorne o fatorial desse número.
function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}
