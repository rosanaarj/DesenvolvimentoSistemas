let carros = [];

// adicionando elementos no array
carros.push('corolla');
carros.push('sw4');
carros.push('onix');
carros.push('fusca');

// alterando elementos do array
carros[2] = "Amarok";

// removendo o último elemento
carros.pop();

// adicionando mais elementos no array
carros.push('l200');
carros.push('a3');
carros.push('uno');

// percorrendo o array
for(let i = 0; i <= carros.length; i++){
    console.log("Indíce: " + (i+1));
    console.log("Valor: " + carros[i]);
    console.log();
    
}
console.log(carros);
