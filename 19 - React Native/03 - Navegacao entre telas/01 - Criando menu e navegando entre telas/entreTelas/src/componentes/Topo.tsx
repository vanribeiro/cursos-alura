import React from 'react';
import {Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Texto from './Texto';
import topo from '../assets/topo.png';
import gradiente from '../assets/gradiente.png';
import voltar from '../assets/voltar.png';

const width = Dimensions.get('screen').width;

function Topo({titulo}: any) {
  return (
    <>
      <Image style={estilos.topo} source={topo} />
      <Image style={estilos.gradiente} source={gradiente} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
      <TouchableOpacity onPress={() => {}} style={estilos.botaoVoltar}>
        <Image source={voltar} style={estilos.voltar} />
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
  gradiente: {
    width: '100%',
    height: (578 / 768) * width,
    position: 'absolute',
    zIndex: 0,
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 28,
    color: '#fff',
    fontWeight: 'bold',
    padding: 16,
  },
  botaoVoltar: {
    position: 'absolute',
    padding: 17,
  },
  voltar: {
    width: 24,
    height: 24,
  },
});

export default Topo;
