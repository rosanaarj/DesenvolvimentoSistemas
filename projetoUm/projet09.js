// Crie um array de números e use map() para retornar um novo array com cada número multiplicado por 2.

let numeros = [1, 2, 3, 4, 5];

let numerosMultiplicados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(numerosMultiplicados);
