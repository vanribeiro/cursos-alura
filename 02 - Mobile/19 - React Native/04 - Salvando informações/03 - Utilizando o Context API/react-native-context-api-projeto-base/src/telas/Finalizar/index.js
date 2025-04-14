import {
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	Alert,
} from "react-native";
import { estilos } from "./estilos";
import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext";
import { ProdutosContext } from "../../contexts/ProdutosContext";
import Endereco from "../../componentes/Endereco";
import { TotalCarrinho } from "../../componentes/TotalCarrinho";
import { deletarProduto } from "../../servicos/requisicoes/produtos";

export default function Finalizar({ navigation }) {
	const { 
		carrinho, 
		setCarrinho, 
		setQuantidade, 
		setUltimosVistos 
	} = useContext(ProdutosContext);
	const { temaEscolhido } = useContext(TemaContext);
	const estilo = estilos(temaEscolhido);

	 async function finalizarCompra() {
		carrinho.forEach(async (item) => {
			const id = item.id;
			await deletarProduto(id);
		});

		setQuantidade(0);
		setCarrinho([]);
		setUltimosVistos([]);
		
		Alert.alert('Compra finalizada com sucesso!');
		navigation.navigate("Principal");
	}

	return (
		<View style={estilo.container}>
			<StatusBar />
			<Endereco />
			<TotalCarrinho />

			<TouchableOpacity
				style={estilo.botao}
				onPress={() => finalizarCompra()}>
				<Text style={estilo.botaoTexto}>
					Finalizar
				</Text>
			</TouchableOpacity>
		</View>
	);
}
