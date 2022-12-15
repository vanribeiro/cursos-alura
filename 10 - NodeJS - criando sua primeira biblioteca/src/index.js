import fs from 'fs';
import chalk from "chalk";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.]*.[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(capitura => ({[capitura[1]]: capitura[2]}));
    return resultados.length !== 0 ? resultados : "Não há links no arquivo";
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, '- não há arquivo no diretório'));
}

// Async: async/await
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

export default pegaArquivo;
