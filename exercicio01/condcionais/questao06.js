// Exercício 06)Solicite um número e verifique se ele é negativo, caso seja verifique se ele é par ou ímpar e exiba o número par ou ímpar.

function verificarNumero(numero) {

if(numero<0){
    if(numero %2==0){
        return(`o numero ${numero} é negativo e par. `);
    } else {
        return(` o numero ${numero} é negativo e impar.`);
    }
} else{
    return(` o numero é positivo.`)
}
}
let numero=-9
console.log(verificarNumero(numero));
