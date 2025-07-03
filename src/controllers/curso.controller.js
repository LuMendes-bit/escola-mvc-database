const cursoModel = require("../models/curso.model")

async function listarCursos(request, response){
   const cursos = await cursoModel.listarTodosCursos()
    console.log(cursos)
    
        response.render("listar-cursos",{cursos})
    }

function cadastrarCursos(request, response){
    response.send("Função responsável por cadastra um curso")
}
function atualizarCursos(request, response){
    response.send("Função responsável por atualizar os cursos")
}

function deletarCursos(request, response){
    response.send("Funçao responsável por deletar um curso")
}

module.exports = {
    listarCursos,
    cadastrarCursos,
    deletarCursos,
    atualizarCursos
}