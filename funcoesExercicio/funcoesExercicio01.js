// Exercicío 5) Elabora uma função que verifique se o número é par ou ímpar

function parImpar(n) {
    if (n % 2 == 0){
        return 'é par';
    }
    else {
        return 'é ímpar';
    }
}
console.log(parImpar(7));
