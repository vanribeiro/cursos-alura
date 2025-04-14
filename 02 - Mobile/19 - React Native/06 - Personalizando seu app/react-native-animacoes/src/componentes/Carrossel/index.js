import React, { useEffect, useRef, useState } from "react";
import { View, FlatList, Image } from "react-native";
import styles from "./styles";

function Carrossel({ data, timeout }) {
	const [indice, setIndice] = useState(0);
	const carrosselRef = useRef();

	const alterarPosicaoObjeto = () => {
		indice < data.length - 1 ? setIndice(indice + 1) : setIndice(0);
	};

	useEffect(() => {
		carrosselRef.current.scrollToIndex({ index: indice });

		const intervalo = setInterval(() => {
			alterarPosicaoObjeto();
		}, timeout);

		return () => clearInterval(intervalo);
	}, [indice]);

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				renderItem={({ item, index }) => (
					<Image
						source={item.imagem}
						style={[
							styles.imagem,
							index === data.length - 1
								? { marginRight: 200 }
								: null,
						]}
						resizeMode="contain"
					/>
				)}
				ref={carrosselRef}
			/>
		</View>
	);
}

export default Carrossel;
