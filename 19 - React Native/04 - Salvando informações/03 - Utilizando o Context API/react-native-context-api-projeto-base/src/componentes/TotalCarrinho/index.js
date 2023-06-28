import React, { useContext } from "react";
import { View, Text } from "react-native";
import { estilos } from "./estilos";
import { TemaContext } from "../../contexts/TemaContext";
import { ProdutosContext } from "../../contexts/ProdutosContext";

function TotalCarrinho() {
	const { temaEscolhido } = useContext(TemaContext);
	const { quantidade, carrinho } = useContext(ProdutosContext);
	const estilo = estilos(temaEscolhido);

    const valorInicial = 0;
	const precoTotal = carrinho.reduce(
		(precoTotal, precoAtual) => precoTotal + precoAtual.preco,
		valorInicial
	);

	const quantidadeFormatada = quantidade < 10 ? `0${quantidade}` : quantidade;
	const precoFormatado = precoTotal.toFixed(2).toLocaleString().replace('.', ',');

	return (
		<View style={estilo.totalCarrinho}>
			<Text style={estilo.paragrafo}>
				Quantidade: {quantidadeFormatada}
			</Text>
			<Text style={estilo.paragrafo}>Preço Total: R$ {precoFormatado}</Text>
		</View>
	);
}

export { TotalCarrinho };
