//*| Definição da Função

function saudacao(nomeDoEstudante, curso = "Front-end em React") {
  // template string || template literals
  return `Olá,${nomeDoEstudante}, Bem vindo ao curso de ${curso}`;
}

const mendagemDaSaudacao = saudacao("luciano", "Back-end em NodeJs"); //*| chamada da função

console.log(mendagemDaSaudacao);

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);

console.clear();
// ------------------------------
// Funções anônimas

const dobroDoNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroDoNumero(2);

console.log(dobro);
console.clear();

// Arrow Functions: Funções Seta

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploDoNumero = (numero) => numero * 3;

console.clear();

// Object Literal

const array = ["Walisson", 27, (1.77), true];

const pessoa = {
  nome: "Walisson",
  idade: 27,
  altura: 1.77,
  ehProgramador: true,
  hobbies: ['Fifa', 'Academia', 'Ler'],
  imprimirAlgo: () => { 
    console.log('Opa!'); }
};

console.log(pessoa);
console.clear();
console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa['idade']);
pessoa.imprimirAlgo()