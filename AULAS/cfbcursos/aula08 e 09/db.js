
// const conectar = async ()=>{
//     if(global.conexao && global.conexao.state != "disconected"){
//         return global.conexao
//     }

//     const mysql = require('mysql2/promise')
//     const con = mysql.createConnection('mysql://root:123456789@localhost:3306/cfbcursos')
//     console.log("conectado ao banco")
//     global.conexao = con
//     return con
// }

const todosClientes = async ()=>{
    const con = await conectar()
    const [linhas] = await con.query('select * from cliente')
    return await linhas
}

const insereClientes = async (cliente)=>{
    const con = await conectar()
    const sql = 'insert into cliente values (?,?,?,?,?)'
    const valores = [
        cliente.id,
        cliente.nome,
        cliente.cpf,
        cliente.nascimento,
        cliente.tipo
    ]
    await con.query(sql,valores)
}

module.exports = {todosClientes,insereClientes}