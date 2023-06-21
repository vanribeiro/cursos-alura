import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TagDeOrdenacao from './TagDeOrdenacao';
import {
  ordernarPelaDistancia,
  ordernarPelaMelhorClassificacao,
  ordernarPelaPiorClassificacao,
  ordernarPeloNomeAZ,
  ordernarPeloNomeZA,
} from '../../../utils/ordernar';

function Ordenador({lista, setListaOrdenada}: any) {
  const [ordernador, setOrdenador] = useState('padrao');

  switch (ordernador) {
    case 'distancia':
      setListaOrdenada(lista.sort(ordernarPelaDistancia));
      break;
    case 'nome-a-z':
      setListaOrdenada(lista.sort(ordernarPeloNomeAZ));
      break;
    case 'nome-z-a':
      setListaOrdenada(lista.sort(ordernarPeloNomeZA));
      break;
    case 'pior':
      setListaOrdenada(lista.sort(ordernarPelaPiorClassificacao));
      break;
    case 'melhor':
      setListaOrdenada(lista.sort(ordernarPelaMelhorClassificacao));
      break;
    default:
      lista;
      break;
  }

  return (
    <View style={estilos.ordenador}>
      <View style={estilos.titulo}>
        <Text style={estilos.texto}>Ordenar por:</Text>
      </View>
      <View style={estilos.tags}>
        <TagDeOrdenacao
          onPress={() => setOrdenador('nome-a-z')}
          label="Nome A-Z"
        />
        <TagDeOrdenacao
          onPress={() => setOrdenador('nome-z-a')}
          label="Nome Z-A"
        />
        <TagDeOrdenacao
          onPress={() => setOrdenador('distancia')}
          label="Distância"
        />
        <TagDeOrdenacao
          onPress={() => setOrdenador('melhor')}
          label="Melhor Classificação"
        />
        <TagDeOrdenacao
          onPress={() => setOrdenador('pior')}
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
  tagSelecionada: {
    backgroundColor: '#464646',
  },
});

export default Ordenador;
