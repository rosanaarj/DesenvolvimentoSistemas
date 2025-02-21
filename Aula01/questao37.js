let fatiaQueijo = 50;
let fatiaPresunto = 50;
let hamburguer = 100;

let sanduichesAFazer = 5;


let quiloQueijo = (sanduichesAFazer * fatiaQueijo * 2) / 1000;

let quiloPresunto = (sanduichesAFazer * fatiaPresunto) / 1000;

let quiloHamburguer = (sanduichesAFazer * hamburguer) / 1000;

console.log("\t*** LANCHONETE ***");
console.log("Para " + sanduichesAFazer + " sanduíches é necessário: ");
console.log("- " + quiloQueijo + "kg de queijo: ");
console.log("- " + quiloPresunto + "kg de presunto: ");
console.log("- " + quiloHamburguer + "kg de hamburguer: ");
