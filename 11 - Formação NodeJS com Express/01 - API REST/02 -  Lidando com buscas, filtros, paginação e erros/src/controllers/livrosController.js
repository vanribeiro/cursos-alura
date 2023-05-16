import livros from '../models/Livro.js';

class LivroController {

	static listarLivros = async (__, res, next) => {

		try {
			const resultado = await livros.find().populate('autor').exec();
			res.status(200).json(resultado);
		} catch (error) {
			next(error);
		}
	};

	static listarLivroPorId = async (req, res, next) => {
		const id = req.params.id;

		try {
			const resultado = await livros.findById(id).populate('autor', 'nome').exec();
			res.status(200).send(resultado);
		} catch (error) {
			next(error);
		}

	};

	static cadastrarLivro = async (req, res, next) => {
		let livro = new livros(req.body);

		try {
			await livro.save();
			res.status(201).send(livro.toJSON());
		} catch (error) {
			next(error);
		}

	};

	static atualizarLivro = async (req, res, next) => {
		const id = req.params.id;

		try {
			await livros.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).send({ message: 'Livro atualizado com sucesso' });
		} catch (error) {
			next(error);
		}

	};

	static excluirLivro = async (req, res, next) => {
		const id = req.params.id;

		try {
			await livros.findByIdAndDelete(id);
			res.status(200).send({ message: 'Livro removido com sucesso' });
		} catch (error) {
			next(error);
		}
	};

	static listarLivroPorEditora = async (req, res, next) => {
		const editora = req.query.editora;

		try {
			await livros.find({'editora': editora}, {});
			res.status(200).send(livros);
		} catch (error) {
			next(error);
		}
	};

}

export default LivroController;