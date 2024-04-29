import express, { response } from 'express'

const app = express()

// indicar para o express ler body com json.
app.use(express.json())

// mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'}
]


// criar rota padrão ou raiz
app.get('/',(request,response)=>{
    // ".send()": envia uma resposta pra acessar o end point.
    response.send('curso de node.js!')
})

app.get('/selecoes',(request,response)=>{
    response.status(200).send(selecoes)
})

app.post('/selecoes',(request,response)=>{
    // uma requisição tem basicamente duas partes, o HEADER (cabeçalho que tem meta dados e dados importantes a certa da origem dela, tipo e etc.) e o BODY (corpo da requisição/corpo da mensagem... conteúdo de fato.). neste caso estamos pegando o body. através do ".body".
    selecoes.push(request.body)
    response.status(201).send('Seleção cadastrada com sucesso!')
})

export default app