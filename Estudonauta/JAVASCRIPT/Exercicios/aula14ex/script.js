function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagen/Dia.png'
        document.body.style.backgroundColor = '#e2cd9f'
        //BOM DIA!
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/Tarde.png'
        document.body.style.backgroundColor = '#b9846f'
        //BOA TARDE!
    } else {
        img.src = 'imagens/Noite.png'
        document.body.style.backgroundColor = '#515151'
        //BOA NOITE!
    }
}


