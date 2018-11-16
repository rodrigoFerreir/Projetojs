console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma funçao...') //Dentro de uma funçao o this nao aponta para o exports
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //Dentro de uma funçao o this aponta para o global
}

logThis()