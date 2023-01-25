function verificar() {
    var img = window.document.getElementById('img')
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    
    if(Fano.value == 0 || Number(Fano.value) > ano){
        window.alert('[ERRO]Digite um ano válido')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15){
                img.src = 'crianco.png'
            } else if (idade < 35) { 
                img.src = 'homem.png'
            }else {
                img.src = 'velho.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.src = 'crianca.png'
            } else if (idade < 35) {
                img.src = 'mulher.png'
            } else {
                img.src = 'velha.png'
            }
        } 
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
