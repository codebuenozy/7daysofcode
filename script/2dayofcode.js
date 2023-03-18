//Segundo desafio do 7DaysOfCode - Variáveis

//Explicação do Desafio
function mostraDesafioAlert() {
   
   alert("Seu código deve pedir para o usuário responder 3 perguntas:"); 
   
   alert("- Qual o seu nome? \n- Quantos anos você tem? \n- Qual linguagem de programação você está estudando?");

   alert("À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas. \nNo final, o sistema vai exibir a mensagem:");
   alert("'Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!' \n\n***Note que cada informação entre [ ] é uma das respostas dada pela pessoa***");

   alert ("Se você quiser se aprofundar no assunto de hoje, Você pode complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:");
   alert("Você gosta de estudar [linguagem]? \n\nResponda com o número 1 para SIM ou 2 para NÃO.");
   alert("E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens: \n\n1 > Muito bom! Continue estudando e você terá muito sucesso. \n2 > Ahh que pena... Já tentou aprender outras linguagens?"); 

   alert("Finalmente os alerts terminaram kkkkkk e caso queira analisar o código clique no botão GitHub.")
}

//Capturando Variáveis
function capturaVariaveis() {

alert("Sejam bem vindos a minha resolução do desafio de JavaScript do 7DaysOfCode, irei fazer algumas perguntas para testar o que aprendi ok?");

let nome;
let idade;
let linguagem;
let pergunta;
let resposta;

//Nome
do {
nome = prompt("Qual é o seu nome?", ["Nome"]);
if (nome !== null && nome.trim() !== "") { // se a entrada não estiver vazia
   nome = nome.replace(/[^\w\s]/gi, ""); // remove caracteres especiais
 } else {
   nome = null; // define nome como null para continuar o loop
 }
} while (typeof nome !== "string");

//Idade
do {
idade = parseInt(prompt("Quantos anos você tem?", ["Idade"]));
} while (isNaN(idade));

//Linguagem
do {
linguagem = prompt("Qual linguagem de programação você está estudando?", ["Linguagem de Programação"]);
if (linguagem !== null && linguagem.trim() !== "") { // se a entrada não estiver vazia
   linguagem = linguagem.replace(/[^\w\s]/gi, ""); // remove caracteres especiais
 } else {
   linguagem = null; // define nome como null para continuar o loop
 }
} while (typeof linguagem !== "string");

//Retorno
alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

//Captura de Variáveis
do {
pergunta = parseInt(prompt("Você gosta de estudar " + linguagem +"?" + "\nResponda 1 para SIM ou 2 para NÃO", [1]));
} while (isNaN(pergunta));

//Condição
resposta;
if (pergunta === 1) {
   resposta = "Muito bom! Continue estudando e você terá muito sucesso."
} else if (pergunta === 2) {
   resposta = "Ahh que pena... Mas não desista, tente aprender outras linguagens."
} else {
   resposta = "Resposta inválida. Tente novamente!!!"
}

//Resposta
alert(resposta);

alert("Obrigado por responder a todas as perguntas! \n\nPara esse desafio é somente isso, até a próxima!");

}