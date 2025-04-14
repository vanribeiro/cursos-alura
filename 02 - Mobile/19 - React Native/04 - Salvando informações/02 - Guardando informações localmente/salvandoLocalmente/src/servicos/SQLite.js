import * as SQLite from "expo-sqlite";

function abrirConexao() {
    const database = SQLite.openDatabase('db.db');
    return database;
}

const bancoDeDados = abrirConexao();

export {
    bancoDeDados
}