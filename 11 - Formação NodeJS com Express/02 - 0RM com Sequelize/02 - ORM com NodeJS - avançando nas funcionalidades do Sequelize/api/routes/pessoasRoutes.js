const { Router } = require('express');
const PessoaController = require('./../controllers/PessoaController.js');

const router = Router();

router
    .get('/pessoas', PessoaController.pegarTodasAsPessoas)
    .get('/pessoas/ativas', PessoaController.pegarTodasAsPessoasAtivas)
    .get('/pessoas/:id', PessoaController.pegarPessoaPorId)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .delete('/pessoas/:id', PessoaController.deletarPessoa)
    .post('/pessoas', PessoaController.cadastrarPessoa)
    .put('/pessoas/:id', PessoaController.atualizarPessoa)
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)


module.exports = router;