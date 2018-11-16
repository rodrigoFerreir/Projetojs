const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const conf = JSON.parse(conteudo)
    console.log(`${conf.db.host}:${conf.db.port}`)
})

//aquivo JSON

const config = require('./arquivo.json')
console.log(config.db)

//lendo aquivos de uma pasta

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('conteudo da pasta...')
    console.log(arquivos)
})