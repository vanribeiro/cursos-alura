import React from 'react';
import {Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Texto from './Texto';
import topo from '../assets/topo.png';
import gradiente from '../assets/gradiente.png';
import voltar from '../assets/voltar.png';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;
let alturaCalculada = (578 / 768) * width;

function Topo({titulo, imagem = topo, altura = alturaCalculada}: any) {
  const navigation = useNavigation();
  return (
    <>
      <Image
        style={[estilos.topo, (estilos.topo.height = altura)]}
        source={imagem}
      />
      <Image
        style={[estilos.gradiente, (estilos.gradiente.height = altura)]}
        source={gradiente}
      />
      <Texto style={estilos.titulo}>{titulo}</Texto>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={estilos.botaoVoltar}>
        <Image source={voltar} style={estilos.voltar} />
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: 0,
  },
  gradiente: {
    width: '100%',
    height: 0,
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
