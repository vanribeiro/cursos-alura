import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Produtor from './componentes/Produtor';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import Topo from './componentes/Topo';
import {useNavigation} from '@react-navigation/native';

function Produtores({melhoresProdutores}: any) {
  const navigation = useNavigation();
  const lista = useProdutores(melhoresProdutores);
  const {tituloProdutores} = useTextos();

  const topoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => (
        <Produtor
          {...item}
          aoPressionar={() => {
            // @ts-ignore
            navigation.navigate('Produtor', item);
          }}
        />
      )}
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
