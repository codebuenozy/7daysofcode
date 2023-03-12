//Primeiro desafio do 7DaysOfCode - Operações Booleanas

function desafioUm() {

    //Variáveis

    let numeroUm = 1;
    let stringUm = '1';

    //Comparação

    if (numeroUm == stringUm) {
        alert('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
    } else {
        alert('Ás variáveis numeroUm e stringUm não tem o mesmo valor')
    };

    //Variáveis

    let numeroTrinta = 30;
    let stringTrinta = '30';

    //Comparação

    if (numeroTrinta === stringTrinta) {
        alert('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
    } else {
        alert('Ás variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
    };

    //Variáveis

    let numeroDez = 10;
    let stringDez = '10';

    //Comparação

    if (numeroDez == stringDez) {
        alert('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
    } else {
        alert('Ás variáveis numeroDez e stringDez não tem o mesmo valor');
    };

    alert('Caso queira ver o código, clique no botão GitHub');
    
};

function vejaDesafioUm() {
    alert('Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:');

    alert("let numeroUm = 1, let stringUm = '1', let numeroTrinta = 30, let stringTrinta = '30', let numeroDez = 10, let stringDez = '10'");
};