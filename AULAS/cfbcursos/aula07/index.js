const express = require('express')
const rotas = require('./Modularizando')
const porta = process.env.PORT || 3000

const app = express()

//usando o modulo rotas a partir da raiz "/"
app.use('/',rotas)

app.get('*',(request,response)=>{
    response.send('cfb cursos')
})

app.listen(porta,()=>{console.log('servidor rodando')})