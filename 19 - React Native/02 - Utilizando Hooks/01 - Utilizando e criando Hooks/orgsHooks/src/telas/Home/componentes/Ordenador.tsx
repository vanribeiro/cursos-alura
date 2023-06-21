import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TagDeOrdenacao from './TagDeOrdenacao';

function Ordenador({setOrdenador}: any) {
  return (
    <View style={estilos.ordenador}>
      <View style={estilos.titulo}>
        <Text style={estilos.texto}>Ordenar por:</Text>
      </View>
      <View style={estilos.tags}>
        <TagDeOrdenacao
          setOrdenador={setOrdenador}
          ordenador="nome-a-z"
          label="Nome A-Z"
        />
        <TagDeOrdenacao
          setOrdenador={setOrdenador}
          ordenador="nome-z-a"
          label="Nome Z-A"
        />
        <TagDeOrdenacao
          setOrdenador={setOrdenador}
          ordenador="menor-distancia"
          label="Menor Distância"
        />
        <TagDeOrdenacao
          setOrdenador={setOrdenador}
          ordenador="maior-distancia"
          label="Maior Distância"
        />
        <TagDeOrdenacao
          setOrdenador={setOrdenador}
          ordenador="melhor-classificacao"
          label="Melhor Classificação"
        />
        <TagDeOrdenacao
          setOrdenador={setOrdenador}
          ordenador="pior-classificacao"
          label="Pior Classificação"
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  ordenador: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  titulo: {
    width: '100%',
    marginBottom: 4,
  },
  texto: {
    fontSize: 16,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

export default memo(Ordenador);
