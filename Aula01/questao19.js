let salarioBruto = 1000;
let inss = salarioBruto * 0.07;
let irrf = salarioBruto * 0.14;
let salarioLiquido = salarioBruto - (inss + irrf);

console.log("Salário bruto: R$" + salarioBruto);
console.log("(-) INSS: R$" + inss);
console.log("(-) IRRF: R$" + irrf);
console.log("Salário líquido: R$" + salarioLiquido);

