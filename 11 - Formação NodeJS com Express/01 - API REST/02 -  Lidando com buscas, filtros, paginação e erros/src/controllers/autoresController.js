import autores from '../models/Autor.js';

class AutorController {

	static listarAutores = async (__, res, next) => {
		try {
			const resultado = await autores.find();
			res.status(200).json(resultado);
		} catch (error) {
			next(error);
		}
	};

	static listarAutorPorId = async (req, res, next) => {
		const id = req.params.id;
		try {

			const resultado = await autores.findById(id);
			resultado !== null 
				? res.status(200).json(resultado)
				: res.status(404).send({ message: 'Id do Autor não localizado.' });

		} catch (error) {
			next(error);
		}

	};

	static cadastrarAutor = async (req, res, next) => {
		let autor = new autores(req.body);
		try {
			const resultado = await autor.save();
			res.status(201).send(resultado.toJSON());
		} catch (error) {
			next(error);
		}
	};

	static atualizarAutor = async (req, res, next) => {
		const id = req.params.id;

		try {			
			await autores.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).send({ message: 'Autor atualizado com sucesso' });
		} catch (error) {
			next(error);
		}
	};

	static excluirAutor = async (req, res, next) => {
		const id = req.params.id;

		try {
			await autores.findByIdAndDelete(id);
			res.status(200).send({ message: 'Autor removido com sucesso' });
		} catch (error) {
			next(error);
		}

	};

}

export default AutorController;