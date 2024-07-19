// High order functions

//* 1. Função que retorna outra função como parâmetro

         function welcome(courseName) {
            return (studentName) => {
                console.log(
                    `Olá, ${studentName}! Seja Bem-vindo(a) ao curso de ${courseName}`
                );
            };
         }   

const displayWelcomeToFrontEndCourse = welcome("Front-end em React");

displayWelcomeToFrontEndCourse("Walisson Silva")
console.clear()

//* 2. Função que retorna outra função como parâmetro   