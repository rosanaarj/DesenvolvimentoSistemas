/**Exercício 11) Faça um programa que receba o peso e a altura de um usuário e calcule o IMC (índice de massa
corpórea). O IMC é definido por peso / (altura * altura). Escreva no console a situação do
paciente baseada na tabela abaixo.

Cálculo IMC Situação
Abaixo de 18,5 Você está abaixo do peso ideal
Entre 18,5 e 24,9 Parabéns — você está em seu peso normal!
Entre 25,0 e 29,9 Você está acima de seu peso (sobrepeso)
Entre 30,0 e 34,9 Obesidade grau I
Entre 35,0 e 39,9 Obesidade grau II
40,0 e acima Obesidade grau III*/

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let situacao;

    if (imc < 18.5) {
        situacao = "Você está acima do peso!"
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao ="Ótimo você está com o peso legal!";
    } else if (imc >= 25.0 && imc <= 29.9) {
        situacao ="Você está com sobrepeso.";
    } else if (imc >= 30.0 && imc <= 34.9) {
        situacao ="Obesidade grau I.";
    } else if (imc >= 35.0 && imc <= 39.9) {
        situacao ="obesidade Grau II.";
    } else {
        situacao ="Obesidade Grau III.";
    }

    return (`Seu IMC é ${imc}. ${situacao}`);

}
let peso = 89.0;
let altura = 1.79;

console.log(calcularIMC(peso, altura));