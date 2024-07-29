function verificaNumeros() {
    let numeros = [1, 2, 3, 4, 5];
 let quadrados = numeros.map(function(numero) {
    return numero * numero;
 });

 console.log(quadrados); 
}

verificaNumeros();