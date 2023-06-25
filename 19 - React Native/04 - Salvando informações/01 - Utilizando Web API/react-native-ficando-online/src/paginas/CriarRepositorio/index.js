import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { criarRepositorio } from '../../servicos/requisicoes/repositorios';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function criar() {
        const resultado = await criarRepositorio(
            nome, 
            data,
            route.params.id,
        );

        if(resultado === 'sucesso') {
            Alert.alert('Repositório criado!');
            navigation.goBack();
        } else {
            Alert.alert('Erro ao tentar criar o repositório...');
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={(texto) => setNome(texto)}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={(texto) => setData(texto)}
            />
            <TouchableOpacity style={estilos.botao} onPress={() => criar()}>
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
