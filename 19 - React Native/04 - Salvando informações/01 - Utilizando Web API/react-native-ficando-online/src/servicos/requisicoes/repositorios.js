import api from '../api';

async function pegarRepositorios(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function atualizarRepositorio(postId, name, data, id) {
    try {
        await api.put(`/repos/${id}`, {
            postId: postId,
            name: name,
            data: data, 
            id: id 
        });

        return 'sucesso';
    } catch (error) {
        console.error(error);
        return 'erro';
    }
}

export {
    pegarRepositorios,
    atualizarRepositorio
}