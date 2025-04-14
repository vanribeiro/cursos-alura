import api from "../api"

async function buscarUsuario(usuario) {
    try {
        const resultado = await api.get(`/users?login=${usuario}`);
        return resultado.data[0];
    } catch (error) {
        console.error(error);
        return {};
    }
}


export {
    buscarUsuario
}