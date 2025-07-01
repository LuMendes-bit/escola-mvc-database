function listarCursos(request, response){
    response.send("controller responsável pela listagem de cursos")
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