import { StyleSheet } from "react-native";

export const estilos = (tema) =>
	StyleSheet.create({
		informacoesDeEntrega: {
			width: "92%",
			alignItems: "flex-start",
            paddingVertical: 16,
            marginTop: 16,
            marginHorizontal: 16,
            backgroundColor: '#336982',
            borderRadius: 6
		},
        titulo: {
            fontSize: 20,
            fontWeight: "bold",
            color: tema.titulo,
            paddingLeft: 16,
            marginBottom: 8, 
        },
        endereco: {
            paddingHorizontal: 16,
        },
        paragrafo: {
            color: tema.titulo,
            fontSize: 16
        }
	});
