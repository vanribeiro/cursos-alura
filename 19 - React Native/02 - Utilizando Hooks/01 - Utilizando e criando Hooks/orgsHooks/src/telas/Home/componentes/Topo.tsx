import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from './../../../assets/logo.png';
import {carregarTopo} from '../../../servicos/carregarDados';

function Topo() {
  const [texto, setTexto] = useState<any>({});

  useEffect(() => {
    const textoDoTopo = carregarTopo();
    setTexto(textoDoTopo);
  }, []);

  return (
    <>
      <View style={estilos.topo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.boasVindas}>{texto.boasVindas}</Text>
        <Text style={estilos.legenda}>{texto.legenda}</Text>
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

export default Topo;
