import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Feather";
import { estilos } from "./estilos";
import { TemaContext } from "../../contexts/TemaContext";
import { ProdutosContext } from "../../contexts/ProdutosContext";

export default function CarrinhoVazio({ navigation }) {
	const { temaEscolhido } = useContext(TemaContext);
	const { quantidade} = useContext(ProdutosContext);
	const estilo = estilos(temaEscolhido);

    return (
        <>
            {quantidade === 0 && (
                <View style={estilo.carrinhoVazio}>
                    <MaterialCommunityIcons
                        name="shopping-cart"
                        size={50}
                        color="#fff"
                        style={estilo.carrinhoVazioIcon}
                    />
                    <Text style={estilo.carrinhoVazioTitulo}>Carrinho Vazinho</Text>
                    <TouchableOpacity
                        style={estilo.carrinhoVazioBotaoVoltar}
                        onPress={() => navigation.navigate("Principal")}>
                        <Text style={estilo.carrinhoVazioTextoBotaoVoltar}>
                            Voltar para Produtos
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    )

}