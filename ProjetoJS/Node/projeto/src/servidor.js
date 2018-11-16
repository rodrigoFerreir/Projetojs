const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./BancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))//qualquer requisiçao feita passa por aqui

app.get('/produtos', (req, res, next)=> {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// Gera um Json
})

app.put('/produto/:id', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, ()=> {
    console.log(`Servirdor está execultando na porta ${porta}.`)
})