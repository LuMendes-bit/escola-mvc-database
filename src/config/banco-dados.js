// Importar biblioteca mysql2
const mysql = require("mysql2/promise")

//config da conexão com o banco de dados
const conection = mysql.createConnection({
    host: "localhost", // endereço do server
    user: "root", // usuário do banco de dados
    password: "root", // senha do banco de dados
    database:"sistema_escolar" // nome do banco de dados
})

// Expotar conexão para ser usada em outros arquivos
module.exports ={
    conection
}