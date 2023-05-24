import NaoEncontrado from '../erros/NaoEncontrado.js';
import  { autores, livros } from '../models/index.js';

const LIVRO_ID_NOT_FOUND = 'Id do livro não localizado';

async function processaBusca(parametros) {

	const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;
	let busca = {};

	if(editora) busca.editora = editora;
	if(titulo) busca.titulo = { $regex: titulo, $options: 'i' };
	if(minPaginas) busca.numeroPaginas = { $gte: minPaginas };
	if(maxPaginas) busca.numeroPaginas = { $lte: maxPaginas };
	if(minPaginas && maxPaginas) busca.numeroPaginas = { $gte: minPaginas, $lte: maxPaginas };
	if(nomeAutor) {
		const autor = await autores.findOne({ nome: nomeAutor });

		autor !== null
			? busca.autor = autor._id
			: busca = null;
	}

	return busca;
}

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
			resultado !== null
				? res.status(200).json(resultado)
				: next(new NaoEncontrado(LIVRO_ID_NOT_FOUND));

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
			
			const resultado = await livros.findByIdAndUpdate(id, {$set: req.body});
			resultado !== null
				? res.status(200).json({ message: 'Livro atualizado com sucesso.' })
				: next(new NaoEncontrado(LIVRO_ID_NOT_FOUND));

		} catch (error) {
			next(error);
		}

	};

	static excluirLivro = async (req, res, next) => {
		const id = req.params.id;

		try {
			const resultado = await livros.findByIdAndDelete(id);
			resultado 
				? res.status(200).send({ message: 'Livro removido com sucesso' })
				: next(new NaoEncontrado(LIVRO_ID_NOT_FOUND));
		} catch (error) {
			next(error);
		}
	};



	static listarLivroPorFiltro = async (req, res, next) => {
		
		try {

			const busca = await processaBusca(req.query); 
			if(busca !== null) {
				const result = await livros.find(busca, {}).populate('autor');
				res.status(200).send(result);
			} else {
				res.status(200).send([]);
			}
			

		} catch (error) {
			next(error);
		}
	};

}

export default LivroController;