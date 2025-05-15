/**Exercício 12) Faça um programa que leia um número, calcule e exiba se ele é divisível por 2 e 5. */
function vericardivisao(numero) {
    if (numero % 2 == 0 && numero % 5 == 0) {
        return (`O número ${numero} é divisivel pr 2 e 5.`);
    } else {
        return (`O número ${numero} não é divisivel por 2 e 5.`);
    }
}

let numero= 7;

console.log(vericardivisao(numero));