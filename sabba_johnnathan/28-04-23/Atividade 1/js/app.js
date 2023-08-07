// Função para dar boas-vindas ao usuário
function saudacao(nome) {
  return `Olá, ${nome}! Seja bem-vindo(a).`;
}

// Função para formatar uma data
function formatarData(data) {
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  return `A data atual é: ${dia}/${mes}/${ano}.`;
}

// Função para exibir informações de um produto 
function exibirProduto(produto) {
  const { nome, preco, quantidade } = produto;

  return `Nome do produto: ${nome}
Preço: R$${preco.toFixed(2)}
Quantidade disponível: ${quantidade}`;
}

const nomeUsuario = 'João';
console.log(saudacao(nomeUsuario));

const dataAtual = new Date();
console.log(formatarData(dataAtual));

const produto = {
  nome: 'Camiseta',
  preco: 29.99,
  quantidade: 10
};
console.log(exibirProduto(produto));
