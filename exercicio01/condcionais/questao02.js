//Exercício 02) Faça um programa que leia 3 números inteiros e apresente o maior deles.

let n1 = 20;
let n2 = 25;
let n3 = 30;
let maior;

if(n1 > n2){
    maior = n1;
}

else{
    maior = n2;
}

if(n3 > maior) {
    maior = n3;
}
console.log(`o maior número é ${maior}`);