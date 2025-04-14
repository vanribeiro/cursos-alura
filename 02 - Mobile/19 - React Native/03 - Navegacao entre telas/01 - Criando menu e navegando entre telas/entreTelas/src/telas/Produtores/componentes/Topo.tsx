import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import logo from './../../../assets/logo.png';
import useTextos from '../../../hooks/useTextos';
import Texto from '../../../componentes/Texto';

function Topo({melhoresProdutores}: any) {
  const {
    boasVindas,
    legenda,
    legendaMelhoresProdutores,
    tituloMelhoresProdutores,
  } = useTextos();

  return (
    <>
      <View style={estilos.topo}>
        <Image style={estilos.logo} source={logo} />
        <Texto style={estilos.boasVindas}>
          {melhoresProdutores ? tituloMelhoresProdutores : boasVindas}
        </Texto>
        <Texto style={estilos.legenda}>
          {melhoresProdutores ? legendaMelhoresProdutores : legenda}
        </Texto>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  logo: {
    height: 28,
    width: 70,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3',
  },
});

export default memo(Topo);
