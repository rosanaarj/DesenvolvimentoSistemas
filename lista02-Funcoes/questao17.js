/** 17ª Elabore uma função para a partir do parâmetro preço da conta, calcule o valor da gorjeta que é de 10%
sobre o valor da conta. Exiba o valor da conta, o valor da gorjeta e o valor total da conta. */

function gorjeta(preco) {
    let valorGorjeta = preco * 0.10;
    let valorTotal = preco + valorGorjeta;

    console.log(`Valor da conta : R$ ${preco}`);
    console.log(`Valor da gorjeta : R$ ${valorGorjeta}`);
    console.log(`Valor Total : R$ ${valorTotal}`);
}

gorjeta(100);