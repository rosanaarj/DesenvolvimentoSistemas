/** 16ª Elabore uma função que receba o salário bruto de uma pessoa e calcule o salário líquido. Reduza do salário
5% se o salário bruto for até R$ 1.518,00, 7,5% se o salário bruto for até R$ 2.826,65, 15% se o salário
bruto for até R$ 3.751,05 e, 27,5%, se o salário for superior a R$ 3.751,05. Exiba o salário bruto, descontos
e o salário líquido. */

function calcularSalario(salarioBruto) {
    let desconto = 0;

    if (salarioBruto <= 1518) {
        desconto = salarioBruto * 0.05;
    } else if (salarioBruto <= 2826.65) {
        desconto = salarioBruto * 0.075;
    } else if (salarioBruto <= 3751.05) {
        desconto = salarioBruto * 0.15;
    } else  {
        desconto = salarioBruto * 0.275;
    }

    let salarioLiquido = salarioBruto - desconto;
    console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
    console.log(`Desconto : R$ ${desconto.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
}

calcularSalario(2000);