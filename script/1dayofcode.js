//Primeiro desafio do 7DaysOfCode - Operações Booleanas

//Explicação do Desafio
function mostraDesafioAlert() {

    alert("Reescreva o código a seguir de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:");

    alert("let numeroUm = 1, let stringUm = '1'");
    alert("let numeroTrinta = 30, let stringTrinta = '30'");
    alert("let numeroDez = 10, let stringDez = '10'");

    alert("Comparar o valor e tipo das variáveis declaradas e imprimir o resultado usando console.log.");

    alert("Aproveitei para melhorar o código implementando funções e imprimir tanto no console (aperte F12 e verifique) como em um HTML usando um botão com alert, caso queira analisar o código clique no botão GitHub.");

}

//Variáveis
let numeroUm = 1;
let stringUm = "1";

let numeroTrinta = 30;
let stringTrinta = "30";

let numeroDez = 10;
let stringDez = "10";

let numeroCinco = 5;
let numeroSeis = 6;

let stringSete = "7";
let stringOito = "8";

//Comparando os Valores
function comparaValorVariaveis(primeiraVariavel, segundaVariavel) {

    if (primeiraVariavel == segundaVariavel) {
        valor = "As variáveis declaradas " + primeiraVariavel + " e " + segundaVariavel + " tem o mesmo valor"
    } else {
        valor = "As variáveis declaradas " + primeiraVariavel + " e " + segundaVariavel + " não tem o mesmo valor"
    }
    return valor
}

//Comparando os Tipos
function comparaTipoVariaveis(primeiraVariavel, segundaVariavel) {

    if (typeof (primeiraVariavel) === typeof (segundaVariavel)) {
        tipo = " e possui o mesmo tipo."
    } else {
        tipo = " e possuem tipos diferentes."
    }
    return tipo
}

//Mostrando resultado no Console
function mostraComparacaoConsole(valor, tipo) {

    console.log(valor + tipo)

}

//Mostrando resultado no HTML
function mostraComparacaoAlert() {

    alert(comparaValorVariaveis(numeroUm, stringUm) + comparaTipoVariaveis(numeroUm, stringUm));
    alert(comparaValorVariaveis(numeroTrinta, stringTrinta) + comparaTipoVariaveis(numeroTrinta, stringTrinta));
    alert(comparaValorVariaveis(numeroDez, stringDez) + comparaTipoVariaveis(numeroDez, stringDez));

}

//Resolução do Desafio 1 impressa usando console.log
mostraComparacaoConsole(comparaValorVariaveis(numeroUm, stringUm), comparaTipoVariaveis(numeroUm, stringUm));

mostraComparacaoConsole(comparaValorVariaveis(numeroTrinta, stringTrinta), comparaTipoVariaveis(numeroTrinta, stringTrinta));

mostraComparacaoConsole(comparaValorVariaveis(numeroDez, stringDez), comparaTipoVariaveis(numeroDez, stringDez));

console.log("Caso queira analisar o código utilizado, clique no botão GitHub na página Desafio 1.");
