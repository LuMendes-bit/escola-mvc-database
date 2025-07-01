const express = require("express")
const app = express()
const cursoController = require("./controllers/curso.controller")
const professorController = require("./controllers/professor.controller")
const alunoController = require("./controllers/aluno.controller")

app.get("/cursos",cursoController.listarCursos)
app.get("/alunos",alunoController.listarAlunos)
app.get("/professores",professorController.listarProfessores)

app.listen(3000, function(){
    console.log("Servindor rodando na porta 3000")
})