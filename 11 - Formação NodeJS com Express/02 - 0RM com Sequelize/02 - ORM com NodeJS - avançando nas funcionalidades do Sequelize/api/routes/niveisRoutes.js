const { Router } = require('express');
const NivelController = require('./../controllers/NivelController.js');

const router = Router();

router
    .get('/niveis', NivelController.listarTodosOsNiveis)
    .get('/niveis/:id', NivelController.encontrarNivelPorId)
    .delete('/niveis/:id', NivelController.deletarNivel)
    .post('/niveis', NivelController.cadastrarNivel)
    .put('/niveis/:id', NivelController.atualizarNivel)
    .post('/niveis/:id/restaura', NivelController.restauraNivel)

module.exports = router;