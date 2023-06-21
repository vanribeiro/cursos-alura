import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Produtor from './Produtor';
import Ordenador from './Ordenador';
import useProdutores from '../../../hooks/useProdutores';

function Produtores({topo: Topo}: any) {
  const [listaOrdenada, setListaOrdenada] = useState(null);
  const [titulo, listaDeProdutores] = useProdutores();

  const topoLista = () => {
    return (
      <>
        <Topo />
        <Ordenador
          lista={listaDeProdutores}
          setListaOrdenada={setListaOrdenada}
        />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={listaDeProdutores}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}: any) => nome}
      ListHeaderComponent={topoLista}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});

export default Produtores;
