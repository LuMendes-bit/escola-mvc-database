const bancoDados = require("../config/banco-dados")
async function listarTodosCursos(){
    const conection = await bancoDados.conection
    
    const cursos = await conection.execute("SELECT * FROM cursos")
    // contar a quantidade e cursos retornados
    console.log("quantidade de cursos", cursos[0].length)

    // retornar os cursos
    return cursos[0]
}

module.exports ={
    listarTodosCursos
}