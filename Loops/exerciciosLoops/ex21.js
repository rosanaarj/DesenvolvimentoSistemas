/**21. Faça um programa que verifique se 121 é um número primo. */

let numero = 121;
let divisores = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisores++;
  }
}

if (divisores === 2) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}