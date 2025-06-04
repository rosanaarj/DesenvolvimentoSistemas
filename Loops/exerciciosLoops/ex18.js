/**Faça um programa que mostre a quantidade de divisores do número 1000 que existe no intervalo
de 0 - 1000. Lembre-se que n é divisor de x, se o resto da divisão de n por x for 0. */

let cont = 0;

for (let i = 1; i <= 1000; i++) {
  if (1000 % i === 0) {
    cont++;
  }
}

console.log("Quantidade de divisores de 1000 entre 1 e 1000 é:", cont);