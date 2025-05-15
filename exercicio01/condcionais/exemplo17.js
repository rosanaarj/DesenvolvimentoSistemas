/** Exercício 17) Faça um programa que leia 3 valores a, b e c, inteiros e positivos, verifique se esses valores
formam um triângulo retângulo. Lembre-se do Teorema de Pitágoras que diz: “Em qualquer
triângulo retângulo, o quadrado do comprimento da hipotenusa é igual à soma dos quadrados dos
comprimentos dos catetos.” */

function trianguloRetangulo(a, b, c) {
    if (a > 0 && b > 0 && c > 0 && a % 1 === 0 && b % 1 === 0 && c % 1 === 0) {
        let hipotenusa = a;
        let cateto1 = b;
        let cateto2 = c;

        if (b > hipotenusa) {
            hipotenusa = b;
            cateto1 = a;
            cateto2 = c;
        }

        if (c > hipotenusa) {
            hipotenusa = c;
            cateto1 = a;
            cateto2 = b;
        }

        if (hipotenusa * hipotenusa == cateto1 * cateto1 + cateto2 * cateto2) {
            console.log("É um triângulo retângulo.");
        } else {
            console.log("Não é um triângulo retângulo.");
        }
    } else {
        console.log("os valores  Devem ser inteiros e positivos.");
    }

    return;
}
let a =3;
let b = 4;
let c =5;

console.log(trianguloRetangulo(a,b,c));