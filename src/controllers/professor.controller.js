function listarProfessores(request, response){
    response.send("controller responsável pela listagem de professores")
} 

function cadastrarProfessores(request, response){
    response.send("Função responsável por cadastra um professor")
}

function atualizarProfessores(request, response){
    response.send("Função responsável por atualizar os professores")
}

function deletarProfessores(request, response){
    response.send("Funçao responsável por deletar um professor")
}

module.exports = {
    listarProfessores,
    cadastrarProfessores,
    deletarProfessores,
    atualizarProfessores
}