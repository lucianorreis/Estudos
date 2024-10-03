const fs = require("fs");

//*| 1. Callbacks
/*
  Função assíncrona (ler um arquivo leva tempo)
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

//*| 2. Promises - pending, Fullfilled e Rejected

console.log("Antes da criação da promisse");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("aula-13/dados.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}

// Foco a partir daqui...
/*
lerArquivoPromise ()
  .then((retornoDoResolveDaPromessa) => {
    console.log("Deu certo:", retornoDoResolveDaPromessa);
  })
  .catch((erro) => {
    console.log("Deu ruim:", erro);
  })
  .finally(() => {
    console.log(
      "Isto será executado independente do sucesso ou fracasso da promessa"
    );
  });
*/

//*| 3. async/await

async function leituraDeDados() {
  console.log("Isso é executado antes da promisse ser resolvida");

  try {
    const retornoDaPromessa = await lerArquivoPromise(); //*| Espera a promessa ser resolvida para avançar no código

    console.log(retornoDaPromessa);
    console.log("Isso é executado depois da promisse ser resolvida");
  } catch (err) {
    console.log(err);
    console.log("Isso aqui é executado depois da promisse (com erro");
  } finally {
    console.log("Dentro do finally!");
  }
}

leituraDeDados();
