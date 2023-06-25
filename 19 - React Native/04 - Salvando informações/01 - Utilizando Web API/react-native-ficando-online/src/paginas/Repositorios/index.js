import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { buscarPorRepositorio, pegarRepositorios } from '../../servicos/requisicoes/repositorios';
import { useIsFocused } from '@react-navigation/native';
import Filtro from '../../componentes/Filtro';

export default function Repositorios({ navigation, route }) {
    const [repo, setRepo] = useState([]);
    const [nomeRepo, setNomeRepo] = useState('');
    const estaNaTela = useIsFocused();

    useEffect(async () => {
        const resultado = await pegarRepositorios(route.params.id);
        
        if(nomeRepo.length === 0) {
            setRepo(resultado);
        } else {
            const filtrado = await buscarPorRepositorio(route.params.id, nomeRepo);
            setRepo(filtrado);
        }
    }, [estaNaTela, nomeRepo]);

    return (
        <View style={estilos.container}>
            <Filtro 
                placeholder="Filtre repositórios"
                value={nomeRepo}
                onChangeText={(texto) => setNomeRepo(texto)}
            />
            <Text style={estilos.repositoriosTexto}>{
                repo.length < 10 ? `0${repo.length}` : repo.length
            } repositórios criados</Text>
            <TouchableOpacity 
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio')}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>
            <FlatList 
                data={repo}
                style={estilos.flatlist}
                keyExtractor={repo => repo.id}
                renderItem={({item}) => (
                    <TouchableOpacity style={estilos.repositorio} onPress={() => navigation.navigate('InfoRepositorio', { item })}>
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}