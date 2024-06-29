const fs = require('fs');

//*| 1. Callbacks

// Função assíncrona (ler um arquivo leva tempo)
fs.readFile("aula-13/dados.txt", (erro, conteudoDoArquivo) => {
   if (erro) {
    console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
   } else {
    console.log(conteudoDoArquivo)
   }
})