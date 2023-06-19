import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {carregarProdutores} from '../../../servicos/carregarDados';
import Produtor from './Produtor';

function Produtores({topo: Topo}: any) {
  const [titulo, setTitulo] = useState<string>('');
  const [listaDeProdutores, setListaDeProdutores] = useState<Array<object>>([]);

  useEffect(() => {
    const produtores = carregarProdutores();
    setTitulo(produtores.titulo);
    setListaDeProdutores(produtores.lista);
  }, []);

  const topoLista = () => {
    return (
      <>
        <Topo />
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
