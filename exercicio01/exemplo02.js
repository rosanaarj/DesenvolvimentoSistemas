function classificarIdade(idade) {
    if (idade >= 0 && idade <= 3) {
        return "bebê";
    }else if (idade >= 4 && idade <= 11) {
        return "criança";
    }else if (idade >= 12 && idade <= 13) {
        return "pré-adolescente";
    }else if (idade >= 14 && idade <= 17) {
        return "adolescente";
    }else if (idade >= 18 && idade <= 64) {
        return "adulto";
    }else if (idade >64) {
        return "idoso";
    }else {
        return "idade inválida!";
    }
}