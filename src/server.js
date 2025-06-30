const express = require("express")
const app = express()
const cursoController = require("./controllers/curso.controller")
//const professorController = require("./controllers/curso.controller")
//const alunoController = require("./controllers/curso.controller")

app.get("/cursos",cursoController.listarCursos)

app.listen(3000, function(){
    console.log("Servindor rodando na porta 3000")
})