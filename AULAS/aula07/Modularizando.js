
const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    {'curso':'node', 'info':'curso de node'},
    {'curso':'react', 'info':'curso de react'},
    {'curso':'java', 'info':'curso de java'},
    {'curso':'arduino', 'info':'curso de arduino'}
]

rotas.get('/',(request,response)=>{
    response.json({ola:'seja bem vindo'})
})

rotas.get('/:cursoid',(request,response)=>{
    const curso = request.params.cursoid
    const cursoI = cursosInfo.find(i=>i.curso == curso)

    if(!cursoI){
        response.status(404).json(
            {erro:'curso não encontrado', cursoPesquisado:curso}
        )
    }else{
        response.status(200).json(cursoI)
    }
})

module.exports = rotas