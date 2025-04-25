let nota = 0;
let nota2 = 0;
let nota3 = 9;
let nota4 = 5;

let media = (nota + nota2 + nota3 + nota4) / 4;
if (media >= 6) {
    console.log('aprovado com media: ' + media);
}
else if (media < 4) {
    console.log('reprovado com media: ' + media);
}
else {
    console.log('em recuperação, média:', media);

}


