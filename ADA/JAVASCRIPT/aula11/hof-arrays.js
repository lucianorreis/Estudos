//*| FUNÇOES DE ALTA ORDEM DE ARRAYS

//?| 1. Array.forEach()

const numeros = [40, 16, 34, 67, 89, 23, 10]

numeros.forEach((elemento, index, arrayCompleto) => {
    console.log(index, elemento, arrayCompleto);
});
console.clear()
//?| 2. Array.prototype.find(): útil para encontrar um elemento dentro do array 

const encontrado = numeros.find((numero) => {
    return numero < 20 && numero > 10;
});

console.log(encontrado)

const pessoas = [
{
    nome: 'Pessoa',
    idade: 34,
    altura: 1.77,
},
{
    nome: 'Pessoa 2',
    idade: 25,
    altura: 1.56,
},
{
    nome: 'Pessoa 3',
    idade: 46,
    altura: 1.82,
},
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 20 && pessoa.altura < 1.90);
console.clear()

console.log(pessoaEncontrada);

//?| 3. Array.prototype.findIndex(): muito parecido com o find(),
//?|                                 porém retorna o índice do elemento encontrado

const indiceDaPessoaEncontrada = pessoas.findIndex(
    (pessoa) => pessoa.idade > 50 && pessoa.altura < 1.7
);

console.clear()

console.log(indiceDaPessoaEncontrada)