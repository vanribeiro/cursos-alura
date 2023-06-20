import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

function Estrela({onPress, disabled, grande, preenchida}: any) {
  const getImagem = () => (preenchida ? estrela : estrelaCinza);
  const estilos = estilosFuncao(grande);

  return (
    <>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Image style={estilos.estrela} source={getImagem()} />
      </TouchableOpacity>
    </>
  );
}

const estilosFuncao = (grande: any) =>
  StyleSheet.create({
    estrela: {
      marginRight: 4,
      width: grande ? 24 : 12,
      height: grande ? 24 : 12,
    },
  });

export default Estrela;
