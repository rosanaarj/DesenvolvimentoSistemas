/** 10ª Implemente uma função que receba outra função como parâmetro (callback) e a execute. */

function executCallback(callback) {
    callback();
}

executCallback(function() {
    console.log('callback executado com sucesso!');
    
})