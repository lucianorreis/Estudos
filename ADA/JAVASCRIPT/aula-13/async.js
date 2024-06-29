const fs = require('fs');

//*| 1. Callbacks
/*
// Função assíncrona (ler um arquivo leva tempo)
fs.readFile("ADA/JAVASCRIPT/aula-13/dados.txt", (erro, conteudoDoArquivo) => {
   if (erro) {
    console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
   } else {
    console.log(String(conteudoDoArquivo))
   }
})
*/

//?| Exemplo 2: setTimeout (função que cria um timer)
/*
console.log('Antes do SetTimeout')

setTimeout(() => {
    console.log("Isso aqui vai ser executado apos 3 segundos!")
}, 3 * 1000)
*/

//?| Promises