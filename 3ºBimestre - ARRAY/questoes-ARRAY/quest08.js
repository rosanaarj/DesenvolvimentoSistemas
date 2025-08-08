/**3) Crie um array com 4 números e calcule a soma de todos eles usando um for. */

let numeros = [2, 4, 6, 8];
let soma = 0;
for(let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log(soma);
