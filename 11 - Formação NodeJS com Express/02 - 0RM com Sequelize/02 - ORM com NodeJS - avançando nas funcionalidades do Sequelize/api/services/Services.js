const database = require('./../models');

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }

    async pegaTodosRegistros() {
        return database[this.nomeDoModelo].findAll();
	}

    async pegaUmRegistro(id) {
        return database[this.nomeDoModelo].findOne({ where: { id: id } });
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


    
}

module.exports = Services;