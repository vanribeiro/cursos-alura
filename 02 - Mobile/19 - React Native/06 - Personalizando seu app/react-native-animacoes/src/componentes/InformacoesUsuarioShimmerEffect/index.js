import React from "react";
import { View, Image } from "react-native";
import styles from "../InformacoesUsuario/styles";
import shimmerGif from '../../assets/shimmer.gif';

export function InformacoesUsuarioShimmerEffect() {
  return (
    <View style={styles.container}>
      <Image source={shimmerGif} style={[styles.foto, { overlayColor: '#EFF0F4' }]} />
      <View style={styles.informacoes}>
          <Image
						source={shimmerGif}
						style={{ width: 250, height: 25 }}
					/>
          <Image
						source={shimmerGif}
						style={{ width: 175, height: 15, marginTop: 8 }}
					/>
      </View>
    </View> 
  );
}