import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

function Cesta() {
    return <>
        <Image style={estilos.topo} source={topo} />
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verdura </Text>
            <View style={estilos.marca}>
                <Image style={estilos.logo} source={logo} />
                <Text style={estilos.nomeDaFazenda}>Jenny Jack Farm </Text>
            </View>
            <Text style={estilos.descricao}>
                Uma cesta com produtos selecionados 
                cuidadosamente da fazendo direto para sua cozinha 
            </Text>
            <Text style={estilos.preco}>R$ 40,00 </Text>

        </View>
    </>;
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
    cesta: {
        paddingVertical: 8, 
        paddingHorizontal: 16
    },
    marca: {
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 12
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        fontFamily: 'MontserratBold'
    },
    logo: {
        width: 32,
        height: 32
    },
    nomeDaFazenda: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'MontserratRegular'
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});

export default Cesta;