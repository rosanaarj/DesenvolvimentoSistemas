/** 06ª Crie uma função chamada maiorNumero que receba um 3 números e retorne o maior valor. */

function maiorNumero(n1, n2, n3) {
    let maior = n1;
    if (n2 > maior) {
        maior = n2;
    }
    if (n3 > maior) {
        maior = n3;
    }
    return maior;
}

console.log(maiorNumero(46, 95, 2));
