const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoutes.js');
const niveis = require('./niveisRoutes.js');
const turmas = require('./turmasRoutes.js');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(
        pessoas,
        niveis,
        turmas
    );
}

