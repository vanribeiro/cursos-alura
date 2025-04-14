import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";

function Item({ item }) {

    return (
        <>
            <View key={item.nome} style={estilos.item}>
                <Image style={estilos.imagem} source={item.imagem} />
                <Texto style={estilos.nome}>{item.nome}</Texto>
            </View>
        </>
    );
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginBottom: 10,
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal: 16
    },
    imagem: {
        height: 46,
        width: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        color: '#464646'
    }
});

export default Item;