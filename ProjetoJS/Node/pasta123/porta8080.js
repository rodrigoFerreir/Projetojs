const http = require('http')
http.createServer((req, res) =>{
    res.write('OLA MUNDO!!!')
    res.end()
}).listen(8080)

//localhost:8080
