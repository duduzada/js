function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(Fano.value == 0 || Fano.value > ano){
        window.alert('[ERRO]Digite um ano válido')
    }else{
        window.alert('tuddo ok')
    }

}
