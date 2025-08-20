// Crie um array de números e use every() para verificar se todos os números são positivos.

let numeros = [3, 13, 33, 6, 1];

let todosPositivos = numeros.every(function(numero) {
    return numero > 0;
});

console.log("Todos os números são positivos?", todosPositivos);
