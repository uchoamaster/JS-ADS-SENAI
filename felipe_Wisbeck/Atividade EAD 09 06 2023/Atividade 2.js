const frutasOrig = ['jabuticaba', 'banana', 'goiaba'];
const cloneFrutas = [...frutasOrig];

const frutasDif = ['tomate', 'manga', 'caqui', ...cloneFrutas];

console.log('Frutas originais:', frutasOrig);
console.log('Clone de frutas:', cloneFrutas);
console.log('Frutas diferentes:', frutasDif);
