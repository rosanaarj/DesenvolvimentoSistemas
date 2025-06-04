/**30. Para calcular a média ponderada de um estudante, solicite a quantidade de notas que o estudante
tem para ser calculada. Após a solicitação de cada nota, deve-se solicitar o peso da nota e, só
assim, calcular a média ponderada do estudante. Ademais, exiba - em tela - se o estudante está
apto (média maior ou igual a 60), em recuperação (média inferior a 60 ou maior ou igual a 40)
ou se está reprovado (média inferior a 40). */

const notas = [70, 50, 30];     
const pesos = [2, 3, 1];         

if (notas.length !== pesos.length || notas.length === 0) {
  console.log("Erro: as notas e pesos devem ter o mesmo tamanho e não podem ser vazios.");
} else {
  let somaPonderada = 0;
  let somaPesos = 0;

  for (let i = 0; i < notas.length; i++) {
    somaPonderada += notas[i] * pesos[i];
    somaPesos += pesos[i];
  }

  let media = somaPonderada / somaPesos;

  let status;
  if (media >= 60) status = "Apto";
  else if (media >= 40) status = "Recuperação";
  else status = "Reprovado";

  console.log(`Média ponderada: ${media.toFixed(2)}`);
  console.log(`Status: ${status}`);
}