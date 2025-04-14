import chalk from "chalk";

function extraLinks(arrayDeLinks) {
    return arrayDeLinks.map(item => Object.values(item).join());
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            try {                
                const response = await fetch(url);
                return `${response.status} - ${response.statusText}`;
            } catch (erro) {
                return manejaErros(erro);
            }
        })
    );
    return arrStatus;
}

function manejaErros(erro) {
    console.log(chalk.black.bgRed('algo deu errado'), erro);
    if(erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrado';
    } else {
        return 'ocorreu algum erro';
    }
}

async function listaValidada(listaDeLinks) {
    const links = extraLinks(listaDeLinks);
    const status = await checaStatus(links);
    return listaDeLinks.map((item, indice) => ({
        ...item, 
        status: status[indice]
    }));
}

export default listaValidada;
