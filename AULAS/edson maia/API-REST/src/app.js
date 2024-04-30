import express from 'express'
import conexao from '../infra/conecxao.js'

const app = express()

// indicar para o express ler body com json.
app.use(express.json())


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


// criar rota padrão ou raiz (NÃO HÁ NECESSIDADE DE CRIAR UMA ROTA RAIZ. POIS O QUE IMPORTA É ACESSAR RECURSOS VÁLIDOS)
// app.get('/',(request,response)=>{
//     // ".send()": envia uma resposta pra acessar o end point.
//     response.send('curso de node.js!')
// })


// ROTAS
app.get('/selecoes',(request,response)=>{

    // response.status(200).send(selecoes)
    const sql = 'SELECT * FROM cliente;'

    // ".query()": passa dois parâmetros... a instrução SQL e uma função de callback que possui 3 parâmetros.
    conexao.query(sql, (error,result,fields)=>{
        if(error){
            response.status(404).json({ 'erro' : error })
        }else{
            response.status(200).json(result)
        }
    })
})


// ":'nome do parâmetro'": criando parâmetros
app.get('/selecoes/:id',(request,response)=>{
    // pega o parâmetro da requisição
    // let index = request.params.id
    // response.json(buscarSelecaoPorId(request.params.id))
    
    const id = request.params.id

    const sql = 'SELECT * FROM cliente WHERE i_cliente_cliente=?;'

    // o segundo parâmetro da query pode ser uma variável ou um array de variáveis.
    conexao.query(sql, id, (error,result,fields)=>{

        const linha = result[0]

        if(error){
            response.status(404).json({ 'erro' : error })
        }else{
            response.status(200).json(linha)
        }
    })
})


app.post('/selecoes',(request,response)=>{
    // uma requisição tem basicamente duas partes, o HEADER (cabeçalho que tem meta dados e dados importantes a certa da origem dela, tipo e etc.) e o BODY (corpo da requisição/corpo da mensagem... conteúdo de fato.). neste caso estamos pegando o body. através do ".body".
    // selecoes.push(request.body)

    // response.status(201).send('Seleção cadastrada com sucesso!')

    const dados = request.body

    const sql = 'INSERT INTO cliente SET ?;'

    conexao.query(sql, dados, (error,result,fields)=>{

        if(error){
            response.status(400).json({ 'erro' : error })
        }else{
            response.status(201).json(result)
        }
    })
})


app.delete('/selecoes/:id',(request,response)=>{
    // let index = buscaIndexSelecao(request.params.id)

    // ".splice('posição','quantidade')": corta o array numa posição desejada e, a partir dali, apaga a quantidade desejada de itens, contando com o da posição desejada. neste caso, estou cortando o array numa posição e apagando 1 item a partir daquela posição... neste caso, apagando o próprio item da posição definida
    // selecoes.splice(index, 1)

    // response.send(`Seleção com id: ${request.params.id} excluída com sucesso!`)

    const id = request.params.id

    const sql = 'DELETE FROM cliente WHERE i_cliente_cliente=?;'

    conexao.query(sql, id, (error,result,fields)=>{

        if(error){
            response.status(404).json({ 'erro' : error })
        }else{
            response.status(200).json(result)
        }
    })



    const idController = ((request.params.id)-1)

    const sqlController = 'ALTER TABLE cliente AUTO_INCREMENT = ?;'

    conexao.query(sqlController, idController, (error,result,fields)=>{

        if(error){
            response.status(404).json({ 'erro' : error })
        }else{
            response.status(200)
        }
    })
})


app.put('/selecoes/:id',(request,response)=>{
    // let index = buscaIndexSelecao(request.params.id)

    // selecoes[index].selecao = request.body.selecao
    // selecoes[index].grupo = request.body.grupo
    
    // response.json(selecoes)

    const id = request.params.id

    const dados = request.body

    const sql = 'UPDATE cliente SET ? WHERE i_cliente_cliente = ?;'

    conexao.query(sql, [dados, id], (error,result,fields)=>{

        if(error){
            response.status(400).json({ 'erro' : error })
        }else{
            response.status(200).json(result)
        }
    })
})

export default app
