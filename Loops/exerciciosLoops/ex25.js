/**25. Faça um programa que exiba a tabuada completa para os números de 1 a 10, no formato a seguir:

1x1 = 1
1x2 = 2
...
10x9 = 90
10x10 = 100 */

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + "x" + j + " = " + (i * j));
  }
}