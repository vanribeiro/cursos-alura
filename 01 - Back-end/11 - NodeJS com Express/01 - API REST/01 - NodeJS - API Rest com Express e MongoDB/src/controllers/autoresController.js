import autores from "../models/Autor.js";

class AutoresController {

    static listarAutores = (_, res) => {
        autores.find((_, autores) => {
            res.status(200).json(autores);
        });
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (erro, autores) => {
            if(erro){
                res.status(400).send({message: `${erro.message} - Id do livro não localizado.`});
            } else {
                res.status(200).send(autores)
            }
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((erro) => {
            if(erro){
                res
                    .status(500)
                    .send({message: `${erro.message} - falha ao cadastrar autor`})
            } else{
                res.status(201).send(autor.toJSON());
            }
        });
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, { $set: req.body }, (erro) => {
            if(!erro){
                res.status(200).send({message: 'Autor atualizado com sucesso!'});
            } else{
                res.status(500).send({message: erro.message});
            }
        });
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (erro) => {
            if(!erro){
                res.status(200).send({message: 'Autor deletado com sucesso!'});
            } else{
                res.status(500).send({message: erro.message});
            }
        })
    }

}


export default AutoresController;