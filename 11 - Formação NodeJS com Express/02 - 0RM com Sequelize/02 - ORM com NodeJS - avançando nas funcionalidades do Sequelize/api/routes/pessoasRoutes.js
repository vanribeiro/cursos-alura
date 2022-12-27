const { Router } = require('express');
const PessoaController = require('./../controllers/PessoaController.js');

const router = Router();

router
    .get('/pessoas', PessoaController.pegarTodasAsPessoasAtivas)
    .get('/pessoas/todos', PessoaController.pegarTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegarPessoaPorId)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .delete('/pessoas/:id', PessoaController.deletarPessoa)
    .post('/pessoas', PessoaController.cadastrarPessoa)
    .put('/pessoas/:id', PessoaController.atualizarPessoa)

    .get('/pessoas/:estudanteId/matriculas', PessoaController.pegaMatriculas)
    .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
    .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarMatriculaPorId)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaUmaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)


module.exports = router;