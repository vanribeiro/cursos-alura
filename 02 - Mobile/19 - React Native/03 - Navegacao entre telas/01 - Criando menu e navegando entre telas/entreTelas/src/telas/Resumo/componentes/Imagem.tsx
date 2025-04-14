import React from 'react';
import {StyleSheet, Image} from 'react-native';
import topoTrofeu from './../../../assets/topo-trofeu.png';

function Imagem() {
  return <Image style={estilos.imagem} source={topoTrofeu} />;
}

const estilos = StyleSheet.create({
  imagem: {
    width: '100%',
  },
});

export default Imagem;
