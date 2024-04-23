const http = require('http')
const url = require('url')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((request,response)=>{

    // 'text/plain': texto simples
    // 'text/html': texto em formato html
    // 'text/json': texto em formato json
    response.writeHead(200,{'Content-Type':'text/html'})

    response.write(request.url)

    const p = url.parse(request.url,true).query

    response.write("<br/>"+p.nome)
    response.write("<br/>"+p.curso)
    
    response.end()
})

servidor.listen(porta,host,()=>{
    console.log("servidor rodando")
})