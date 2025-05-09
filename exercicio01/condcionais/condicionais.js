/**
 * condicionais: Operador ternário
 */

let idade = 12;
let isAdulto = (idade >= 18) ? 'sim' : 'não';

// a crase é quando utiliza-se interpolação
console.log(`Você tem ${idade} anos`);

// aspas é concatenação
console.log('É adulto? ' + isAdulto);