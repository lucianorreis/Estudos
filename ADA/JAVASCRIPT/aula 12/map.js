// ?| Map
//?| Ele cria um novo Array que possui o *mesmo tamanho do array original*
//?| Composto pelos elementos que foram retornados a cada operação

const numeros = [40, 34, 67, 89, 23,16, 10]

const novoArray = numeros.map((elemento, index, arrayCompleto) => {
    return elemento * 2;
})

console.log(novoArray)

//*| Exemplo 1: Elevando numeros ao quadrado

const valores = [40, 34, 67, 89, 23,16, 10]

const valoresAoQuadrado = valores.map((valor) => valor ** 2);

console.log(valoresAoQuadrado)
console.clear()

const carrinho = [
    {produto: "feijão", preco: 7.89, quantidade: 3 },
    {produto: "Arroz", preco: 4.98, quantidade: 5 },
    {produto: "Leite 1L", preco: 6.99, quantidade: 2},
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
    return {
        ...itemDoCarrinho,
        total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
    };
});

console.log(carrinhoComTotal)

//const pessoa = {
//nome: 'Luciano',
//    idade: 20,
//    altura: 1.76,
//}
//
////?| Desestruturação ou spread (operator)
//const pessoaComPeso = {
//    ...pessoa,
//    peso: 79
//}
//
//console.log(pessoaComPeso)