let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(numerosPares);
