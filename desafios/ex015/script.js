function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || window.Number(fano.value) > ano) {
        window.alert('[ERRO]  Verifique o ano e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - window.Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = '50%'
        img.style.marginTop = '20px'
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/menino-4.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/homem-19.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-65.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
             if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/menina-4.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/mulher-19.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa-65.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}