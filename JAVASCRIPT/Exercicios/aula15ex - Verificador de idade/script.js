

msg.innerHTML(`O ano é ${ano}`)

function calcidade() {
    var data = new Date
    var ano = data.getFullYear
    var fano = document.getElementById('nasc')
    var res = document.querySelector('div#res')

    if (fano.ariaValueMax.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    }

}