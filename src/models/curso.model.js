const bancoDados = require("../config/banco-dados")
async function listarTodosCursos(){
    const conection = await bancoDados.conection
    
    const  query = await conection.execute("SELECT * FROM cursos")
    return query[0]
}

module.exports ={
    listarTodosCursos
}