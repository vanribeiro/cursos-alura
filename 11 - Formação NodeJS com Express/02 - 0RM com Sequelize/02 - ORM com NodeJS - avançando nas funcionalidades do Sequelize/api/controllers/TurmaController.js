const database = require('./../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class TurmaController{

    // /turmas?=data_inicial=2020-01-01&data_final=2020-03-01
    static async listarTodasAsTurmas(req, res) {
        const { data_inicial, data_final } = req.query;

        const where = {};

        data_inicial || data_final ?  where.data_inicio = {} : null;
        data_inicial ?  where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final: null;

        try {            
            const turmas = await database.Turmas.findAll({ where });
            return res.status(200).json(turmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async encontrarTurmaPorId (req, res) {
        const { id } = req.params;
        try {
            const turma = await database.Turmas.findOne({ where : { id: Number (id)}});
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarTurma (req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({message: `turma com o ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async cadastrarTurma (req, res) {
        const corpoDaRequisicao = req.body;
        try {
            const novaTurma = await database.Turmas.create(corpoDaRequisicao);
            return res.status(200).json(novaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarTurma (req, res) {
        const corpoDaRequisicao = req.body;
        const { id } = req.params;
        try {
            await database.Turmas.update(corpoDaRequisicao, { where: { id: Number(id) } });
            const turmaAtualizada = await database.Turmas.findOne({ where : { id: Number (id)}});
            return res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraTurma(req, res){
		const { id } = req.params;
		try {
			await database.Turmas.restore({ where: { id: Number(id) }});
			return res.status(200).json({ message: `turma com o ${id} restaurado` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

}

module.exports = TurmaController;