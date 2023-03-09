function cont(){

let inicio = document.getElementById('init')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')

if (inicio.value == "" || fim.value == "" || passo.value == ""){
    alert('[ERRO] Dados Faltantes')
    res.innerHTML = ('Impossível contar, inicio, fim ou passo não podem estar vazios.')
}else {
    res.innerHTML = ('Contando: <br>')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    if (i < f){
        // CONTAGEM CRESCENTE
         for(let c = i; c <= f ; c += p ){
            res.innerHTML += ` ${c} \u{1F449}`
    }
    
    }else {
        //CONTAGEM REGRESSIVA
        for (c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
       
    }
    res.innerHTML += `\u{1F3C1}`
}
    }


