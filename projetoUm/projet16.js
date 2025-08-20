//  Crie um array de números e use findIndex() para retornar o índice do primeiro número menor que 10.
let numeros = [17, 15, 8, 30, 5];

let indice = numeros.findIndex(function(numero) {
    return numero < 10;
});

console.log("Índice do primeiro número menor que 10:", indice);
