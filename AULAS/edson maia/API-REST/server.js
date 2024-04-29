import app from './src/app.js'
import conexao from './infra/conecxao.js'

const PORT = 3000

// fazer a conexao
conexao.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Conexão realizada com sucesso!')

        app.listen(PORT, ()=>{
            console.log(`Servidor rodando na endereço http://localhost:${PORT}`)
        })
    }
})
