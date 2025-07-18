let alunos = ['Felipe', 'Gabriel', 'Klara', 'Lívia'];

alunos = alunos.sort();

for(let i = 0; i < alunos.length; i++){
    console.log('* ' + alunos[i].toUpperCase());
}

if(alunos.indexOf('Klara') != -1) {
    console.log('achei você!');
}
else {
    console.log('não achei você!');
}

console.log(alunos.includes('Gabriel'));


