/**24. Faça um programa que leia 20 valores e no final escreva o maior e o menor valor lido. */

let valores = [5, 12, 7, 20, 3, 15, 9, 30, 2, 18, 6, 1, 22, 14, 4, 11, 8, 17, 10, 13];

let maior = valores[0];
let menor = valores[0];

for (let i = 1; i < valores.length; i++) {
  if (valores[i] > maior) maior = valores[i];
  if (valores[i] < menor) menor = valores[i];
}

console.log("Maior:", maior);
console.log("Menor:", menor);