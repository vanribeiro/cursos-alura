const { TurmasServices } = require('../services');
const turmaServices = new TurmasServices();

class TurmaController{

    // /turmas?=data_inicial=2020-01-01&data_final=2020-03-01
    static async listarTodasAsTurmas(req, res) {
        const { data_inicial, data_final } = req.query;

        try {            
            const turmas = await turmaServices.listarTodasAsTurmasPorPerido(data_inicial, data_final);
            return res.status(200).json(turmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async encontrarTurmaPorId (req, res) {
        const { id } = req.params;
        try {
            const turma = await turmaServices.pegaUmRegistro(Number(id));
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarTurma (req, res) {
        const { id } = req.params;
        try {
            await turmaServices.deletaRegistro(Number(id));
            return res.status(200).json({message: `turma com o ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async cadastrarTurma (req, res) {
        const corpoDaRequisicao = req.body;
        try {
            const novaTurma = await turmaServices.criaRegistro(corpoDaRequisicao);
            return res.status(200).json(novaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarTurma (req, res) {
        const corpoDaRequisicao = req.body;
        const { id } = req.params;
        try {
            await turmaServices.atualizaRegistro(corpoDaRequisicao, Number(id));
            const turmaAtualizada = await turmaServices.pegaUmRegistro(Number(id));
            return res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraTurma(req, res){
		const { id } = req.params;
		try {
			await turmaServices.restauraRegistro(Number(id));
			return res.status(200).json({ message: `turma com o ${id} restaurado` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

}

module.exports = TurmaController;