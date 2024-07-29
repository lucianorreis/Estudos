/*
* Filter - Cria um novo array com todos os elementos que passam  um teste implementado pela função fornecida com um parâmetro. Essencialmente, ele filttra os elementos de um array com base em algum critério e retorna um novo array com os elementos que atendem a esse critério.
*/

/*
? A função que você passa para o método filter() é chamada de função de callback. Essa função deve retornar true para incluir o elemento no novo array e false para excluí-lo.
*/

let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(numerosPares);
