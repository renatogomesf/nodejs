import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '01167671216',
    database: 'cfbcursos'
})

export default conexao