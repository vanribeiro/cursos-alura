const database = require('../models');

class PessoaController {

    static async pegasTodasAsPessoas(___, res) {
        try {            
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarPessoaPorId (req, res) {
        const { id }  = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) }});
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarPessoa (req, res) {
        const { id }  = req.params;
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({message: `${id} deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cadastrarPessoa (req, res) {
        try {
            const pessoa = await database.Pessoas.create(req.body);
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarPessoa (req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.update(req.body, { where: {id: Number(id)}});
            const pessoaAtualizada = await database.Pessoas.findOne({where: { id: Number(id) }});
            return res.status(200).send(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = PessoaController;