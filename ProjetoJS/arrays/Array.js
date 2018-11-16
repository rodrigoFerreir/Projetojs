//Metodos Array

/*const Piloto = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

Piloto.pop()//sai o ultimo elemento do array
console.log(Piloto)

Piloto.push('Verstappen')//adiciona na ultima posicao
console.log(Piloto)


Piloto.shift()//remove o primeiro elemento
console.log(Piloto)

Piloto.unshift('Hamilton')//adiciona na primeira posiçao
console.log(Piloto)

//adicionar
Piloto.splice(2, 0, 'Bottas', 'Massa')
console.log(Piloto)
//remove
Piloto.splice(3, 1)//remove o indice 2
console.log(Piloto)*/


/*const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.0}
]

//Imperativo
let total1 = 0
for(let i = 0; i< alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)*/


/*let numeros = []

function getRandomInt(min , max) {
    return Math.floor(Math.random() * (max - min)) + min
}

for(let i = 0; i < 6; i++){
    numeros.push(getRandomInt(0, 60))
}
console.log(numeros)*/


//FlapMap
/*const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.3,
    }, { 
        nome: 'Ana', 
        nota: 9.1,    
    }]
}, {
    nome: 'Tuma M2',
    alunos:[{
        nome:'Rebecca',
        nota: 7.6
    }, {
        nome: 'Rodrigo',
        nota: 10.0
    }]
}]


const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flapMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}


const notas2 = escola.flapMap(getNotasTurma)
console.log(notas2)*/

