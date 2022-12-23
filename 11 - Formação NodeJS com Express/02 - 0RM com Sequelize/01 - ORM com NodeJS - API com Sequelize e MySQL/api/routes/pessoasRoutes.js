const { Router } = require('express');
const PessoaController = require('./../controllers/PessoaController.js');

const router = Router();

router
    .get('/pessoas', PessoaController.pegasTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegarPessoaPorId)
    .delete('/pessoas/:id', PessoaController.deletarPessoa)
    .post('/pessoas', PessoaController.cadastrarPessoa)
    .put('/pessoas/:id', PessoaController.atualizarPessoa)


module.exports = router;