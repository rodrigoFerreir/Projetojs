/*const nota1 = 1.0;
const nota2 = 5.0;


console.log('teste')

console.log("nota 1 = ", nota1)
console.log("nota 2 = ", nota2)

const media = (nota1 + nota2) /2;
console.log("Media = ", media)

console.log(media.toFixed(2))
console.log(typeof media)
console.log(typeof nota1)
console.log(typeof nota2)*/


/** OPERADORES lOGICOS
 *  || -> ou em Js.
 * != -> equivale ao diferente porem pode ter o mesmo efeito que o ou exclusivo

*/

//TESTES COM OPERADORES

/*function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comparTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2                          
    const manterSaudavel = !comprarSorvete

    return{ comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}


console.log(compras(true, true))

console.log(compras(true, false))

console.log(compras(false, true))

console.log(compras(false, false))*/

//-TESTES COM OPERADORES 2

/*let num1 = 1
let num2 = 2

num1 ++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)*/

//-Operadores Ternarios

/*const resultado = nota => nota >= 7 ?'Aprovado! ' : 'Reprovado!'

console.log(resultado(7.1))
console.log(resultado(6.7))*/


//CONTROLE - CAP II

/*function soBoaNoticia(nota){
    if(nota >=7 ){
        console.log('Aprovado com: ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForverdadeEuFalO(valor){
    if(valor){
        console.log('É verdade ...'+ valor)
    }
}*/



/*function teste2(num){
    if(num >= 7){
        console.log(num)
    }
    console.log('FINAL')
}

teste2(6)
teste2(9)
teste2(5)
teste2(7)
teste2(10)*/

/*const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!!')
    }else{
        console.log('Reprovado!')    
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('EpA!')//cuidado*/

/*Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResultado = function(numero){
    if(numero.entre(9, 10)){
        console.log('Quadro de Honra')
    }else if(numero.entre(7, 8.99)){
        console.log('Aprovado!')
    }else if(numero.entre(4, 6.99)){
        console.log('Recuperação')
    }else if(numero.entre(0, 3.99)){
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(4)
imprimirResultado(5)
imprimirResultado(2)*/