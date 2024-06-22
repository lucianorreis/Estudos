const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual é a sua idade? '));

//*|-----------------------------------------------------
//*| Estrutura Condicional: if/else

if (idade >= 18) {
    // Faça alguma coisa . . .
    console.log('Você é maior de idade!')
} else {
    console.log('Você é menor de idade!')
}

//*|-----------------------------------------------------

const mediaAluno = 10;

if (mediaAluno >= 7) {
    console.log('Aprovado')
} else if (mediaAluno >= 5) {
    console.log('Prova Final');
} else {
    console.log('Reprovado')
}

//*|----------------------------------------------------

const idadepessoa = 18;
const cnh = true;

if (idadepessoa >= 18 && cnh) {
    console.log('Pode dirigir!')
} else {
    console.log('Você NÃO pode dirigir!')
}