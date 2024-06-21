function contagem() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro, faltam dados!')
    } else {
        res.innerHTML = 'Contando... '
        let i = Number(inicio.value) //pega o valor(.value) dentro de inicio e converte para numero(Number)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            //Contagem Crescente
            for(let c = i;c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        } else {
            //Contagem Decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` 
        
    }
}