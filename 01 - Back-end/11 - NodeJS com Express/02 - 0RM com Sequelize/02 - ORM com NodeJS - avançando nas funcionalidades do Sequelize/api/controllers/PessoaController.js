const { PessoasServices } = require("../services");
const pessoasServices = new PessoasServices();

class PessoaController {
	static async pegarTodasAsPessoas(___, res) {
		try {
			const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
			console.log(todasAsPessoas);
			return res.status(200).json(todasAsPessoas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegarTodasAsPessoasAtivas(___, res) {
		try {
			const todasAsPessoasAtivas =
				await pessoasServices.pegaRegistrosAtivos();
			return res.status(200).json(todasAsPessoasAtivas);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegarPessoaPorId(req, res) {
		const { id } = req.params;
		try {
			const pessoa = await pessoasServices.pegaUmRegistro({ id: Number(id) });
			return res.status(200).json(pessoa);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async deletarPessoa(req, res) {
		const { id } = req.params;
		try {
			await pessoasServices.deletaRegistro(Number(id));
			return res.status(200).json({ message: `${id} deletado` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async cadastrarPessoa(req, res) {
		const corpoDaRequisicao = req.body;
		try {
			const pessoa = await pessoasServices.criaRegistro(
				corpoDaRequisicao
			);
			return res.status(200).json(pessoa);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async atualizarPessoa(req, res) {
		const corpoDaRequisicao = req.body;
		const { id } = req.params;
		try {
			await pessoasServices.atualizaRegistro(
				corpoDaRequisicao,
				Number(id)
			);
			const pessoaAtualizada = await pessoasServices.pegaUmRegistro(
				Number(id)
			);
			return res.status(200).send(pessoaAtualizada);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async restauraPessoa(req, res) {
		const { id } = req.params;
		try {
			await pessoasServices.restauraRegistro(Number(id));
			return res.status(200).json({ message: `id ${id} restaurado` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async cancelaPessoa(req, res) {
		const { estudanteId } = req.params;

		try {
			await pessoasServices.cancelaPessoasEMatriculas(
				Number(estudanteId)
			);
			return res
				.status(200)
				.json({
					message: `matrículas ref. ao estudante id ${estudanteId} canceladas`,
				});
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = PessoaController;
