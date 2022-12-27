const database = require('./../models');

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }

    async pegaTodosRegistros(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: { ...where }});
	}

    async pegaUmRegistro(where = {}) {
        return database[this.nomeDoModelo].findOne({ where: {...where}});
    }
    
    async criaRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }

    async restauraRegistro(id) {
        return database[this.nomeDoModelo].restore({ where: { id: id } })
    }

    async atualizaRegistro(dadosaAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo].update(dadosaAtualizados, { where: { id: id } }, transacao);
    }

    async atualizaRegistros(dadosaAtualizados, where, transacao = {}) {
        return database[this.nomeDoModelo].update(dadosaAtualizados, { where: { ...where } }, transacao);
    }

    async deletaRegistro(id) {
        return database[this.nomeDoModelo].destroy({ where: { id: id } });
    }

    async encontraEcontaRegistros(where = {}, agregadores){
        return database[this.nomeDoModelo].findAndCountAll({ where: { ...where }, ...agregadores });
    }
    
}

module.exports = Services;