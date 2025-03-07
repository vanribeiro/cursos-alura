import { bancoDeDados } from './SQLite';

function criarTabela() {
    bancoDeDados.transaction(transaction => {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS ' +   
        'Notas ' +
        '(id INTEGER PRIMARY KEY AUTOINCREMENT, ' + 
        'titulo TEXT, categoria TEXT, texto TEXT);'
        );
    })
}

async function adicionarNota({ titulo, categoria, texto }) {
    return new Promise((resolve, reject) => {
        bancoDeDados.transaction((transaction) => {
            transaction.executeSql(
            'INSERT INTO Notas (titulo, categoria, texto) ' + 
            'VALUES (?, ?, ?);', [titulo, categoria, texto],
            () => resolve('Nota adicionada com sucesso!'),
            () => reject('Erro ao tentar adicionar uma nota...'));
        });
    });
}

async function atualizarNota({ titulo, categoria, texto, id }) {
    return new Promise((resolve, reject) => {
        bancoDeDados.transaction((transaction) => {
            transaction.executeSql(
            'UPDATE Notas SET titulo = ?, categoria = ?, texto = ? WHERE id = ?;', 
            [titulo, categoria, texto, id],
            () => resolve('Nota atualizada com sucesso!'),
            () => reject('Erro ao tentar atualizar nota...'));
        });
    });
}

async function removerNota({id}) {
    return new Promise((resolve, reject) => {
        bancoDeDados.transaction((transaction) => {
            transaction.executeSql(
            'DELETE FROM Notas WHERE id = ?;', [id],
            () => resolve('Nota removida!'),
            () => reject('Erro ao tentar remover nota...'));
        });
    });
}

async function buscarNotas() {
    return new Promise((resolve, reject) => {
        bancoDeDados.transaction((transaction) => {
            transaction.executeSql(
            'SELECT * FROM Notas;', [],
            (___, resultado) => resolve(resultado.rows._array),
            () => reject('Erro ao tentar buscar notas...'));
        });
    });
}

async function buscarNotasPorCategoria({categoria}) {
    return new Promise((resolve, reject) => {
        bancoDeDados.transaction((transaction) => {
            transaction.executeSql(
            'SELECT * FROM Notas WHERE categoria = ?;', [categoria],
            (___, resultado) => resolve(resultado.rows._array),
            () => reject('Erro ao tentar buscar notas...'));
        });
    });
}

export {
    criarTabela,
    adicionarNota,
    buscarNotas,
    atualizarNota,
    removerNota,
    buscarNotasPorCategoria
}