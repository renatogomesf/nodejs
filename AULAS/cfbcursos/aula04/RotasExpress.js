const http = require('http')

// se eu não souber qual porta a minha aplicação estiver rodando no servidor, ele pega automaticamente a porta da aplicação.
const porta = process.env.PORT

const servidor = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.write('CFB Curso')
    response.end()
})

// escuta e utiliza a porta adquirida pelo "process.env.PORT" ou usa a porta 3000.
servidor.listen(porta || 3000, console.log("servidor rodando")) 