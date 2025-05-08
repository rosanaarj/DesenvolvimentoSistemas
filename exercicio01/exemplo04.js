
function verificarEmprestimo(salario, emprestimo) {
    const limite = salario * 0.2;

    if (emprestimo <= limite) {
        console.log("empréstimo pode ser concedido!");

    } else {
        console.log("imprétimo não pode ser concedido!");
    }
}

const salario = 8000;
const emprestimo = 7000;

verificarEmprestimo(salario, emprestimo)