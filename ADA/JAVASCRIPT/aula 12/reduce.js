//?| Reduce: Método que executa (para cada elemento o array) a função que foi pasada como parâmetro, resultando em um elemento único.
const numeros = [1, 2, 3, 4, 5]

const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
    console.log(acumulador)
    return (elemento / arrayCompleto.length) + acumulador;
}, 0);

console.log(media);

const somaDosPares = numeros.reduce((acumulador, numero) => {
    if (numero % 2 === 0) {
        return numero + acumulador;
    } else {
        return acumulador;
    }
}, 0)

console.clear()
console.log(somaDosPares)