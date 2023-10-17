const palavras = ["  Teste1","Teste 2"," Teste3 ","Teste4 "]

const novaPalavra = palavras.map((palavra)=>{
    return palavra.replace(/\s/g,'');

});
console.log(novaPalavra);
