import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import TopoVoltar from './componentes/TopoVoltar';
import Mensagem from './componentes/Mensagem';
import useTextos from '../../hooks/useTextos';
import Imagem from './componentes/Imagem';
import Botao from '../../componentes/Botao';

function Resumo() {
  const navigation = useNavigation();
  const route = useRoute();
  // @ts-ignore
  const nomeDaCompra = route.params?.compra.nome;
  const {mensagemCompra, tituloParabens, botaoVoltaParaHome, voltarAoProdutor} =
    useTextos();
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeDaCompra);

  return (
    <View>
      <TopoVoltar onPress={() => navigation.goBack()} />
      <Imagem />
      <Mensagem
        mensagemCompleta={mensagemCompleta}
        tituloParabens={tituloParabens}
      />
      <View style={estilos.botoes}>
        <Botao
          // @ts-ignore
          onPress={() => navigation.navigate('HomeScreen')}
          color="#ffffff"
          backgroundColor="#2A9F85"
          texto={botaoVoltaParaHome}
        />
        <Botao
          //@ts-ignore
          onPress={() => navigation.pop(2)}
          color="#464646"
          backgroundColor="#ffffff"
          texto={voltarAoProdutor}
          borderWidth={1}
          borderColor="#ECECEC"
          elevation={0}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  botoes: {
    paddingTop: 16,
  },
});

export default Resumo;
