
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKM = 100;

const litrosConsumidos = distanciaKM / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2)); //Converte valor para texto com duas casas decimais;
