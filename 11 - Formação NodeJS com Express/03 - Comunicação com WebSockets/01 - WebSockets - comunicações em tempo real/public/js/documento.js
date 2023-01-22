import { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDoDocumento = parametros.get("nome");

const mainContainer = document.querySelector('main');
const editorDeTexto = mainContainer.querySelector('#editor-texto');
const tituloDoDocumento = document.querySelector('#titulo-documento');
const botaoExcluir = document.querySelector('#excluir-documento');

tituloDoDocumento.textContent = nomeDoDocumento || "Documento sem título";

selecionarDocumento(nomeDoDocumento);

editorDeTexto.addEventListener('keyup', (evento) => {
    emitirTextoEditor({
        texto: evento.target.value, 
        nomeDoDocumento
    });
});

function atulizarEditorDeTexto(texto) {
    editorDeTexto.value = texto;
}

botaoExcluir.addEventListener('click', () => emitirExcluirDocumento(nomeDoDocumento));

function alertarERedirecionar(nome) {
    if(nome === nomeDoDocumento){
        alert(`Documento ${nome} excluído!`);
        window.location.href = '/';
    }
}

export {
    atulizarEditorDeTexto,
    alertarERedirecionar
}
