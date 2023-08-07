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
console.log(obterInformacoesProdutos(produtos)); 

const gerarTabelaProdutos = (produtos) => {
  let tabela = '<table>';
  tabela += '<tr><th>Nome</th><th>Preço</th></tr>';
  produtos.forEach((produto) => {
    const { nome, preco } = produto;
    tabela += `<tr><td>${nome}</td><td>R$${preco}</td></tr>`;
  });
  tabela += '</table>';
  return tabela;
};

// Exemplo de uso:
console.log(gerarTabelaProdutos(produtos)); 


const gerarListaProdutos = (produtos) => {
  let lista = '<ul>';
  produtos.forEach((produto) => {
    const { nome, preco } = produto;
    lista += `<li>O produto ${nome} custa R$${preco}.</li>`;
  });
  lista += '</ul>';
  return lista;
};

// Exemplo de uso:
console.log(gerarListaProdutos(produtos)); 
