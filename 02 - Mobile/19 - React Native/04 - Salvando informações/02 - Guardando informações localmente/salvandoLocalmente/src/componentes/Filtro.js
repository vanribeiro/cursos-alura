import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { buscarNotas, buscarNotasPorCategoria } from "../servicos/Notas";

function Filtro({ setNotas }) {
	const [categoriaFiltrada, setCategoriaFiltrada] = useState("Todas");

	useEffect(() => {
		buscarPorCategoria();
	}, [categoriaFiltrada]);

	async function buscarPorCategoria() {
		if (categoriaFiltrada !== "Todas") {
			const resultado = await buscarNotasPorCategoria({
				categoria: categoriaFiltrada,
			});
			setNotas(resultado);
		} else {
			const resultado = await buscarNotas();
			setNotas(resultado);
		}
	}

	return (
		<View style={estilos.filtro}>
			<View style={estilos.modalPicker}>
				<Picker
					selectedValue={categoriaFiltrada}
					onValueChange={(categoria) =>
						setCategoriaFiltrada(categoria)
					}>
					<Picker.Item label="Todas as Categorias" value="Todas" />
					<Picker.Item label="Pessoal" value="Pessoal" />
					<Picker.Item label="Trabalho" value="Trabalho" />
					<Picker.Item label="Outros" value="Outros" />
				</Picker>
			</View>
		</View>
	);
}

const estilos = StyleSheet.create({
	filtro: {
		padding: 16,
	},
	modalPicker: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "#EEEEEE",
		marginBottom: 12,
	},
});

export default Filtro;
