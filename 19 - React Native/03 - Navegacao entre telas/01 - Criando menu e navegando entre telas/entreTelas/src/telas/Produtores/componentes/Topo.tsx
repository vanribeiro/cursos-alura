import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from './../../../assets/logo.png';
import useTextos from '../../../hooks/useTextos';

function Topo({melhoresProdutores}: any) {
  const {boasVindas, legenda, legendaMelhoresProdutores} = useTextos();

  return (
    <>
      <View style={estilos.topo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.boasVindas}>
          {melhoresProdutores ? '' : boasVindas}
        </Text>
        <Text style={estilos.legenda}>
          {melhoresProdutores ? legendaMelhoresProdutores : legenda}
        </Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  logo: {
    height: 28,
    width: 70,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3',
  },
});

export default memo(Topo);
