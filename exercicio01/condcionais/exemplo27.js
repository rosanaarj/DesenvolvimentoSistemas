/** Exercício 27) Faça um programa que leia dois valores e imprima uma das três mensagens a seguir: “Números
iguais” – caso os números sejam iguais, “Primeiro é maior” – caso o primeiro seja maior que o
segundo, “Segundo maior” – caso o segundo seja maior que o primeiro. */
function compararNumeros(n1, n2){
    if(n1 == n2){
        console.log("Numeros iguais");
        return;
    }
    if(n1 > n2){
        console.log("primeiro é maior");
        return;
    }
    else{
        console.log("segundo é maior");
        return
    }
} 
let n1 = 3;
let n2 = 4; 

console.log(compararNumeros(n1, n2));