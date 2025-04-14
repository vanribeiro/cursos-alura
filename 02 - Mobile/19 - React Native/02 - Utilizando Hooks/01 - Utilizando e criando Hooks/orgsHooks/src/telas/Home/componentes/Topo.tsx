import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from './../../../assets/logo.png';
import useTextoTopo from '../../../hooks/useTopo';

function Topo() {
  const {boasVindas, legenda} = useTextoTopo();

  return (
    <>
      <View style={estilos.topo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.boasVindas}>{boasVindas}</Text>
        <Text style={estilos.legenda}>{legenda}</Text>
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
