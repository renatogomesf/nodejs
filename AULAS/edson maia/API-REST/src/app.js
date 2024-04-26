const express = require('express')
const app = express()
const port = 3000

// criar rota padrão
app.get('/',(request,response)=>{
    response.send('curso de node.js!')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na endereço http://localhost:${port}`)
})
