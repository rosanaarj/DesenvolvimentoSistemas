/** Exercício 19) Sabendo que T é um triângulo retângulo, faça um programa que solicite ao usuário os valores de
2 catetos. Calcule o valor da hipotenusa. */

function calcularHipotenusa(cateto1, cateto2){
    let hipotenusa=5; 
    if(hipotenusa * hipotenusa == cateto1 * cateto1 + cateto2 * cateto2){
        console.log("a hipotenusa é", hipotenusa);
        return;
    }
    return;
}
let cateto1 = 3
let cateto2 = 4

console.log(calcularHipotenusa(cateto1, cateto2));