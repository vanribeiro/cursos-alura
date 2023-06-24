import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Texto({children, style}: any) {
  let estilo = estilos.texto;

  if (style?.fontWeight === 'bold') {
    //@ts-ignore
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
  },
});

export default Texto;
