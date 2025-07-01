function listarAlunos(request, response){
    response.send("controller responsável pela listagem de alunos")
} 

function cadastrarAlunos(request, response){
    response.send("Função responsável por cadastra um aluno")
}

function deletarAlunos(request, response){
    response.send("Funçao responsável por deletar um aluno")
}

module.exports = {
    listarAlunos,
    cadastrarAlunos,
    deletarAlunos
}