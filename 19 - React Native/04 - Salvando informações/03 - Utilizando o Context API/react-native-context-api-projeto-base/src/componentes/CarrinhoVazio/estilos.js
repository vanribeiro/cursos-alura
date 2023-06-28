import { StyleSheet } from "react-native";

export const estilos = (tema) =>
	StyleSheet.create({
		carrinhoVazio: {
			flex: 1,
			width: "100%",
			alignItems: "center",
			justifyContent: "center",
		},
		carrinhoVazioTitulo: {
			fontSize: 24,
			fontWeight: "bold",
			color: tema.texto,
			marginBottom: 32,
		},
		carrinhoVazioBotaoVoltar: {
			borderColor: tema.border,
			borderWidth: 1,
			padding: 16,
		},
		carrinhoVazioTextoBotaoVoltar: {
			color: tema.texto,
		},
		carrinhoVazioIcon: {
			color: tema.texto,
			marginBottom: 16,
			opacity: 0.5
		},
	});
