const prompt = require("readline-sync");

let lista1 = [];
let lista2 = [];

function verificador() {
    encheLista(prompt.question('Digite uma série de números: '))
    if (lista1.every() === lista2.every()) {
        console.log("Ambas as listas são iguais")
    } else {
        console.log("Ambas as listas são diferentes")
    }
}
function encheLista(mensagem) {
  do {
    lista1.push((mensagem));
  } while (isNaN === lista1 && lista1.length <= 5);
}


verificador()