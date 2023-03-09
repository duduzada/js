let valores = [4, 1, 3, 5, 6, 7, 8]

//console.log(valores)


//for (let pos=0; pos < valores.length; pos++){
  //  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
//}

for(let pos in valores){//Otimizado para variáveis compostas, só funciona para arrays e objetos!!
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
