const fs = require('fs')

//*| 1. Callbacks

// Função assíncrona (ler um arquivo leva tempo)
fs.readFile('aula-13/arquivo.txt', (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log('[ERRO]')
    } else {
        console.log(conteudoDoArquivo)
    }
})