import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function Botao({
  texto,
  onPress,
  color = '#000000',
  backgroundColor = 'transparent',
  borderWidth = 0,
  borderColor = 'transparent',
  elevation = 3,
  shadowColor = '#000',
  shadowOffset = {
    width: 0,
    height: 2,
  },
  shadowOpacity = 0.23,
  shadowRadius = 2.62,
}: any) {
  const estilos = StyleSheet.create({
    botao: {
      backgroundColor: backgroundColor,
      borderWidth: borderWidth,
      borderColor: borderColor,
      height: 58,
      marginHorizontal: 16,
      marginVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,

      // Android
      elevation: elevation,

      // iOS
      shadowColor: shadowColor,
      shadowOffset: shadowOffset,
      shadowOpacity: shadowOpacity,
      shadowRadius: shadowRadius,
    },
    textoBotao: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      lineHeight: 16,
      color: color,
    },
  });

  return (
    <TouchableOpacity style={estilos.botao} onPress={onPress}>
      <Text style={estilos.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

export default Botao;
