import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";
import cestaMock from "../../../mocks/cesta";
import Botao from "../../../componentes/Botao";

function Detalhes() {

    const { 
        nome,
        logoDaFazenda,
        nomeDaFazenda,
        descricao,
        preco,
        botao
    } = cestaMock.detalhes;
    
    return (
        <> 
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.marca}>
                <Image style={estilos.logo} source={logoDaFazenda} />
                <Texto style={estilos.nomeDaFazenda}>{nomeDaFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <Botao>
                <Texto style={estilos.textoBotao}>
                    {botao}
                </Texto>
            </Botao>
        </>
    );
}

const estilos = StyleSheet.create({
    marca: {
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 12
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    logo: {
        width: 32,
        height: 32
    },
    nomeDaFazenda: {
        fontSize: 16,
        lineHeight: 26
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    textoBotao: {
        textAlign: "center",
        color: 'white',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
});

export default Detalhes;