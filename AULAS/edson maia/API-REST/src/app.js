import express, { response } from 'express'

const app = express()

// mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]


// criar rota padrão ou raiz
app.get('/',(request,response)=>{
    // ".send()": envia uma resposta pra acessar o end point.
    response.send('curso de node.js!')
})

app.get('/selecoes',(request,response)=>{
    response.status(200).send(selecoes)
})

export default app