import { Text, View, FlatList, StatusBar } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { produtos } from './produtos';
import { estilos } from './estilos';
import { useContext } from 'react';
import { TemaContext } from './../../contexts/TemaContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import Topo from '../../componentes/Topo';

export default function Principal({navigation}) {
  const { temaEscolhido } = useContext(TemaContext);
  const { ultimosVistos } = useContext(ProdutosContext);
  const estilo = estilos(temaEscolhido);

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Topo navigation={navigation} />
      <FlatList
        data={produtos}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={true} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() =>
          <View>
            {ultimosVistos.length > 0 &&
              <View style={estilo.ultimosVistos}>
                <Text style={estilo.tituloUltimosVistos}>Últimos vistos</Text>
                <FlatList
                  data={ultimosVistos}
                  keyExtractor={item => Math.random()}
                  renderItem={({ item }) => <Produto item={item} adicionar={false} />}
                  style={estilo.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>}
            <Text style={[estilo.titulo, { paddingLeft: 16 }]}>Produtos</Text>
          </View>
        }
      />
    </View>
  );
}

