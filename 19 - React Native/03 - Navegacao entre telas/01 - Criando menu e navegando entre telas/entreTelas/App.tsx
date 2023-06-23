import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppRotas from './src/rotas/AppRotas';

function App() {
  return (
    <>
      <SafeAreaView style={estilos.tela}>
        <StatusBar />
        <AppRotas />
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
