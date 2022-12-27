// const database = require('./../models');
const Services = require('../services/Services.js');
const niveisServices = new Services('Niveis');

class NivelController {

    static async listarTodosOsNiveis(___, res) {
        try {            
            const niveis = await niveisServices.pegaTodosRegistros();
            return res.status(200).json(niveis);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async encontrarNivelPorId (req, res) {
        const { id } = req.params;
        try {
            const nivel = await niveisServices.pegaUmRegistro(Number(id));
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarNivel (req, res) {
        const { id } = req.params;
        try {
            await niveisServices.deletaRegistro(Number(id));
            return res.status(200).json({message: `nível com o ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async cadastrarNivel (req, res) {
        const corpoDaRequisicao = req.body;
        try {
            const novoNivel = await niveisServices.criaRegistro(corpoDaRequisicao);
            return res.status(200).json(novoNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarNivel (req, res) {
        const corpoDaRequisicao = req.body;
        const { id } = req.params;
        try {
            await niveisServices.atualizaRegistro(corpoDaRequisicao, Number(id));
            const nivelAtualizado = await niveisServices.encontrarNivelPorId(Number(id));
            return res.status(200).json(nivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraNivel(req, res){
		const { id } = req.params;
		try {
			await niveisServices.restauraRegistro(Number(id));
			return res.status(200).json({ message: `nível com o ${id} restaurado` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

}

module.exports = NivelController;