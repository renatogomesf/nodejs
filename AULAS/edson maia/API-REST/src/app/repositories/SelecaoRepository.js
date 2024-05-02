import conexao from "../database/conecxao.js"

class SelecaoRepository {

    create(dados) {
        const sql = 'INSERT INTO cliente SET ?;'
    
        return new Promise((resolve, reject)=>{
            conexao.query(sql, dados, (error,result,fields)=>{
                if(error){
                    return reject('Não foi possível cadastrar')
                }else{
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
    }


    findAll() {
        // response.status(200).send(selecoes)
        const sql = 'SELECT * FROM cliente;'

        return new Promise((resolve, reject)=>{
            // ".query()": passa dois parâmetros... a instrução SQL e uma função de callback que possui 3 parâmetros.
            conexao.query(sql, (error,result,fields)=>{
                if(error){
                    return reject('Não foi possível localizar')
                }else{
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
    }


    findById(id) {
        // pega o parâmetro da requisição
        // let index = request.params.id
        // response.json(buscarSelecaoPorId(request.params.id))
    
        const sql = 'SELECT * FROM cliente WHERE i_cliente_cliente=?;'
    
        return new Promise((resolve, reject)=>{
            // o segundo parâmetro da query pode ser uma variável ou um array de variáveis.
            conexao.query(sql, id, (error,result,fields)=>{
                if(error){
                    return reject('Não foi possível localizar')
                }else{
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
    }


    update(dados,id) {
        const sql = 'UPDATE cliente SET ? WHERE i_cliente_cliente = ?;'
    
        return new Promise((resolve, reject)=>{
            conexao.query(sql, [dados,id], (error,result,fields)=>{
                if(error){
                    return reject('Não foi possível atualizar')
                }else{
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
    }


    delete(id) {
        const sql = 'DELETE FROM cliente WHERE i_cliente_cliente=?;'
       
        return new Promise((resolve, reject)=>{
            conexao.query(sql, id, (error,result,fields)=>{
                if(error){
                    return reject('Não foi possível deletar')
                }else{
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
    }
}

export default new SelecaoRepository()