import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    entrada: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
    botao: {
        backgroundColor: '#8A07DA',
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
});

export default estilos;