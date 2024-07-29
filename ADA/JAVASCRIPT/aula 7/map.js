//* Filter - Pode criar um novo array com os resultados da chamada de uma função para cada elemento do array.

/*
 ? Como parâmetro é passado para o método uma função de callback. Essa função é chamada uma vez para cada elemento do array, em ordem, e o valor retornado pela função é adicionado ao novo array.
 */

function verificaNumeros() {
    let numeros = [1, 2, 3, 4, 5];
 let quadrados = numeros.map(function(numero) {
    return numero * numero;
 });

 console.log(quadrados); 
}

verificaNumeros();
