/**4)Crie um array chamado nomes com os seguintes nomes: ['Ana', 'Carlos', 'Fernanda', 'João']
 * localize o índice do nome 'Fernanda' e remova-o do array. 
 * Mostre o array após a remoção.
 */

let nomes = ['Ana', 'Carlos', 'Fernanda', 'João'];
let indiceFernanda = nomes.indexOf('Fernanda');
if (indiceFernanda !== -1) {
    nomes.splice(indiceFernanda, 1);
}
console.log('Remoção: ', nomes);