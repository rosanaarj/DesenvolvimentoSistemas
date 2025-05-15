/** Exercício 24) Laranjas custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de laranjas compradas,
calcule e escreva o custo total da compra. */

function verificarLaranja(quantidadedelaranja){
    let preco;
    if(quantidadedelaranja<12){
        preco=1.30
    }
    else{
        preco=1.0
    }
    let custototal = quantidadedelaranja * preco;
    console.log("o custo total foi:",custototal);
    
    return;
}
let quantidadedelaranja=15;
console.log(verificarLaranja(quantidadedelaranja));