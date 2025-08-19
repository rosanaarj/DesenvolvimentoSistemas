//  Crie um array de idades e use filter() para retornar apenas as idades maiores ou iguais a 18.

let idades = [15, 18, 22, 13, 30, 17, 19];

let adultos = idades.filter(function(idade) {
    return idade >= 18;
});

console.log(adultos);
