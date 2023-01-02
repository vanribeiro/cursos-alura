import { editorDeTexto } from "./documento.js";

const socket = io();


function emitirTextoEditor(texto) {
    socket.emit("texto_editor", texto);
}

socket.on("texto_editor_clientes", (texto) => {
    editorDeTexto.value = texto;
})

export {
    emitirTextoEditor
}