const prompt = require("readline-sync");
let i;

//?| expressão 1: inicialização de variável de controle
//?| expressão 2: condição de permanência do for
//?| expressão 3: o incremento da variável de controle

//?| for (expressão1; expressão 2; expressão 3) {
//?|    o escopo do for
//?| }

for (i = 0; i < 5; i++) {
  console.log(i);
}
// Limpando o console
console.clear();

//*| Exemplo - lembra maior numero
/*
?| let maiorNum = 0;
?|
?|  let numeroInfor;
?|
?|  for (let i = 1; i <= 5; i++) {
?|  numeroInfor = Number(prompt.question("Informe um número positivo: "));
?|    if (numeroInfor > maiorNum) {
?|        maiorNum = numeroInfor;
?|    }
?|}
?| console.log("Maior numero:", maiorNum)
*/

//*| Exemplo: percorrendo strings com o for

/*
const nome = "Walisson";

//console.log(nome[0])

for (let i = 0; i < nome.length; i++){
    console.log(nome[i])

    if (i === 4) break;
}
*/

// *| Arrays

//?| Estrutura de dados que armazena mais de um dado.

//*| const array = []

const nota1 = 10;
const nota2 = 8;
const nota3 = 5;

const notasDoAluno = [10, 8, 5];
const pessoa = ["Walisson", 27, 1.77, true];

console.log(notasDoAluno);
console.log(pessoa);

console.log(pessoa[0]);

pessoa[3] = false;

console.log(pessoa);

console.clear();

console.log(pessoa.length);

console.clear();

//*| Fatiamente de arrays

const numeros = [40, 34, 67, 89, 23, 10];

console.log(numeros.slice(0, 2));
console.log(numeros.slice(2));

console.clear();

//?| Adiciona elementos no final do array
numeros.push(0);

console.log(numeros);

//?| adiciona elementos no início do array

console.clear();
numeros.unshift(-1);
console.log(numeros);

//?| pop: remove elementos no final do array
console.clear();
numeros.pop(); // Remove o elemento 0 (do final)
console.log(numeros);

//?| shift:remover o primerio elemento do array
numeros.shift();

//?| Será que o elemento 20 existe no array numeros?

console.clear()
console.log(numeros.includes(20));
console.log(numeros.includes(10));

if (numeros.includes(20)) {
    console.log('opa! Existe o número 20 dentro do array numeros')
} else {
    console.log("Não existe o numero 20 no array numeros")
}

const existeNum20 = numeros.includes(20)

console.clear()

//*| indexOf

const indiceDoElemento20 = numeros.indexOf(20)

//*| lastIndexOf()

 //*| percorendo array com for
console.clear()
 const arr = [45, 36, 90, 76, 32, 7]

 for (let i = 0; i < arr.length; i++){
    console.log(i, arr[i])
 }
 console.clear()
//*| for of - Percorre os elementos do Array

 for (const elemento of arr) {
    console.log(elemento)
 }
 console.clear()
 //*| for in - Percorre os indices do Array

 for (const indice in arr) {
    console.log(indice, typeof indice)
    console.log(arr[0])
 }