// Crie um array de números e use sort() para ordená-los em ordem crescente.

let numeros = [40, 10, 5, 100, 25];

numeros.sort(function(a, b) {
    return a - b;
});

console.log(numeros);
