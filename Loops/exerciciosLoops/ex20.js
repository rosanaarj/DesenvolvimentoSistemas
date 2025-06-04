/**20. Por definição, um número é dito primo quando ele só é divisível por 1 e por ele mesmo, ou seja,
possui 2 divisores. */

let numero = 17; // Número fixo
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