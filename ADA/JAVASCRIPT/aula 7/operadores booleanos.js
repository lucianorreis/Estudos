//* Operadores Booleanos: Comparações

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2)
console.log(numero1 === numero2)
console.log(numero1 == '10');

console.log(numero1 >= numero2);

//* CONJUNÇÕES LÓGICAS

const idadePessoa1 = 16
const idadePessoa2 = 39

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18)  //&& = E
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18) //|| = OU

console.log(!true);

console.log(!(idadePessoa1 >= 18)); //? Retorna Verdadeiro se a pessoa for menor de idade