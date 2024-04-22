
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((request,response)=>{
    fs.appendFile('teste.txt','curso de node - cfb cursos', (err)=>{
        if(err){
            throw err
        }else{
            console.log("arquivo criado")
        }
    })
})

server.listen(3000, ()=>{
    console.log("servidor rodando")
})