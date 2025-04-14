const Sequelize = require('sequelize');
const { MatriculasServices } = require('./../services');
const matriculasServices = new MatriculasServices('Matriculas');

class MatriculaController {

    static async pegarMatriculaPorId(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			const matricula = await matriculasServices.encontraUmaMatricula({
					id: Number(matriculaId),
					estudante_id: Number(estudanteId),
			});
			return res.status(200).json(matricula);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async criaUmaMatricula(req, res) {
		const { estudanteId } = req.params;
		const novaMatricula = {
			...req.body,
			estudante_id: Number(estudanteId),
		};
		try {
			const novaMatriculaCriada = await matriculasServices.criaRegistro(
				novaMatricula
			);
			return res.status(200).json(novaMatriculaCriada);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async deletarMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			await matriculasServices.deletaMatricula({
				id: Number(matriculaId),
				estudante_id: Number(estudanteId),
			});
			return res.status(200).json({
				message: `matricula de id ${matriculaId} foi deletada`,
			});
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async atualizarMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		const corpoDaRequisicao = req.body;
		try {
			await matriculasServices.atualizaMatricula(corpoDaRequisicao, {
				id: Number(matriculaId),
				estudante_id: Number(estudanteId),
			});
			const matriculaAtualizada = await matriculasServices.pegaUmRegistro(
				Number(matriculaId)
			);
			return res.status(200).send(matriculaAtualizada);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async restauraMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			await matriculasServices.restauraMatricula({
				id: Number(matriculaId),
				estudante_id: Number(estudanteId),
			});
			return res.status(200).json({
				message: `matricula com o id ${matriculaId} restaurado`,
			});
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaMatriculas(req, res) {
		const { estudanteId } = req.params;
		try {
			const pessoa = await matriculasServices.pegaMatriculasDeUmEstudante(
				Number(estudanteId)
			);
			const matriculas = await pessoa.getAulasMatriculadas();
			return res.status(200).json(matriculas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaMatriculasPorTurma(req, res) {
		const { turmaId } = req.params;

		try {
			const todasAsMatriculas = await matriculasServices.encontraEcontaRegistros(
                { turma_id: Number(turmaId), status: 'confirmado' },
                { limit: 20, order: [['estudante_id', 'DESC']]}
            );
			return res.status(200).json(todasAsMatriculas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaTurmasLotadas(__, res) {
		const lotacaoTurma = 2;
		try {
			const turmasLotadas = await matriculasServices.encontraEcontaRegistros(
				{ status: 'confirmado' },
                {
                    attributes: ['turma_id'],
                    group: ['turma_id'],
                    having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
                }
                
			);
			return res.status(200).json(turmasLotadas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

}

module.exports = MatriculaController;