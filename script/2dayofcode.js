//Segundo desafio do 7DaysOfCode - Variáveis

//Captura de Variáveis

alert ("Sejam bem vindos a minha primeira utilização de JavaScript em uma página web, em seguida irei fazer algumas perguntas para testar o que aprendi.");

let nome = prompt ("Qual é o seu nome?");
let idade = prompt ("Quantos anos você tem?");
let linguagem = prompt ("Qual linguagem de programação você está estudando?");

//Retorno

alert ("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!")

//Captura de Variáveis

let pergunta = prompt ("Você gosta de estudar " + linguagem +"?" + " Responda 1 para SIM ou 2 para NÃO");

//Condição

if (pergunta == 1) {
    var resposta = "Muito bom! Continue estudando e você terá muito sucesso."
} else if (pergunta == 2) {
    var resposta = "Ahh que pena... Mas não desista, tente aprender outras linguagens."
}

//Resposta

alert (resposta)

alert ("Obrigado por responder a todas as perguntas! para esse desafio é somente isso, até a próxima!")