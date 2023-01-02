import { emitirTextoEditor } from "./socket-front-documento.js";

const mainContainer = document.querySelector('main');
const editorDeTexto = mainContainer.querySelector('#editor-texto');

editorDeTexto.addEventListener('keyup', (evento) => {
    emitirTextoEditor(evento.target.value);
});

export {
    editorDeTexto
}
