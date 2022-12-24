const { Router } = require('express');
const PessoaController = require('./../controllers/PessoaController.js');

const router = Router();

router
    .get('/pessoas', PessoaController.pegarTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegarPessoaPorId)
    .delete('/pessoas/:id', PessoaController.deletarPessoa)
    .post('/pessoas', PessoaController.cadastrarPessoa)
    .put('/pessoas/:id', PessoaController.atualizarPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarMatriculaPorId)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaUmaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)


module.exports = router;