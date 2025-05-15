/** Exercício 10) Faça um programa que receba o salário de um trabalhador e o valor da prestação de um
empréstimo, se a prestação for maior que 20% do salário imprima: “Empréstimo não concedido”,
caso contrário imprima: “Empréstimo concedido”. */

function verificarEmprestimo(salario, prestação) {
    let limite = salario * 0.20;
    if(prestação>limite){
        return(`o empréstimo foi concedido.`);
    }else{
        return(`o empréstimo nao foi concedido.`);
    }
}
let salario = 1000;
let prestação = 200;
console.log(verificarEmprestimo(salario, prestação));