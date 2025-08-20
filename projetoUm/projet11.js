//  Crie um array de números e use reduce() para calcular a soma de todos os elementos.

let numeros = [50, 50, 55, 60];

let soma = numeros.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0);

console.log("Total:", soma);
