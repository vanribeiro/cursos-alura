import React, { useContext } from "react";
import { View, Text } from "react-native";
import { estilos } from "./estilos";
import { TemaContext } from "../../contexts/TemaContext";
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";

function Endereco() {
    const { temaEscolhido } = useContext(TemaContext);
    const { usuario } = useContext(AutenticacaoContext)
    const estilo = estilos(temaEscolhido);

    return (
        <View style={estilo.informacoesDeEntrega}>
            <Text style={estilo.titulo}>Informações de Entrega</Text>
            <View style={estilo.endereco}>
                <Text style={estilo.paragrafo}>Nome: {usuario.nome}</Text>
                <Text style={estilo.paragrafo}>Endereço: {usuario.endereco}</Text>
                <Text style={estilo.paragrafo}>E-mail: {usuario.email}</Text>
                <Text style={estilo.paragrafo}>Telefone: {usuario.telefone}</Text>
            </View>
        </View>
    );
}

export default Endereco;