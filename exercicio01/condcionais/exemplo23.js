/**Faça um programa para calcular uma folha de pagamento, sabendo que os descontos são do
Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato
e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que
deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa
deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
a. Desconto do IR:
i. Salário Bruto até 900 (inclusive) - isento
ii. Salário Bruto até 1500 (inclusive) - desconto de 5%
iii. Salário Bruto até 2500 (inclusive) - desconto de 10%
iv. Salário Bruto acima de 2500 - desconto de 20%

Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora

é 5 e a quantidade de hora é 220.
Salário Bruto: (5 * 220)
(-) IR (5%)
(-) INSS ( 10%)
(-) Sindicato (3%)
FGTS (11%)
Total de descontos
Salário Líquido

: R$ 1100,00
: R$ 55,00
: R$ 110,00
: R$ 33,00
: R$ 121,00
: R$ 198,00
: R$ 902,00 */

function folhaPagamento(valorhora, horastrabalho){
    let salarioBruto = valorhora * horastrabalho;

    let desconto=0;
    if(salarioBruto<=900){
        desconto=0;
    } else if(salarioBruto<=1500){
        desconto= salarioBruto * 0.05;
    } else if (salarioBruto <=2500){
        desconto=salarioBruto * 0.10
    } else{
        desconto= salarioBruto * 0.20
    }

    let sindicato = salarioBruto * 0.3;
    let fgts = salarioBruto * 0.11;

    let descontototal= desconto + sindicato
    let salarioliquido = salarioBruto + descontototal

    console.log("Salário Bruto: R$", salarioBruto);
    console.log("(-) IR: R$", desconto);
    console.log("(-) Sindicato: R$", sindicato);
    console.log("FGTS (11%): R$", fgts);
    console.log("Total de descontos: R$", descontototal);
    console.log("Salário Líquido: R$", salarioliquido);

    return;
}
let horastrabalhadas = 220;
let valorhora = 5;

console.log(folhaPagamento(valorhora, horastrabalhadas));