import { StyleSheet, Text } from "react-native";

function Texto({ children, style }) {
    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold') {
        estilo = estilos.textNegrito;
    }

    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    textNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})

export default Texto;