import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Nota from "./src/componentes/Nota";
import NotaEditor from "./src/componentes/NotaEditor";
import { buscarNotas, criarTabela } from "./src/servicos/Notas";

export default function App() {
  const [notas, setNotas] = useState([]);
  const [notaSelecionada, setNotaSelecionada] = useState({});

  async function mostrarNotas() {
    const todasAsNotas = await buscarNotas();
    setNotas(todasAsNotas);
  }

  useEffect( () => {
    criarTabela();
    mostrarNotas();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada} />}
        keyExtractor={nota => nota.id}
      />
      <NotaEditor mostrarNotas={mostrarNotas} notaSelecionada={notaSelecionada} />
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

