import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function TagDeOrdenacao({onPress, label}: any) {
  return (
    <TouchableOpacity onPress={onPress} style={estilos.tag}>
      <Text style={estilos.tagTexto}>{label}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  tag: {
    height: 32,
    alignSelf: 'auto',
    backgroundColor: '#f6f6f6',
    borderColor: '#464646a2',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  tagTexto: {
    color: '#464646',
  },
});

export default TagDeOrdenacao;
