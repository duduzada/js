function cont(){

let inicio = document.getElementById('init')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')

if (inicio.value == "" || fim.value == "" || passo.value == ""){
    res.innerHTML = ('Impossível contar, inicio, fim ou passo não podem estar vazios.')
}else{
    res.innerHTML = ('Contando...')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    for(let c = 1; c<=f ; c +=p ){
        
    }
}
    }


