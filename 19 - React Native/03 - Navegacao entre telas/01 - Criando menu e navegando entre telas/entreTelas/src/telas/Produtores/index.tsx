import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Produtor from './componentes/Produtor';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import Topo from './componentes/Topo';
import {useNavigation, useRoute} from '@react-navigation/native';

function Produtores({melhoresProdutores}: any) {
  const [exibeMensagem, setExibeMensagem] = useState<boolean>(false);
  const navigation = useNavigation();
  const route = useRoute();
  const lista = useProdutores(melhoresProdutores);
  const {tituloProdutores, mensagemCompra} = useTextos();
  // @ts-ignore
  const nomeCompra: any = route.params?.compra.nome;
  // @ts-ignore
  const timestampCompra: any = route.params?.compra.timestamp;
  const mensagemCompleta: string = mensagemCompra?.replace('$NOME', nomeCompra);

  useEffect(() => {
    setExibeMensagem(!!timestampCompra);
    let timeout: number;

    if (timestampCompra) {
      timeout = setTimeout(() => {
        setExibeMensagem(false);
      }, 3 * 1000);
    }

    return () => clearTimeout(timeout);
  }, [timestampCompra]);

  const topoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        {exibeMensagem && (
          <Text style={estilos.compra}>{mensagemCompleta}</Text>
        )}
        <Text style={estilos.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      style={estilos.lista}
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
  lista: {
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  compra: {
    color: '#464646',
    backgroundColor: '#eaf5f3',
    padding: 16,
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Produtores;
