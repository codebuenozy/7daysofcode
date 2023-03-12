//Segundo desafio do 7DaysOfCode - Variáveis

function desafioDois() {

//Captura de Variáveis

alert ("Sejam bem vindos a minha primeira utilização de JavaScript em uma página web, em seguida irei fazer algumas perguntas para testar o que aprendi.");

let nome = prompt ("Qual é o seu nome?");
let idade = prompt ("Quantos anos você tem?");
let linguagem = prompt ("Qual linguagem de programação você está estudando?");

//Retorno

alert ("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

//Captura de Variáveis

let pergunta = prompt ("Você gosta de estudar " + linguagem +"?" + " Responda 1 para SIM ou 2 para NÃO");

//Condição

let resposta;
if (pergunta == 1) {
   resposta = "Muito bom! Continue estudando e você terá muito sucesso."
} else {
   resposta = "Ahh que pena... Mas não desista, tente aprender outras linguagens."
};

//Resposta

alert (resposta);

alert ("Obrigado por responder a todas as perguntas! para esse desafio é somente isso, até a próxima!");

alert('Caso queira ver o código, clique no botão GitHub');

};

function vejaDesafioDois( ) {
   alert ("Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas: - Qual o seu nome?, - Quantos anos você tem?, - Qual linguagem de programação você está estudando? À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas. No final, o sistema vai exibir a mensagem: 'Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!' Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.");

   alert ("Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você. Mas ele é 100% opcional. Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte: Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO., E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens: 1 > Muito bom! Continue estudando e você terá muito sucesso., 2 > Ahh que pena... Já tentou aprender outras linguagens?");
};