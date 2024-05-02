import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()

// indicar para o express ler body com json.
app.use(express.json())


// retornar o objeto por id.
// const buscarSelecaoPorId = (id) => {
//     return selecoes.filter(selecao=>
//         selecao.id == id
//     )
// }

// pegar posição ou index do elemento no array por id.
// const buscaIndexSelecao = (id) => {
//     return selecoes.findIndex(selecao =>
//         selecao.id == id
//     )
// }


// criar rota padrão ou raiz (NÃO HÁ NECESSIDADE DE CRIAR UMA ROTA RAIZ. POIS O QUE IMPORTA É ACESSAR RECURSOS VÁLIDOS)
// app.get('/',(request,response)=>{
//     // ".send()": envia uma resposta pra acessar o end point.
//     response.send('curso de node.js!')
// })


// ROTAS
app.get('/selecoes', SelecaoController.index)


// ":'nome do parâmetro'": criando parâmetros
app.get('/selecoes/:id', SelecaoController.show)


app.post('/selecoes', SelecaoController.store)


app.put('/selecoes/:id', SelecaoController.update)


app.delete('/selecoes/:id', SelecaoController.delete)

export default app
