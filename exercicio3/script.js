function cont(){

var inicio = document.getElementById('init')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

if (inicio.value == "" || fim == ""){
    res.innerHTML = ('Impossível contar, inicio ou fim não podem estar vazias.')
}else if (passo.value == "")
    alert('Passo inválido! Considerando PASSO 1')


}