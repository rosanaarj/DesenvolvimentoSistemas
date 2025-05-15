/**
 * Opção 1: Média Simples de duas notas
 * Opção 2: Média ponderada de 3 notas com pessos 2, 3, 5
 */

function mediaSimples(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function mediaPonderada(n1, n2, n3) {
    let m = (n1 * 2 + n2 * n3 * 5) / 10;
    return m;
}
let Opção = 1;
let media

switch (key) {
    case 1:
        media = mediaSimples(60, 70);
        console.log(`Média Simples ${media} pontos`);
        break;

    case 2;
    media = mediaPonderada(60, 90, 40)
    console.log(`Média Ponderada ${media} pontos`);
        break;

    default:
        console.log('Opção Inválida!');
        
}