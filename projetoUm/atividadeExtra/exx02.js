//  Um campeonato de e-sports recebeu a lista de times participantes com alguns nomes repetidos e em ordem aleatória. É necessário criar um novo array contendo apenas nomes únicos e ordenados por quantidade de caracteres (do menor para o maior). Caso haja nomes com o mesmo tamanho, ordenar alfabeticamente.

let times = [
  "Lion-O",
  "Tygra",
  "Cheetara",
  "Panthro",
  "WilyKit",
  "WilyKat",
  "Snarf",
  "Mumm-Ra"
];

let timesUnicos = [...new Set(times)];

timesUnicos.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);  // Ordem alfabética
  }
  return a.length - b.length;   // Ordem por tamanho
});

console.log(timesUnicos);
