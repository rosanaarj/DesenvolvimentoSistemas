const salario = 3600;
let aliquota;

if (salario <= 1000) {
    aliquota = 7;
}else if (salario <= 2500) {
    aliquota = 14;
}else if (salario <= 3500) {
    aliquota = 21;
}else if (salario <= 9000) {
    aliquota = 27.5;
}else {
    aliquota = 32;
}