/** Exercício 09) Faça um programa que determine se um determinado ano lido é bissexto. Sendo que um ano é
bissexto se for divisível por 400 ou se for divisível por 4 e não for divisível por 100. ex: 1988,
1992, 1996. */

function anoBissexto(ano) {
    if(ano % 400 ==0){
        return(` o ano ${ano} é bissexto`);
    } else if(ano % 4 ==0 && ano % 100 !==0){
         return(` o ano ${ano} é bissexto`);
    }else{
        return(` o ano ${ano} que voce mencionou não é bissexto.`);
    }
}
let ano = 1988;
console.log(anoBissexto(ano));