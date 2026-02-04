var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda feira')
        break
    case 2:
        console.log('Terça feira')
        break
    case 3:
        console.log('Quarta feira')
        break
    case 4:
        console.log('Quinta feira')
        break
    case 5:
        console.log('Sexta feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia invalido"')
        break
}

/*
if (diaSem == 0) {
    console.log('Hoje é domingo')
} else {
    if (diaSem == 1) {
        console.log('Hoje é Segunda feira')
    } else {
        if (diaSem == 2) {
            console.log('Hoje é Terça feira')
        } else {
            if (diaSem == 3) {
                console.log('Hoje é Quarta feira')
            } else {
                if (diaSem == 4) {
                    console.log('Hoje é Quinta feira')
                } else {
                    if (diaSem == 5) {
                        console.log('Hoje é Sexta feira')
                    } else {
                        if (diaSem == 6) {
                            console.log('Hoje é Sábado')
                        }
                    }
                }
            }
        }
    }
}
*/