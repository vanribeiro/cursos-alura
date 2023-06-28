import { StyleSheet } from "react-native";

export const estilos = (tema) =>
	StyleSheet.create({
		totalCarrinho: {
            flex: 1,
			alignItems: "flex-start",
            paddingVertical: 16,
            marginTop: 16,
            marginHorizontal: 16,
            borderRadius: 6
		},
        paragrafo: {
            color: tema.titulo,
            fontSize: 16
        }
	});