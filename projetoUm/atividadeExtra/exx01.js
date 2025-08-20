//  Você está desenvolvendo um sistema de gerenciamento de estoque para uma loja online. A cada venda, os itens vendidos devem ser removidos do array principal de produtos, e um relatório final deve ser gerado mostrando apenas os itens restantes no estoque em ordem alfabética. Crie um código que faça essa operação a partir de dois arrays: um com todos os produtos e outro com os vendidos.
// produtos em estoque
let estoque = ["pulseira", "Creme", "Brinco", "Gelatina", "Morango do Amor", "torta"];

// produtos vendidos
let vendidos = ["torta", "Morango do Amor", "Creme"];


function atualizarEstoque(estoque, vendidos) {
   
    let estoqueAtualizado = estoque.filter(produto => !vendidos.includes(produto));
    
    estoqueAtualizado.sort();

    return estoqueAtualizado;
}

let estoqueRestante = atualizarEstoque(estoque, vendidos);

console.log("Itens restantes no estoque (ordenados):");
estoqueRestante.forEach(produto => console.log(produto));
