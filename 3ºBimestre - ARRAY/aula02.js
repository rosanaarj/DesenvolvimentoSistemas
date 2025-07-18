let frutas = ['Maçã', 'Banana', 'Laranja'];

let indice = frutas.indexOf('Banana');

// se o indice retornado for diferenye de -1, mude, através de um indíce para 'Uva'
if (indice !== -1){
    frutas[indice] = 'Uva';
    frutas.unshift('Bergamota');
    frutas.push('Tangerina');
    frutas.splice(indice, 1);
}

console.log(frutas);
