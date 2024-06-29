//?| Filter
//?| map sempre retorna um array de mesmo tamanho do array original
//?| filter: sempre retorna um array de tamanho igual ou inferior ao tamanho do array original

const valores = [39,45,32,24,4,22,2,49,23, 8]

const pares = valores.filter((valor) => valor % 2 === 0)

console.log(pares)