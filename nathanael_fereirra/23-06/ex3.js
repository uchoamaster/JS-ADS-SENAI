const listaDeCompras = [{
    item: "Coco",
    preco: 5.00
},
{
    item: "Manga",
    preco: 10.00
},
{
    item: "Melancia",
    preco: 15.00
}]

const arrayItem = listaDeCompras.map(newarray => newarray.item)

console.log(arrayItem);