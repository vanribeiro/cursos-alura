import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (__, res) => {

        livros
            .find()
            .populate('autor')
            .exec((_, livros) => {
            res.status(200).json(livros);
        });
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros
            .findById(id)
            .populate('autor', 'nome')
            .populate('editora', 'nome')
            .exec((erro, livros) => {
                if(erro){
                    res.status(400).send({message: `${erro.message} - Id do livro não localizado.`});
                } else {
                    res.status(200).send(livros)
                }
        });
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((erro) => {
            if(erro){
                res
                    .status(500)
                    .send({message: `${erro.message} - falha ao cadastrar livro`})
            } else{
                res.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body }, (erro) => {
            if(!erro){
                res.status(200).send({message: 'Livro atualizado com sucesso!'});
            } else{
                res.status(500).send({message: erro.message});
            }
        });
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (erro) => {
            if(!erro){
                res.status(200).send({message: 'Livro deletado com sucesso!'});
            } else{
                res.status(500).send({message: erro.message});
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        let editora = req.query.editora;
        livros.find(
            {'editora': editora}, {},
            (erro, livros) => {
                if(!erro){
                    res.status(200).send(livros);
                } else{
                    res.status(500).send({message: erro.message});
                }
        });
    }

    static listarLivrosFavoritos = async(req, res) => {
        let ehFavorito = req.path.includes('favoritos');
        livros.find(
            {favorito: true}, 
            (erro, livros) => {

                if(ehFavorito){
                    if(!erro){
                        res.status(200).send(
                            livros.length === 0 
                            ? { message: 'Parece que você não adicionou nenhum livro como favorito.'}
                            : livros
                        );
                    } else{
                        res.status(500).send({message: erro.message});
                    }
                }
        });
        

    }

}


export default LivroController;