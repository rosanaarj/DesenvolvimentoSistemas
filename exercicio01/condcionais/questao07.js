// Exercício 07)Faça um programa que leia um número e verifique se ele está no intervalo de 5 e 9. Caso esteja, informe ao usuário.

function intervaloNumero(numero) {
    if(numero>=5 && numero <= 9){
        return(`o número ${numero} está no intervalo de 5 e 9.`);
    }else{
        return(`o número ${numero} nao está no intervalo de 5 e 9.`);
    }
}
let numero = 6;
console.log(intervaloNumero(numero));