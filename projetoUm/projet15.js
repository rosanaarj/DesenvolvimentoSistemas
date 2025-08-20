// Crie um array de números e use find() para retornar o primeiro número maior que 50.

let numeros = [10, 25, 48, 55, 60, 30];

let encontrado = numeros.find(function(numero) {
    return numero > 50;
});

console.log("Primeiro número maior que 50:", encontrado);
