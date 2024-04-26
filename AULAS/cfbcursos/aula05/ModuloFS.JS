
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((request,response)=>{
    fs.readFile('site.html', (err,file)=>{
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write(file)
        return response.end()
    })
})

server.listen(3000, ()=>{
    console.log("servidor rodando")
})