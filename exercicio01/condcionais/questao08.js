/** Exercício08) Solicite um número ao usuário e verifique se o número é -5 ou 5. Exiba em tela caso seja
verdadeiro, senão exibir uma mensagem de erro.*/

function erroNumero(numero) {
    if(numero == -5 ){
        return(`o número ${numero} é igual a -5.`);
    } if(numero == 5){
        return(` o número ${numero} é igual a 5.`);
    } else{
        return(`erro:o número ${numero} não é igual a -5 ou a 5.`);
    }
}
let numero = -5;
console.log(erroNumero(numero));