//CODIGO NAO EXECUTAVEL

// Procedural
/*processamento(valor1, valor2, valor3,)

//OO
object ={
    valor1,
    valor2,
    valor3,
    processamento(){
        //....
    }
}

object.processamento()*/



// Criando Objetos


//*usando de forma literal
/*const obj1 = {}
console.log(obj1)


//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2899.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())*/


//Função Factory

/*function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome, 
        salarioBase, 
        faltas,
        getSalario(){
            return(salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1, f1.getSalario())
console.log(f2, f2.getSalario())*/


// Object.create
/*const filha = Object.create(null)
filha.nome= 'Ana'
console.log(filha)*/


//Uma Função famosa que retorna Objeto
/*const  fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)*/

/*const sequencia ={
    _valor : 1,
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)*/

/*const pessoa = { 
    nome: 'Rebecca',
    idade: 19,
    peso: 56,
}

console.log(Object.keys(pessoa))//mosttra nomes das chaves do Objeto
console.log(Object.values(pessoa))//mostra os valores do Objeto
console.log(Object.entries(pessoa))//mostra a chave com os valores do Objeto


Object.entries(pessoa).forEach(([chave, valor]) => {  // Lista valores e chaves do Objeto
    console.log(`${chave}: ${valor}`) 
})


Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable:false,
    value:'01/01/1999'
})

pessoa.dataDeNascimento = '01/02/1999'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))*/


// Object.assign(ECMAScript 2015)

/*const dest = {a:1}
const o1 = {b:2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)*/


// Herança
/*const carro = {
    velAtual : 0,
    velMax : 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}


const ferrari = {
    modelo : 'F40',
    velMax : 324 // shadowing
}

const volvo = {
    modelo : 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}


Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


console.log(ferrari)
console.log(volvo)


volvo.acelerarMais(300)
console.log(volvo.status())


ferrari.acelerarMais(300)
console.log(ferrari.status())*/


/*const pai = {nome: 'Pedro', corCabelo: 'preto'}
const mae = {nome: 'Fernada', corDeOlho: 'Azul'}
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(`${filha1.nome} é filha de ${pai.nome} e tem cabelo ${filha1.corCabelo}`)

const filha2 = Object.create(pai, {
    nome:{value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
filha2.corCabelo = 'loiro'
console.log(`${filha2.nome} também é filha de ${pai.nome} e tem cabelo ${filha2.corCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key): console.log(`Por herança: ${key}.`)
}*/


//CLASSES

/*
class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach( l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}


const salario = new Lancamento('Salario', 1500)
const contaDeluz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeluz)
console.log(contas.sumario())*/

//Herança com Classe

/*class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}


class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const f1 = new Filho
console.log(f1)*/