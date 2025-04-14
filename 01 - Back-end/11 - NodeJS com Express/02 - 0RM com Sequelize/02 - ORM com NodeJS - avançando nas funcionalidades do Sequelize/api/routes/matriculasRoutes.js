const { Router } = require('express');
const MatriculaController = require('./../controllers/MatriculaController.js');

const router = Router();

router

    .get('/pessoas/:estudanteId/matriculas', MatriculaController.pegaMatriculas)
    .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
    .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegarMatriculaPorId)
    .post('/pessoas/:estudanteId/matricula', MatriculaController.criaUmaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.deletarMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizarMatricula)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)


module.exports = router;