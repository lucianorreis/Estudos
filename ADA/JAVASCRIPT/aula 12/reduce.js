//?| Reduce: Método que executa (para cada elemento o array) a função que foi pasada como parâmetro, resultando em um elemento único.
const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce((acumulador, elemento) => {
    console.log(acumulador)
    return elemento + acumulador;
}, 0);

console.log(soma);