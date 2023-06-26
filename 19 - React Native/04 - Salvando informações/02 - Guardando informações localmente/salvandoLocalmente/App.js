import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import Nota from "./src/componentes/Nota";
import NotaEditor from "./src/componentes/NotaEditor";

export default function App() {
  const [notas, setNotas] = useState([]);

  async function mostrarNotas() {
    const todasAsChaves = await AsyncStorage.getAllKeys();
    const todasNotas = await AsyncStorage.multiGet(todasAsChaves);
    setNotas(todasNotas);
    console.log(todasNotas)
  }

  useEffect(async () => {
    await mostrarNotas();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} />}
        keyExtractor={nota => nota[0]}
      />
      <NotaEditor mostrarNotas={mostrarNotas} />
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
    paddingTop: 16,
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})

