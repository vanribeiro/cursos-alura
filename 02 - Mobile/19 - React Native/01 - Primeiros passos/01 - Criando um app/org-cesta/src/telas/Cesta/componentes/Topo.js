import { Dimensions, Image, StyleSheet } from "react-native";
import topo from '../../../../assets/topo.png';
import Texto from '../../../componentes/Texto';
import cestaMock from "../../../mocks/cesta";

const width = Dimensions.get('screen').width;

function Topo() {

    const { titulo } = cestaMock.topo;

    return (
        <> 
            <Image style={estilos.topo} source={topo} />
            <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    );
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 28,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
});

export default Topo;