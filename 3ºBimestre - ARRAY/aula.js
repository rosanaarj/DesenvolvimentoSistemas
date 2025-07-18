let alunos = [];

// inserindo elementos no último índice
alunos.push('Ruan');
alunos.push('João Henrique');
alunos.push('Cibelly');
console.log(alunos);

// removendo elementos no último índice
alunos.pop();
console.log(alunos);

// inserindo elementos no primeiro índice
alunos.unshift('Dandara');
alunos.unshift('Helena');
console.log(alunos);

// removendo elementos no primeiro índice
alunos.shift();
console.log();

// tamanho do array
console.log('Tamanho do array: ' + alunos.length);

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);

// livre
alunos.push('Klara');
alunos.unshift('Felipin');

console.log('antes: ' + alunos);

console.log(alunos.reverse());





