import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatlist: {
        width: '100%',
        position: 'relative',
        zIndex: 0,
    },
    repositoriosTexto: {
        fontSize: 21,
        fontWeight: '600',
        color: '#45565F',
        marginTop: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
    repositorio: {
        width: '100%',
        height: 80,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    repositorioNome: {
        fontSize: 16,
        color: '#444',
        fontWeight: 'bold',
    },
    repositorioData: {
        fontSize: 14,
        color: '#999',
    },
    botao: {
        backgroundColor: '#8A07DA',
        marginTop: 20,
        marginBottom: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textoBotao: {
        fontSize: 16,
        color: '#FFF',
    },
    buscadorNoRodape: {
        width: '100%',
        elevation: 1,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        backgroundColor: '#f1f1f1',
    }
});


export default estilos;