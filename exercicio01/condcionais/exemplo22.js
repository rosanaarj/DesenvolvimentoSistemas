/** Exercício 22) Faça um programa que solicite a hora e exiba a saída de acordo com a tabela abaixo:

Hora Saída
5h até 12h Turno matutino
13h até 19h Turno vespertino
20h até 24h Turno noturno
Demais Turno inválido */

function indentificarTurno(hora){
    if(hora >=5 && hora <=12){
        console.log("turno matutino");
        return;
    }
    if(hora >=13 && hora <=19){
        console.log("turno vespertino");
        return;
    } 
    if(hora >=20 && hora <=24){
        console.log("turno noturno");
        return;
    }
    else{
        console.log("turno invalido");
        return;
    }
}
let hora=20
console.log(indentificarTurno(hora));