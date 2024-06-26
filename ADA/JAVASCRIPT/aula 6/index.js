/* 
todo  Utilize sempre o Camel case no JavaScript
todo-----------------------------------------------------------
*     JavaScript possui tipagem dinâmica: infere os tipos de dados
*     JavaScript possui uma tipagem fraca, facilmente mistura textos com números      
*/

var nome = "Luciano Reis"; //? string (texto): utilize sempre aspas
var idade = 27; //? number
var altura = 1.77; //? number
var estudando = false; //? boolean (booleano: verdadeiro ou falso)

console.log(nome);
console.log(nome, typeof nome);
console.log(idade);
console.log(idade, typeof idade);
console.log(altura);
console.log(altura, typeof altura);
console.log(estudando);
console.log(estudando, typeof estudando);

//* declarando uma variável
var semConteudo; 

console.log(semConteudo);

var curso = "Front-end em React",
    topico = "JavaScript Básico I";

    console.log(curso, topico)

//! Não utilize o var nos seus códigos JavaScript!!!
    //! var possui um escopo global
    
let notaDoAluno = 10; //*let it change = mude durante o correr do código
const mediaDoAluno = 8;

notaDoAluno = 9;

console.log(notaDoAluno);
console.log(mediaDoAluno)