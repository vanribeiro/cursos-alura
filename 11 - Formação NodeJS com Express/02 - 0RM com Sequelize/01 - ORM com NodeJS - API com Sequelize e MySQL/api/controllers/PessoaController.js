const database = require("../models");

class PessoaController {
	static async pegarTodasAsPessoas(___, res) {
		try {
			const todasAsPessoas = await database.Pessoas.findAll();
			return res.status(200).json(todasAsPessoas);
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
		const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)};
		try {
			const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
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
			return res.status(200).json({ message: `matricula de id ${matriculaId} foi deletada` });
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
                    estudante_id: Number(estudanteId)
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
}

module.exports = PessoaController;
