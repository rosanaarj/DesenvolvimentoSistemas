/** Exercício 26) Faça um programa que leia o nome de 2 times e o número de gols marcados na partida (para
cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra
EMPATE. */
function verificarPartida(time1, gol1, time2, gol2){
    if(gol1 > gol2){
        console.log("vencedor", time1);
        return;
    } 
    if(gol2 > gol1){
        console.log("vencedor", time2);
        return;
        
    }
    else{
        console.log("EMPATE");
        return;
    }
}
let time1 = "flamengo";
let gol1 = 3;
let time2 = "corinthians;"
let gol2 = 2;

console.log(verificarPartida(time1, gol1, time2, gol2));
