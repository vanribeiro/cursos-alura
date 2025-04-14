import {
	Text,
	View,
	FlatList,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import { Produto } from "../../componentes/Produto";
import { estilos } from "./estilos";
import { useContext } from "react";
import { TemaContext } from "./../../contexts/TemaContext";
import { ProdutosContext } from "../../contexts/ProdutosContext";
import Topo from "../../componentes/Topo";
import CarrinhoVazio from "../../componentes/CarrinhoVazio";

export default function Resumo({ navigation }) {
	const { temaEscolhido } = useContext(TemaContext);
	const { quantidade, carrinho } = useContext(ProdutosContext);
	const estilo = estilos(temaEscolhido);

	return (
		<View style={estilo.container}>
			<StatusBar />
			<Topo navigation={navigation} />

			<CarrinhoVazio navigation={navigation} />

			{quantidade > 0 && (
				<>
					<FlatList
						data={carrinho}
						keyExtractor={(item) => Math.random()}
						renderItem={({ item }) => (
							<Produto item={item} adicionar={false} remover={true} />
						)}
						style={estilo.lista}
						showsVerticalScrollIndicator={false}
					/>

					<TouchableOpacity
						style={estilo.botao}
						onPress={() => navigation.navigate("Finalizar")}>
						<Text style={estilo.botaoTexto}>
							Finalizar
						</Text>
					</TouchableOpacity>
				</>
			)}
		</View>
	);
}
