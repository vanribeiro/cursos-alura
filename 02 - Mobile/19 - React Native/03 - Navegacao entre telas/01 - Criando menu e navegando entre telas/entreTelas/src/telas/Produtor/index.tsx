import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import Cesta from './componentes/Cesta';
import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import topoPng from '../../assets/produtores/topo.png';
import Texto from '../../componentes/Texto';

function Produtor() {
  const route = useRoute();
  const {tituloProdutor, tituloCestas} = useTextos();
  const {nome, imagem, cestas}: any = route.params;

  // eslint-disable-next-line react/no-unstable-nested-components
  const TopoLista = () => {
    return (
      <>
        <Topo titulo={tituloProdutor} imagem={topoPng} altura={150} />
        <View style={estilos.conteudo}>
          <View style={estilos.logo}>
            <Image source={imagem} style={estilos.produtorImage} />
            <Texto style={estilos.produtor}>{nome}</Texto>
          </View>
          <Texto style={estilos.cestas}>{tituloCestas}</Texto>
        </View>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={cestas}
        renderItem={({item}) => <Cesta {...item} produtor={{nome, imagem}} />}
        style={estilos.lista}
        ListHeaderComponent={TopoLista}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  conteudo: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  produtorImage: {
    width: 62,
    height: 62,

    marginTop: -23,

    borderRadius: 6,
  },
  produtor: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  cestas: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});

export default Produtor;
