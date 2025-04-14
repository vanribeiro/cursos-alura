import React from 'react';
import Texto from '../../../componentes/Texto';
import {View, StyleSheet} from 'react-native';

function Mensagem({mensagemCompleta, tituloParabens}: any) {
  return (
    <View style={estilos.mensagem}>
      <Texto style={estilos.titulo}>{tituloParabens}</Texto>
      <Texto style={estilos.mensagemCompleta}>{mensagemCompleta}</Texto>
    </View>
  );
}

const estilos = StyleSheet.create({
  mensagem: {
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  mensagemCompleta: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Mensagem;
