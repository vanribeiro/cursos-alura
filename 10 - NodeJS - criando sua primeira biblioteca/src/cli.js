import chalk from 'chalk';
import pegaArquivo from "./index.js";
import fs from 'fs';
import listaValidada from './http-validacao.js';


async function imprimeLista(
    valida, 
    resultado, 
    identificador = ''
) {
    if(valida){
        console.log(
            chalk.yellow(`lista validada`),
            chalk.black.bgCyan(`${identificador}`), 
            await listaValidada(resultado)
        );
    } else {
        console.log(
            chalk.yellow(`lista de links`),
            chalk.black.bgCyan(`${identificador}`), resultado
        );
    }
}

async function processaTexto(argumentos) {

    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if(erro.code === 'ENOENT'){
            console.log(chalk.red('arquivo ou diretório não existe'));
            return;
        }
    }

    if(fs.lstatSync(caminho).isFile()){

        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado);

    } else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);

        arquivos.forEach(async(arquivo) => {
            const lista = await pegaArquivo(`${caminho}/${arquivo}`);
            imprimeLista(valida, lista, arquivo);
        });
    }
    
}

const caminho = process.argv;
processaTexto(caminho);
