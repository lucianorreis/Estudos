console.log("Antes da criação da promisse")

const promessa = new Promise((resolve, reject) => {
    fs.readFile("ADA/JAVASCRIPT/aula-13/dados.txt", (erro, conteudoDoArquivo) => {
        if (erro) {
         reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
         resolve(String(conteudoDoArquivo));
        }
     })
});

console.log(promessa)