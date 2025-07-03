const express = require("express")
const app = express()
app.set("view engine","ejs")
app.set("views", "./src/views")
const cursoController = require("./controllers/curso.controller")
const professorController = require("./controllers/professor.controller")
const alunoController = require("./controllers/aluno.controller")

app.get("/cursos",cursoController.listarCursos)
app.get("/alunos",alunoController.listarAlunos)
app.get("/professores",professorController.listarProfessores)

app.post("/cadastrar-cursos",cursoController.cadastrarCursos)
app.post("/cadastrar-alunos",alunoController.cadastrarAlunos)
app.post("/cadastrar-professores",professorController.cadastrarProfessores)

app.put("/atualizar-cursos",cursoController.atualizarCursos)
app.put("/atualizar-alunos",alunoController.atualizarAlunos)
app.put("/atualizar-professores",professorController.atualizarProfessores)

app.delete("/deletar-cursos",cursoController.deletarCursos)
app.delete("/deletar-alunos",alunoController.deletarAlunos)
app.delete("/deletar-professores",professorController.deletarProfessores)


app.listen(3000, function(){
    console.log("Servindor rodando na porta 3000")
})