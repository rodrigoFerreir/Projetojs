

const sortear = (escolhaComp) =>{
    escolhaComp = Math.floor(Math.random() * 3)

    if(escolhaComp == 0){
        console.log('Pedra')
    }
    if(escolhaComp == 1){
        console.log('Papel')
    }
    if(escolhaComp == 2){
        console.log('Tesoura')
    }

} 
sortear()


