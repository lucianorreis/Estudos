const pessoa = {
    nome: 'Luciano',
    idade: 20,
    altura: 1.76,
}

//?| Desestruturação ou spread (operator)
const pessoaComPeso = {
    ...pessoa,
    peso: 79
}

console.log(pessoaComPeso)