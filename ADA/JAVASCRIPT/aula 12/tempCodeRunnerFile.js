let numeros = [200, 500, 203, 2, 1, 480, 9080];

function soPar() {
  let apenasPares = numeros.every(function (numero) {
    return numero % 2 === 0;
  });
  console.log(apenasPares);
}

soPar();