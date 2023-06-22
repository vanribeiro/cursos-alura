import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import Texto from '../../componentes/Texto';

import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';

function Cesta({detalhes, itens, produtor}: any) {
  const {topoCesta, tituloItens} = useTextos();

  // eslint-disable-next-line react/no-unstable-nested-components
  const Cabecalho = () => {
    return (
      <>
        <Topo titulo={topoCesta} />
        <View style={estilos.cesta}>
          <Detalhes {...detalhes} produtor={produtor} />
          <Texto style={estilos.titulo}>{tituloItens}</Texto>
        </View>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={itens}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListHeaderComponent={() => <Cabecalho />}
        style={estilos.lista}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Cesta;
