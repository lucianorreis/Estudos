//* Questão 1
let listaNumeros = [1,2,3,4,5,6]

function listagem() {
let numerosPares = listaNumeros.filter(function(numero){
    return numero % 2 === 0 
})
console.log(numerosPares);
}

listagem();