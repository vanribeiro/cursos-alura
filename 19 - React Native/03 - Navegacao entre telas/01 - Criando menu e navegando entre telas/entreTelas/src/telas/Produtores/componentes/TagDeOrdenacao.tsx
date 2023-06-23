import React, {useState, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function TagDeOrdenacao({setOrdenador, ordenador, label}: any) {
  const [selecionado, setSelecionado] = useState<boolean>(false);

  const estilos = estilosFuncao(selecionado);

  const handlePressIn = (): void => {
    selecionado ? setSelecionado(false) : setSelecionado(true);
  };

  const handlePress = (): void => {
    setOrdenador(ordenador);
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPress={handlePress}
      style={estilos.tag}>
      <Text style={estilos.tagTexto}>{label}</Text>
    </TouchableOpacity>
  );
}

const estilosFuncao = (selecionado: boolean) =>
  StyleSheet.create({
    tag: {
      height: 32,
      alignSelf: 'auto',
      backgroundColor: selecionado ? '#2BA38A' : '#f6f6f6',
      borderColor: '#2BA38Aa2',
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginRight: 4,
      marginBottom: 4,
    },
    tagTexto: {
      color: selecionado ? '#f6f6f6' : '#2BA38A',
    },
  });

export default memo(TagDeOrdenacao);
