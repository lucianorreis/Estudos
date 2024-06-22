const prompt = require("readline-sync");

const idade = prompt.question("Qual é a sua idade? ");

const idadenumber = Number(idade);

console.log(idadenumber, typeof idadenumber);

//todo Coersão Explícita ou Conversão Manual

console.log(Number("x")); //? NaN: Not a Number

console.log(String(10), typeof String(10));

console.log(Boolean(-1));

//todo Coersão Implícita

console.log(1 + "1"); //? 11
console.log(10 - "5");//? 5
console.log(10 + "5");//? 105
console.log(10 * "5");//? 50
console.log(10 / "5");//?  2

//!-------------------------------------------------|

// Qual será  saída desse código?
let n = 1 + '1' //'11' (String)

n = n - 1 // 11 - 1 = 10

console.log(n);

//Qual será a saída desse código?
console.log(2 + 3 + 4 + '5'); //? 5 + 4 + '5' = '95'
 
//Qual será a saída desse código?
console.log('5' + 2 + 3 + 4); //? '52' + 3 + 4 = '523' + 4 = '5234'

//Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5'); //? 6 - '3' - 2 + '5' = 3 - 2 + '5' = 1 + '5' = '15'

//!------------------------------------------------| 