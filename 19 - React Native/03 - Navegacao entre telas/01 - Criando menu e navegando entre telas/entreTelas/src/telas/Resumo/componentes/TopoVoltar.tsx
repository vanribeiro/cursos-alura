import React from 'react';
import Texto from '../../../componentes/Texto';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import useTextos from '../../../hooks/useTextos';

function TopoVoltar({onPress}: any) {
  const {tituloPedidoSucesso} = useTextos();
  return (
    <View>
      <View style={estilos.topo}>
        <TouchableOpacity style={estilos.botaoVoltar} onPress={onPress}>
          <Texto>
            <Icon name="arrow-left" size={22} color="#464646" />
          </Texto>
        </TouchableOpacity>
        <Texto style={estilos.topoTexto}>{tituloPedidoSucesso}</Texto>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',

    // Android
    elevation: 8,
    backgroundColor: '#fff',

    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  botaoVoltar: {
    height: 24,
    width: 24,
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 'bold',
  },
  topoTexto: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});

export default TopoVoltar;
