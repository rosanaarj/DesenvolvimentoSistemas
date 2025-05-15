/** Exercício 15)Faça um programa que leia 3 valores e verifique se todos são inteiros e positivos, em seguida
exiba quais deles são inteiros ou não e positivos ou negativos. */

function verificarValor(valor1, valor2, valor3) {

    if (valor1 < 0) {
        console.log("O valor1", valor1, "é negativo");
    } else if (valor1 % 1 == 0) {
        console.log("O valor1", valor1, "é inteiro e positivo");
    } else {
        console.log("O valor1", valor1, "não é inteiro");
    }

    if (valor2 < 0) {
        console.log("O valor2", valor2, "é negativo");
    } else if (valor2 % 1 == 0) {
        console.log("O valor2", valor2, "é inteiro e positivo");
    } else {
        console.log("O valor2", valor2, "não é inteiro");
    }

    if (valor3 < 0) {console.log("O valor3", valor3, "é negativo");
    } else if (valor3 % 1 == 0) {
        console.log("O valor3", valor3, "é inteiro e positivo");
    } else {
        console.log("O valor3", valor3, "não é inteiro");
    }

    return;
}

console.log(verificarValor(4,-2,5.7));