const dados = async ()=>{
    const db = require('./db')

    console.log('inserir novo cliente')
    
    await db.insereClientes(
        {
            id:'11', 
            nome:'romulo', 
            cpf:'75757575757', 
            nascimento:'2005-05-19',
            tipo:'3'
        }
    )

    console.log('obter todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
}

dados()