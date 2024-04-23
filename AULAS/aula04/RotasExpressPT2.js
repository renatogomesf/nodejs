const express = require('express')
const app = express()
const porta = process.env.PORT

//define a rota e o que irá acontecer quando esta rota for chamada através da função.
app.get('/',(request,response)=>{
    response.send('Seja bem vindo')
})

app.get('/canal',(request,response)=>{
    response.json({canal:'cfb cursos'})
})

app.listen(porta || 3000, console.log("servidor rodando")) 