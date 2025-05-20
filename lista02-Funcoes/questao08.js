/** 08ª Declare uma variável fora de uma função e modifique-a dentro da função e a exiba fora da função. */

let mensagem = "Oii, Hacker!";

function alterarMensagem() {
    mensagem = "Mensagem alterada*";
}

alterarMensagem();

console.log(mensagem);;
