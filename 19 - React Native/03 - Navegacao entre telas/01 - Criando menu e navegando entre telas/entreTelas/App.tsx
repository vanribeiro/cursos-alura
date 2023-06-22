import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// import Home from './src/telas/Home';
import useProdutores from './src/hooks/useProdutores';
import Cesta from './src/telas/Cesta';

function App() {
  const produtores = useProdutores(false);
  return (
    <>
      <SafeAreaView style={estilos.tela}>
        <StatusBar />
        {/* <Home melhoresProdutores={false} /> */}
        {produtores.length > 0 && (
          <Cesta
            produtor={{
              nome: produtores[0].nome,
              imagem: produtores[0].imagem,
            }}
            {...produtores[0].cestas[0]}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
});

export default App;
