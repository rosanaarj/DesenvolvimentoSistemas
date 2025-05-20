/** 05ª Crie uma função chamada contarVogais que receba uma string e retorne o número de vogais (a, e, i, o,
u) nela. Dica: Pesquise sobre o método indexOf(); */

function contarVogais(abc) {
    let vogais = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < abc.length; i++) {
        if (vogais.indexOf(abc[i]) !== -1){
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais("EU SOU BEAUTIFUL!"));
