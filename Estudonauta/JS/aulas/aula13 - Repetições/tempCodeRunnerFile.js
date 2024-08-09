const prompt = require("readline-sync");

let num1 = Number(prompt.question("Digite o primeiro numero: "));
let num2 = Number(prompt.question("Digite o segundo numero: "));

function soma() {
  let res = (num1 + num2)/2.0;
  console.log(`O resultado é ${res}`)
}

soma();