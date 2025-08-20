// Crie um array de números e use some() para verificar se existe algum número negativo.

let numeros = [10, 25, -5, 30, 0];

let temNegativo = numeros.some(function(numero) {
    return numero < 0;
});

console.log("Contem número negativo?", temNegativo);
