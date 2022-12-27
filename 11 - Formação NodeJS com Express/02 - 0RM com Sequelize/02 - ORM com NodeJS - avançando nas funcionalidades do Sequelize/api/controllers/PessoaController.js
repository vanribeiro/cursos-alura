const database = require("../models");
const Sequelize = require("sequelize");

class PessoaController {
	static async pegarTodasAsPessoas(___, res) {
		try {
			const todasAsPessoas = await database.Pessoas.scope(
				"todos"
			).findAll();
			return res.status(200).json(todasAsPessoas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegarTodasAsPessoasAtivas(___, res) {
		try {
			const todasAsPessoasAtivas = await database.Pessoas.findAll();
			return res.status(200).json(todasAsPessoasAtivas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegarPessoaPorId(req, res) {
		const { id } = req.params;
		try {
			const pessoa = await database.Pessoas.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(pessoa);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async deletarPessoa(req, res) {
		const { id } = req.params;
		try {
			await database.Pessoas.destroy({ where: { id: Number(id) } });
			return res.status(200).json({ message: `${id} deletado` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async cadastrarPessoa(req, res) {
		const corpoDaRequisicao = req.body;
		try {
			const pessoa = await database.Pessoas.create(corpoDaRequisicao);
			return res.status(200).json(pessoa);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async atualizarPessoa(req, res) {
		const corpoDaRequisicao = req.body;
		const { id } = req.params;
		try {
			await database.Pessoas.update(corpoDaRequisicao, {
				where: { id: Number(id) },
			});
			const pessoaAtualizada = await database.Pessoas.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).send(pessoaAtualizada);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async restauraPessoa(req, res) {
		const { id } = req.params;
		try {
			await database.Pessoas.restore({ where: { id: Number(id) } });
			return res.status(200).json({ message: `id ${id} restaurado` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	// endpoint: /pessoas/1/matricula/5
	// endpoint: /pessoas/:estudanteId/matricula/:matriculaId
	static async pegarMatriculaPorId(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			const matricula = await database.Matriculas.findOne({
				where: {
					id: Number(matriculaId),
					estudante_id: Number(estudanteId),
				},
			});
			return res.status(200).json(matricula);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	// endpoint: /pessoas/1/matricula
	// endpoint: /pessoas/:estudanteId/matricula
	static async criaUmaMatricula(req, res) {
		const { estudanteId } = req.params;
		const novaMatricula = {
			...req.body,
			estudante_id: Number(estudanteId),
		};
		try {
			const novaMatriculaCriada = await database.Matriculas.create(
				novaMatricula
			);
			return res.status(200).json(novaMatriculaCriada);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	// endpoint: /pessoas/1/matricula/5
	// endpoint: /pessoas/:estudanteId/matricula/:matriculaId
	static async deletarMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			await database.Matriculas.destroy({
				where: {
					id: Number(matriculaId),
					estudante_id: Number(estudanteId),
				},
			});
			return res.status(200).json({
				message: `matricula de id ${matriculaId} foi deletada`,
			});
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	// endpoint: /pessoas/1/matricula/8
	// endpoint: /pessoas/:estudanteId/matricula/:matriculaId
	static async atualizarMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		const corpoDaRequisicao = req.body;
		try {
			await database.Matriculas.update(corpoDaRequisicao, {
				where: {
					id: Number(matriculaId),
					estudante_id: Number(estudanteId),
				},
			});
			const matriculaAtualizada = await database.Matriculas.findOne({
				where: {
					id: Number(matriculaId),
				},
			});
			return res.status(200).send(matriculaAtualizada);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	// endpoint: /pessoas/1/matricula/8
	// endpoint: /pessoas/:estudanteId/matricula/:matriculaId/restaura
	static async restauraMatricula(req, res) {
		const { estudanteId, matriculaId } = req.params;
		try {
			await database.Matriculas.restore({
				where: { id: matriculaId, estudante_id: Number(estudanteId) },
			});
			return res.status(200).json({
				message: `matricula com o id ${matriculaId} restaurado`,
			});
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	// endpoint: /pessoas/1/matriculas
	// endpoint: /pessoas/:estudanteId/matriculas
	static async pegaMatriculas(req, res) {
		const { estudanteId } = req.params;
		try {
			const pessoa = await database.Pessoas.findOne({
				where: { id: Number(estudanteId) },
			});
			const matriculas = await pessoa.getAulasMatriculadas();
			return res.status(200).json(matriculas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaMatriculasPorTurma(req, res) {
		const { turmaId } = req.params;
		try {
			const todasAsMatriculas = await database.Matriculas.findAndCountAll(
				{
					where: { turma_id: Number(turmaId), status: "confirmado" },
					limit: 20,
					order: [["estudante_id", "ASC"]],
				}
			);
			return res.status(200).json(todasAsMatriculas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaTurmasLotadas(__, res) {
		const lotacaoTurma = 2;
		try {
			const turmasLotadas = await database.Matriculas.findAndCountAll({
				where: { status: "confirmado" },
				attributes: ["turma_id"],
				group: ["turma_id"],
				having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`),
			});
			return res.status(200).json(turmasLotadas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async cancelaPessoa(req, res) {
		const { estudanteId } = req.params;

		try {
			database.sequelize.transaction(async (transacao) => {
				await database.Pessoas.update(
					{ ativo: false },
					{ where: { id: Number(estudanteId) } },
					{ transaction: transacao }
				);
				await database.Matriculas.update(
					{ status: "cancelado" },
					{ where: { estudante_id: Number(estudanteId) } },
					{ transaction: transacao }
				);
				return res
					.status(200)
					.json({
						message: `matrículas ref. ao estudante id ${estudanteId} canceladas`,
					});
			});
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = PessoaController;
