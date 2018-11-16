/*//Função em JS é First-Class Object (Citizens)
//Higher-order function

// Criando de forma literal:
function fun1() {  }

//Armazenar em uma variável:
const fun2 = function() { }


//Armazenar com Array:
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))


//Armazenar em um atributo de objeto
const obj ={ }
obj.falar = function(){return'OPA'}
console.log(obj.falar())

// Passar função como parametro
function rum(fun){
    fun()
}
rum(function(){console.log('Execultanto....')})


//Uma função pode retorar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c )
    }
}


soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)*/


//PARAMETROS E RETORNOS SAO OPCICIONAIS

/*function area(largura, altura){
    const area = largura * altura
    if(area> 20){
        console.log(`Valor acima do permitido ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2, 3))
console.log(area(2))
console.log(area(2, 3, 17, 13, 14, 10))
console.log(area(34, 35, 66, 1254))
console.log(area(5, 5))*/

/*function soma1 (a = 1  , b = 5 , c = 10){
    return a + b + c

}

console.log(soma1(), soma1(0, 6, 8), soma1(2, 5, 0), soma1(1, 4, 6))*/

/*const pessoa ={
    saldaçao: 'Olá, bem vindo ao teste de JS!',
    falar() {
        console.log(this.saldaçao)
    }
}
pessoa.falar()
const falar = pessoa.falar // colocando um metodo dentro de uma variavel facilitando a convocação
falar()// conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()*/

/*function pessoa(){
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)

}

new pessoa

// Segunda forma para o problema acima
function pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this) 'add um comentario aqui' , 1000)

}

new pessoa*/


/*let dobro = function(a){
    return 2*a
}


/*dobro = (a) =>{
    return 2 * a
}*/


//dobro => 2 * a

//console.log(dobro(Math.PI))


/*let ola = function(){
    return 'Olá'
}

ola = () => 'Ola' 
ola = _ => 'Ola'// possui parametro*/


/*let compararComThis = function(param){
    console.log(this === param)
}
compararComThis(global)*/

//FUNÇÕES ANONIMAS

/*const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operaçao = soma){
    console.log(operaçao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(9, 6, soma)
imprimirResultado(5, 7, function(x, y){
    return x - y
})
imprimirResultado(3, 4, (x , y) => x * y)

const pessoa2 ={
    falar: function(){
        console.log('Opa')
    }
}
pessoa2.falar()*/

// TESTE LOGIN
/*let nome = 'Rodrigo'
senha = '1234'
function login(nome){
    if(nome === 'Rodrigo' & senha === '1234'){
        return console.log('Bem vindo', nome)
    }else{
        return console.log('Login ou senha incorretos')    
    }
}
login('ADM', '2345')
login()
login('Rodrigo', '1234')*/


//EXEMPLO DE CALLBACK NO BROWSER
/*document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log('O evento ocorreu!!')
}*/

//Usando callback em um array:

/*const fabricantes = ['Mercedes', 'BMW', 'Audi', 'Ferrari', 'Lamborghini']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
console.log('//////////////////////')
fabricantes.forEach(fabricante => console.log(fabricante))*/


//Função construtora:

/*function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelcidadeAtual = function(){
        return velocidadeAtual
    }
}

const gol = new Carro
gol.acelerar(90)
console.log(gol.getVelcidadeAtual())

const Ferrari = new Carro(350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelcidadeAtual())*/