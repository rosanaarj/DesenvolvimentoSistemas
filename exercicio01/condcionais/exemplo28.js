/** Exercício 28) Faça um programa que solicite qual a média o estudante quer calcular, para isso exiba um menu
com as seguintes opções: (1) aritmética simples, (2) aritmética ponderada e (3) sair. Implemente
todas as opções, exibindo se o estudante está aprovado (nota maior ou igual a 60), em
recuperação (nota entre 40 e 59) e reprovado (nota inferior a 40). */

function verificarMedia(opcao, nota1, nota2, nota3, peso1, peso2, peso3){
    let media=0
        switch (opcao){
        case 1:
        media = (nota1 + nota2 + nota3) / 3;
            break;

             case 2:
         let somaPesos = peso1 + peso2 + peso3;
            media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;
            break;

            case 3 :
                console.log("saindo..");
                return
                
                default:
                    console.log("opçao invalida");
                    return;
    }
    console.log("Média:", media);

    if (media >= 60) {

        console.log("Situação: Aprovado");

    } else if (media >= 40) {

        console.log("Situação: Em recuperação");

    } else {
        console.log("Situação: Reprovado");
    }

    return;
    }
    let opçao = 2;
    let nota1 = 6;
    let nota2 = 8;
    let nota3 = 9;
    let peso1 = 3;
    let peso2 = 4;
    let peso3 = 5;

    console.log(verificarMedia(opçao, nota1, nota2, nota3, peso1, peso2, peso3));