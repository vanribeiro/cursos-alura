import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import { estilos } from "./estilos";
import { Feather } from "react-native-vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/Feather";
import { useContext } from "react";
import { TemaContext } from "./../../contexts/TemaContext";
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";
import { ProdutosContext } from "../../contexts/ProdutosContext";

export default function Topo({ navigation, onPressResumo }) {
	const { temaEscolhido } = useContext(TemaContext);
	const { usuario } = useContext(AutenticacaoContext);
	const { quantidade } = useContext(ProdutosContext);
	const estilo = estilos(temaEscolhido);

	return (
		<View style={estilo.tituloArea}>
			<Text style={estilo.titulo}>Olá, {usuario.nome}</Text>
			<View style={estilo.carrinhoArea}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Resumo")}>
					<Feather
						name="shopping-cart"
						size={30}
						color="#fff"
						style={estilo.carrinhoIcon}
					/>
				</TouchableOpacity>
				<View
					style={
						quantidade > 0
							? estilo.carrinhoQuantidadeArea
							: estilo.carrinhoQuantidadeAreaEscondido
					}>
					<Text
						style={
							quantidade > 0
								? estilo.carrinhoQuantidade
								: estilo.carrinhoQuantidadeEscondido
						}>
						{quantidade}
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("Configurações")}
					style={estilo.iconArea}>
					<MaterialCommunityIcons
						name="settings"
						size={30}
						color="#fff"
						style={estilo.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
