/**1) Raimundos é um programador com excelentes habilidades no JavaScript e deseja elaborar um contador
decrescente para o réveillon de sua cidade. Para isso ele precisa construir a função anoNovo() que recebe
como parâmetro o(s) minuto(s) aos quais restam para virar o ano. Lembre-se será exibido em tela a
contagem regressiva dos minutos informados em segundos e quando atingir 5 segundos o programa
exibirá a seguinte mensagem: “Feliz Ano Novo!”. */

function anoNovo(minutos) {
    let segundos = minutos * 60;
    for (let i = segundos; i >= 0; i--) {
        console.log(i);
        if (i == 5) {
            console.log("Feliz Ano Novo!");
        }   
    }
}

anoNovo(1);

