const prompt = require("readline-sync");
let i;

//?| expressão 1: inicialização de variável de controle
//?| expressão 2: condição de permanência do for
//?| expressão 3: o incremento da variável de controle

//?| for (expressão1; expressão 2; expressão 3) {
//?|    o escopo do for
//?| }

for (i = 0; i < 5; i++) {
  console.log(i);
}
// Limpando o console
console.clear();

//*| Exemplo - lembra maior numero
/*
?| let maiorNum = 0;
?|
?|  let numeroInfor;
?|
?|  for (let i = 1; i <= 5; i++) {
?|  numeroInfor = Number(prompt.question("Informe um número positivo: "));
?|    if (numeroInfor > maiorNum) {
?|        maiorNum = numeroInfor;
?|    }
?|}
?| console.log("Maior numero:", maiorNum)
*/

//*| Exemplo: percorrendo strings com o for

/*
const nome = "Walisson";

//console.log(nome[0])

for (let i = 0; i < nome.length; i++){
    console.log(nome[i])

    if (i === 4) break;
}
*/