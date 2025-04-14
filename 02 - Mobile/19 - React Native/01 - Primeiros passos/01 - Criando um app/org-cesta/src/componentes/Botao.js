import { StyleSheet, TouchableOpacity } from "react-native";

function Botao({ children, style }) {
    return (
        <>
            <TouchableOpacity 
                style={[estilos.botao, style]}
            >
                { children }
            </TouchableOpacity>
        </>
    );
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6
    }
});

export default Botao;