const Services = require('./Services.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class TurmasServices extends Services {
    constructor () {
        super('Turmas');
    }

    async listarTodasAsTurmasPorPerido(data_inicial, data_final){
        const where = {};

        data_inicial || data_final ?  where.data_inicio = {} : null;
        data_inicial ?  where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final: null;

        return this.pegaTodosRegistros({ where });
    }

}

module.exports = TurmasServices