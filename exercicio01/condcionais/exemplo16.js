/** Exercício 16) Faça um programa que leia 3 notas, calcule a média aritmética se e somente se, são notas válidas.
Em seguida, exiba a situação do aluno (aprovado se média maior ou igual a 70 ou reprovado
caso contrário).

Média Situação
Média >= 70 Aprovado
Média < 40 Reprovado
Média < 70 e Média >= 70 Em recuperação */

function mediaAritimetica(nota1,nota2,nota3){

    let media= (nota1+nota2+nota3)/3;
    console.log("a media é",media);
    
    if(media>=70){
        console.log("situaçao do aluno:APROVADO");
    } else if(media<40){
        console.log("situaçao do aluno:REPROVADO");
    } else{
        console.log("situaçao do aluno:EM RECUPERAÇAO");
    }
}
let nota1=7;
let nota2=8;
let nota3=9;

console.log(mediaAritimetica(nota1,nota2,nota3));