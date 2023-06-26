import { bancoDeDados } from "./SQLite";

function criarTabela() {
    bancoDeDados.transaction(transaction => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +   
        "Notas " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, " + 
        "titulo TEXT, categoria TEXT, texto TEXT);"
        );
    })
}

export {
    criarTabela
}