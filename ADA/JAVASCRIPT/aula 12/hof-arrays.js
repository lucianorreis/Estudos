//?| Array.prototype.every(): Verificar se todos os elementos de um array seguem uma determinada condição retornada pela função

const numeros = [40, 16, 34, 67, 89, 23, 10]

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

const todosPositivos = numeros.every((elemento) => elemento > 0)

console.log(todosPositivos)

const MaiorIdade = pessoas.every((pessoa) => pessoa.idade > 18)

console.log(MaiorIdade)

//?| Array.prototype.Some(): Verificar se algum elemento do Array torna verdadeira uma determinada condição retornada pela função

const numeros2 = [-1, 3,7,-3, 5]

const retorno = numeros2.some((numero) => numero > 0)

console.log(retorno)