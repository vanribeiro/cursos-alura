import chalk from 'chalk';
import pegaArquivo from "./index.js";
import fs from 'fs';

function imprimeLista(resultado, identificador = '') {
    console.log(
        chalk.yellow(`lista de links`),
        chalk.black.bgCyan(`${identificador}`), resultado
    );
}

async function processaTexto(argumentos) {

    const caminho = argumentos[2];

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
        imprimeLista(resultado);

    } else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);

        arquivos.forEach(async(arquivo) => {
            const lista = await pegaArquivo(`${caminho}/${arquivo}`);
            imprimeLista(lista, arquivo);
        });
    }
    
}

const caminho = process.argv;
processaTexto(caminho);
