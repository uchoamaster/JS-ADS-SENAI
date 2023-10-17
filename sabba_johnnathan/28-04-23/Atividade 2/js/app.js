const somarNumeros = (array) => {
  let soma = 0;
  array.forEach((numero) => {
    soma += numero;
  });
  return soma;
};

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
console.log(somarNumeros(numeros)); // Saída: 15

const contarCaracteres = (array) => {
  let totalCaracteres = 0;
  array.forEach((string) => {
    totalCaracteres += string.length;
  });
  return totalCaracteres;
};

// Exemplo de uso:
const strings = ["Olá", "Mundo", "Batman"];
console.log(contarCaracteres(strings)); // Saída: 12

const obterDescricaoProduto = (produto) => {
  const { nome, preco, quantidade } = produto;
  return `O produto ${nome} custa R$${preco} e possui ${quantidade} unidades disponíveis.`;
};

// Exemplo de uso:
const produto = {
  nome: "Camisa",
  preco: 49.99,
  quantidade: 10,
};
console.log(obterDescricaoProduto(produto)); // Saída: "O produto Camisa custa R$49.99 e possui 10 unidades disponíveis."
