/** 15ª Escreva uma função que tenha parâmetros padrão e teste chamá-la com diferentes combinações de
argumentos. */

function saudacao(nome =  'rosana', idade = 17) {
    console.log(`Oi ${nome}, você tem ${idade} anos!`);
}

saudacao();
saudacao('cibelly', 50);
saudacao('cibelly');
saudacao(50);