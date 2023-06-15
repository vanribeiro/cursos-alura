const socket = io();

function emitirAutenticarUsuario(dados) {
    socket.emit('autenticar_usuario', dados);
}

socket.on('autenticado_sucesso', () => {
    alert('autenticado com sucesso!');
    window.location.href = '/';
});

socket.on('autenticado_erro', () => {
    alert('⚠️ Erro na autenticação!');
});

socket.on('usuario_nao_encontrado', () => {
    alert('⚠️ Usuário não encontrado!');
});

export {
    emitirAutenticarUsuario
}