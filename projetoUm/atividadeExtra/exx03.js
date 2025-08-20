//  Um supermercado armazenou as vendas de cada dia da semana em um array bidimensional (cada subarray representa um dia e contém os valores das vendas daquele dia). Você deve calcular: a) A soma total de vendas da semana. b) O dia que teve maior faturamento. c) Um novo array contendo apenas os dias que superaram a média semanal de vendas.
let vendasSemana = [
  [100, 200, 150],  // domingo
  [80, 90, 100],    // segunda
  [120, 130, 110],  // terça
  [200, 220, 210],  // quarta
  [150, 160, 170],  // quinta
  [300, 310, 320],  // sexta
  [90, 95, 85]      // sábado
];
// a) Soma total de vendas da semana
let somaTotal = 0;
let vendasPorDia = vendasSemana.map(dia => {
  let somaDia = dia.reduce((acc, val) => acc + val, 0);
  somaTotal += somaDia;
  return somaDia;
});

console.log("Soma total da semana:", somaTotal);

let maiorFaturamento = Math.max(...vendasPorDia);
let indiceMaiorDia = vendasPorDia.indexOf(maiorFaturamento);

let nomesDias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

console.log("Dia com maior faturamento:", nomesDias[indiceMaiorDia], "-", maiorFaturamento);

let mediaSemanal = somaTotal / vendasPorDia.length;

let diasAcimaMedia = nomesDias.filter((dia, idx) => vendasPorDia[idx] > mediaSemanal);

console.log("Dias com vendas acima da média:", diasAcimaMedia);
