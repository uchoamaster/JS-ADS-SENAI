const pessoa = {
  nome: 'João',
  idade: 30,
  endereco: 'Rua A, 123'
};

console.log(pessoa); // Saída: { nome: 'João', idade: 30, endereco: 'Rua A, 123' }

const obterInformacoesProduto = (produto) => {
  const { nome, preco } = produto;
  return `O produto ${nome} custa R$${preco}.`;
};

// Exemplo de uso:
const produto = {
  nome: 'Camisa',
  preco: 49.99
};
console.log(obterInformacoesProduto(produto)); // Saída: "O produto Camisa custa R$49.99."

const obterInformacoesProdutos = (produtos) => {
  let informacoes = '';
  produtos.forEach((produto) => {
    const { nome, preco } = produto;
    informacoes += `O produto ${nome} custa R$${preco}.\n`;
  });
  return informacoes;
};

// Exemplo de uso:
const produtos = [
  {
    nome: 'Camisa',
    preco: 49.99
  },
  {
    nome: 'Calça',
    preco: 89.99
  }
];
console.log(obterInformacoesProdutos(produtos)); // Saída: "O produto Camisa custa R$49.99.\nO produto Calça custa R$89.99."
