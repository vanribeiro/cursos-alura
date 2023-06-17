import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import Topo from '../../telas/Cesta/componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import cestaMock from '../../mocks/cesta';
import Texto from '../../componentes/Texto';

function Cesta() {
    const { lista, titulo } = cestaMock.itens;

    return (
        <>
            <FlatList 
                data={lista} 
                renderItem={Item} 
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Topo />
                            <View style={estilos.cesta}>
                                <Detalhes />
                                <Texto style={estilos.titulo}>{ titulo }</Texto>
                            </View>
                        </>
                    )
                }}
            />
        </>
    );
}

const estilos = StyleSheet.create({
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        lineHeight: 32,
        fontSize: 20
    },
    cesta: {
        paddingVertical: 8, 
        paddingHorizontal: 16
    }
});

export default Cesta;