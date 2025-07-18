// 1) Verifique se o nome 'Carlos' está na lista e , se estiver, substitua por 'Caio'. includes()
let indiceCarlos = nomes.indexOF('Carlos');

if (indiceCarlos != -1){
    nomes[indiceCarlos] = 'Caio';
}
// 2) Depois, remova o nome 'Ana' do array. splice()
let indiceAna = nomes.indexOF('Ana');
if (indiceAna != -1) {
    nomes.splice(indiceAna, 1);
}

console.log(nomes);

// 3) mostrar o array final
console.log('Array final: ', nomes);


