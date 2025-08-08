let array = [];

console.log("Tipo do meu array: " + typeof (array));

function adicionarNumero(){
    let input = document.querySelector('#numero');
    let n = parseInt(input.value);
    // alert (n);
    let exibirArray = document.querySelector ('#exibir-array');

    // se N for não Númerico, mostrará um alert e encerrara a função 
    if (isNaN(n)) {
        alert('Digite um número válido!');
        return;
    }

    array.push(n);

    // Limpar o campo de entrada
    input.value = '';

    console.log(array);
    exibirArray.innerHTML = `Array: ${array} Tamanho do array ${array.length}`;
    
}