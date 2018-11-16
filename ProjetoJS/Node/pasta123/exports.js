console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 3
module.exports.c = 3

exports = null
console.log(module.exports)

exports ={
    nome:'Teste'        //forma errada
}

console.log(module.exports)

module.exports = { publico : true } //forma correta