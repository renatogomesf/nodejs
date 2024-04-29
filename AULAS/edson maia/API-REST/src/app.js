import express from 'express'

const app = express()

// indicar para o express ler body com json.
app.use(express.json())

// mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'}
]

// retornar o objeto por id.
const buscarSelecaoPorId = (id) => {
    return selecoes.filter(selecao=>
        selecao.id == id
    )
}

// pegar posição ou index do elemento no array por id.
const buscaIndexSelecao = (id) => {
    return selecoes.findIndex(selecao =>
        selecao.id == id
    )
}


// criar rota padrão ou raiz
app.get('/',(request,response)=>{
    // ".send()": envia uma resposta pra acessar o end point.
    response.send('curso de node.js!')
})


app.get('/selecoes',(request,response)=>{
    response.status(200).send(selecoes)
})


// ":'nome do parâmetro'": criando parâmetros
app.get('/selecoes/:id',(request,response)=>{
    // pega o parâmetro da requisição
    // let index = request.params.id
    response.json(buscarSelecaoPorId(request.params.id))
})


app.post('/selecoes',(request,response)=>{
    // uma requisição tem basicamente duas partes, o HEADER (cabeçalho que tem meta dados e dados importantes a certa da origem dela, tipo e etc.) e o BODY (corpo da requisição/corpo da mensagem... conteúdo de fato.). neste caso estamos pegando o body. através do ".body".
    selecoes.push(request.body)
    response.status(201).send('Seleção cadastrada com sucesso!')
})


app.delete('/selecoes/:id',(request,response)=>{
    let index = buscaIndexSelecao(request.params.id)

    // ".splice('posição','quantidade')": corta o array numa posição desejada e, a partir dali, apaga a quantidade desejada de itens, contando com o da posição desejada. neste caso, estou cortando o array numa posição e apagando 1 item a partir daquela posição... neste caso, apagando o próprio item da posição definida
    selecoes.splice(index, 1)

    response.send(`Seleção com id: ${request.params.id} excluída com sucesso!`)
})


app.put('/selecoes/:id',(request,response)=>{
    let index = buscaIndexSelecao(request.params.id)

    selecoes[index].selecao = request.body.selecao
    selecoes[index].grupo = request.body.grupo
    
    response.json(selecoes)
})

export default app
