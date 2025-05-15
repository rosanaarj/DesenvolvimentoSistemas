/** Exercício 13) Elabore um programa em que dada a idade de um nadador classifique-o em uma das seguintes
categorias:

Infantil A = 5 - 7 anos
Infantil B = 8 - 10 anos
Juvenil A = 11-13 anos
Juvenil B = 14-17 anos
Adulto = maiores de 18 anos */

function classificarNadador(idade){
    if (idade < 0){
        return "idade inválida. Não pode ser menor que 0.";
    }

    if (idade > 120){
        return "idade inválida. Não pode ser maior que 120."
    }

    if (idade >= 5 && idade <= 7) {
        return "INFANTIL A.";
    }
    if (idade >= 8 && idade <= 10) {
        return "INFANTIL B.";
    } 
    if (idade >= 11 && idade <= 13) {
        return "JUVENIL A.";
    }
    if (idade >= 14 && idade <= 17) {
        return "JUVENIL B.";
    }
    if (idade >= 18) {
         return "ADULTO."
    } else {
        return "Sem categoria (abaixo de 5 anos)."
    }
}

let idade = 90;
console.log(classificarNadador(idade));