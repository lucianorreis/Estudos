let num = [5, 8, 2, 9, 3];
num.sort();
num.push(1);
console.log(`Nosso vetor é o ${num}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[1]}`);

let pos = num.indexOf(8)
console.log(`O valor está na posição ${pos}`)

/*
    let num = [5,8,4]
    num[3] = 6 - cria uma nova caixa no array e adiciona o elemento(6)
    .push() - adiciona mais um elemento na ultima vaga da caixa
    .length - atributo que conta quantos elementos tem no Array(num)
    .sort() - coloca o vetor em ordem
    .indexOF()   
*/
