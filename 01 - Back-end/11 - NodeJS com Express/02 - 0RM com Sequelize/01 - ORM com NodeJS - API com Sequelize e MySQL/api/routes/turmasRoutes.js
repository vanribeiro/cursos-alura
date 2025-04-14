const { Router } = require('express');
const TurmaController = require('./../controllers/TurmaController.js');

const router = Router();

router
    .get('/turmas', TurmaController.listarTodasAsTurmas)
    .get('/turmas/:id', TurmaController.encontrarTurmaPorId)
    .delete('/turmas/:id', TurmaController.deletarTurma)
    .post('/turmas', TurmaController.cadastrarTurma)
    .put('/turmas/:id', TurmaController.atualizarTurma)

module.exports = router;