import conexao from "../database/conecxao.js"
import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController {


    async index(request,response){
        const result = await SelecaoRepository.findAll()
        response.json(result)
    }


    async show(request,response){
        const id = request.params.id
        const result = await SelecaoRepository.findById(id)
        response.json(result)
    }


    async store(request,response){
        // uma requisição tem basicamente duas partes, o HEADER (cabeçalho que tem meta dados e dados importantes a certa da origem dela, tipo e etc.) e o BODY (corpo da requisição/corpo da mensagem... conteúdo de fato.). neste caso estamos pegando o body. através do ".body".
        // selecoes.push(request.body)
    
        // response.status(201).send('Seleção cadastrada com sucesso!')
    
        const dados = request.body
        const result = await SelecaoRepository.create(dados)
        response.json(result)
    }


    async update(request,response){
        // let index = buscaIndexSelecao(request.params.id)
    
        // selecoes[index].selecao = request.body.selecao
        // selecoes[index].grupo = request.body.grupo
        
        // response.json(selecoes)
    
        const id = request.params.id
        const dados = request.body
        const result = await SelecaoRepository.update(dados,id)
        response.json(result)
    }


    async delete(request,response){
        // let index = buscaIndexSelecao(request.params.id)
    
        // ".splice('posição','quantidade')": corta o array numa posição desejada e, a partir dali, apaga a quantidade desejada de itens, contando com o da posição desejada. neste caso, estou cortando o array numa posição e apagando 1 item a partir daquela posição... neste caso, apagando o próprio item da posição definida
        // selecoes.splice(index, 1)
    
        // response.send(`Seleção com id: ${request.params.id} excluída com sucesso!`)
    
        const id = request.params.id
        const result = await SelecaoRepository.delete(id)
        response.json(result)
    
    
        const idController = ((request.params.id)-1)
        const sqlController = 'ALTER TABLE cliente AUTO_INCREMENT = ?;'
        conexao.query(sqlController, idController, (error,result,fields)=>{
            if(error){
                response.status(404).send(error)
            }else{
                response.status(200)
            }
        })
    }
}

// padrão Singleton
export default new SelecaoController()