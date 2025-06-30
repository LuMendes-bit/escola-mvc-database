function listarCursos(request, response){
    response.send("controller responsável pela listagem")
} 

function cadastrarCursos(request, response){
    response.send("Função responsável por cadastra um curso")
}

function deletarCursos(request, response){
    response.send("Funçao responsável por deletar um curso")
}

module.exports = {
    listarCursos,
    cadastrarCursos,
    deletarCursos
}