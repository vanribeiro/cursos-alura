import editoras from "../models/Editora.js";

class EditorasController {

    static listarEditoras = (_, res) => {
        editoras.find((_, editoras) => {
            res.status(200).json(editoras);
        });
    }

    static listarEditoraPorId = (req, res) => {
        const id = req.params.id;

        editoras.findById(id, (erro, editoras) => {
            if(erro){
                res.status(400).send({message: `${erro.message} - Id do livro não localizado.`});
            } else {
                res.status(200).send(editoras);
            }
        });
    }

    static cadastrarEditora = (req, res) => {
        let editora = new editoras(req.body);
        editora.save((erro) => {
            if(erro){
                res
                    .status(500)
                    .send({message: `${erro.message} - falha ao cadastrar Editora`})
            } else{
                res.status(201).send(editora.toJSON());
            }
        });
    }

    static atualizarEditora = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndUpdate(id, { $set: req.body }, (erro) => {
            if(!erro){
                res.status(200).send({message: 'Editora atualizado com sucesso!'});
            } else{
                res.status(500).send({message: erro.message});
            }
        });
    }

    static deletarEditora = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndDelete(id, (erro) => {
            if(!erro){
                res.status(200).send({message: 'Editora deletado com sucesso!'});
            } else{
                res.status(500).send({message: erro.message});
            }
        })
    }

}


export default EditorasController;