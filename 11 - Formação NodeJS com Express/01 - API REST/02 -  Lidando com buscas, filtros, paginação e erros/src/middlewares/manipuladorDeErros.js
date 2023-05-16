import mongoose from 'mongoose';

// eslint-disable-next-line no-unused-vars
const manipuladorDeErros = (erro, __, res, next) => {
	console.error(erro);
	
	if(erro instanceof mongoose.Error.CastError){

		res.status(400).json({ 
			message: 'Um ou mais dados fornecidos estão incorretos.', 
			erro: erro 
		});

	} else if( erro instanceof mongoose.Error.ValidationError) {
		
		const messagensErro = Object.values(erro.errors).map(erro => erro.message).join('; ');
		res.status(400).send({ message: `Os seguintes erros foram encontrados: ${messagensErro}` });

	} else {

		res.status(500).json({ 
			message: 'Erro interno no servidor', 
			erro: erro
		});
	}
};

export default manipuladorDeErros;