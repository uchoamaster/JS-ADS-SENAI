const base =[5,10,15,20]

const arrayMedia = base.map((valor,indice,arr)=>{
    const previaValor = arr.slice(0,indice+1);
    const soma = previaValor.reduce((accumulator,currentValue)=> accumulator+currentValue)
    return soma/previaValor.length
});

console.log(arrayMedia);