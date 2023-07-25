const readline = require('readline');
const concatenacao = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

concatenacao.question('Digite a primeira palavra: ', (palavra1) => {
    concatenacao.question('Digite a segunda palavra: ', (palavra2) => {
    const palavraConcatenada = `${palavra1}${palavra2}`;
    console.log('Palavra resultante:', palavraConcatenada);
    concatenacao.close();
  });
});