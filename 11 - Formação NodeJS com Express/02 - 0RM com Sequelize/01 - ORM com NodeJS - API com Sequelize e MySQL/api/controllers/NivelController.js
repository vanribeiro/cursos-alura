const database = require('./../models');

class NivelController {

    static async listarTodosOsNiveis(___, res) {
        try {            
            const niveis = await database.Niveis.findAll();
            return res.status(200).json(niveis);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async encontrarNivelPorId (req, res) {
        const { id } = req.params;
        try {
            const nivel = await database.Niveis.findOne({ where : { id: Number (id)}});
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarNivel (req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({ where: { id: Number(id) } });
            return res.status(200).json({message: `nível com o ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async cadastrarNivel (req, res) {
        const corpoDaRequisicao = req.body;
        try {
            const novoNivel = await database.Niveis.create(corpoDaRequisicao);
            return res.status(200).json(novoNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarNivel (req, res) {
        const corpoDaRequisicao = req.body;
        const { id } = req.params;
        try {
            await database.Niveis.update(corpoDaRequisicao, { where: { id: Number(id) } });
            const nivelAtualizado = await database.Niveis.findOne({ where : { id: Number (id)}});
            return res.status(200).json(nivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    
}

module.exports = NivelController;