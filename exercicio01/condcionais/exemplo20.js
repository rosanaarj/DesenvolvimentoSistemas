/** Exercício 20) Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou
V-vespertino ou N-noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!",
respectivamente, ou "Valor Inválido!", conforme o caso. */

function turnoEstuda(turno){
    switch (turno){
        case 'M':
        console.log("bom dia");
        return;
        case 'V':
        console.log("boa tarde");
        return;
        case'N':
        console.log("boa noite");
        return;
        default:
            console.log("valor invalido");

    } 

}
console.log(turnoEstuda('M'));