const prompt = require('readline-sync')

const saldo = Number(prompt.question("Qual é o seu saldo? "));

while (saldo < 0) {
    saldo = Number(
        prompt.question('Saldo inválido! Por favor, informe novamente: ')
    );
}

console.log(saldo);

//?| Exemplo 2

let notaAluno = Number(prompt.question('Informe a nota do aluno: '))

let somaDasNotas = 0; //?| Acumulador
let qtdnotas = 0; //?| Acumulador (quantidade de notas validas)

while (notaAluno >= 0) {
    somaDasNotas = somaDasNotas+ notaAluno //*| Incrementando o acumulador (somaDasNotas)
    qtdnotas = qtdnotas + 1;

    notaAluno= Number(prompt.question('Informe a próxima nota: '));
}

console.log(somaDasNotas);
console.log(qtdnotas);

console.log(`Média das notas dos alunos = ${(somaDasNotas / qtdnotas)}`)