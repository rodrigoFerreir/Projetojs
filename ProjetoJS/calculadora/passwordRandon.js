//codigo gera uma senha aleatoria.(copiado do canal devpleno).

const passwordRandom = len =>{
    let senha = ''
    do{
        senha += Math.random().toString(36).substr(2)
    }while(senha.length < len){
        senha = senha.substr(0, len)
        return senha
    }
}

console.log('Sua senha aleatoria é:', passwordRandom(20))