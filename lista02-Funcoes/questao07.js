/** 07ª Crie duas funções: quadrado(n): retorna o quadrado de n. somaQuadrados(a, b): retorna a soma
dos quadrados de a e b, utilizando a função quadrado. */

function quadrado(n) {
    return n * n;
}

function somaQuadrados(n1, n2) {
    return quadrado(n1) + quadrado(n2);
}

console.log(somaQuadrados(5, 6));
