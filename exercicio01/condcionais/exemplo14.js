/** Exercício 14) faça um programa que calcule a media de 3 notas e se somente se essas notas forem validas,uma nota é considerada valida se ela for maior ou igual a 0 ou menor ou igual a 100 */

let nota1=6;
let nota2=7;
let nota3=102;

if (nota1 >= 0 && nota1 <= 100 &&
    nota2 >= 0 && nota2 <= 100 &&
    nota3 >= 0 && nota3 <= 100 ){

        let media = (nota1 + nota2 + nota3)/3;
     console.log("a média das notas é", media);

     }else{
        console.log("uma ou mas notas são inválidas,as notas tem que estar em um intervalo de 0 a 100.");
        
     }