//lendo um arquivo linha a linha(tirado do devpleno)
const readLine = require('readline')
const fs = require ('fs')
const readable = fs.createReadStream('Index.html')


const rl = readLine.createInterface({
    input: readable
})

rl.on('line', (line)=>{
    console.log('>>>', line)
})