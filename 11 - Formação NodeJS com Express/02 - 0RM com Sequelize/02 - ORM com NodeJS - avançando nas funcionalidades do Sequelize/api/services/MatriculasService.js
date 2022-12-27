const Services = require('./Services.js');
const database = require('./../models');
const Sequelize = require("sequelize");

class MatriculasServices extends Services {
    constructor () {
        super('Matriculas');
        this.pessoas = new Services('Pessoas');
    }

    async encontraEcontaTurmas(lotacaoTurma) {
        return await database.Matriculas.findAndCountAll({
            where: { status: "confirmado" },
            attributes: ["turma_id"],
            group: ["turma_id"],
            having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
        });
	}

    async encontraUmaMatricula(where){
        return database[this.nomeDoModelo].findOne({ where: { ...where } });
    }

    async atualizaMatricula (dadosaAtualizados, where) {
        return database[this.nomeDoModelo].update(dadosaAtualizados, { where: { ...where } });
    }

    async deletaMatricula (where) {
        return database[this.nomeDoModelo].destroy({ where: { ...where } });
    }

    async restauraMatricula (where) {
        return database[this.nomeDoModelo].restore({ where: { ...where } });
    }

    async pegaTodasAsMatriculas (id) {
        return database.Matriculas.findAndCountAll({
                where: { turma_id: Number(id), status: "confirmado" },
                limit: 20,
                order: [["estudante_id", "ASC"]],
            });
    }

    async pegaMatriculasDeUmEstudante(id){
        return this.pessoas.pegaUmRegistro(id);
    }

}

module.exports = MatriculasServices