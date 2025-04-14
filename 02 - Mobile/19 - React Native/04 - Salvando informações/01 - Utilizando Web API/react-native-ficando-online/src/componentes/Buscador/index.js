import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import estilos from './estilos';

function Buscador({ onPress, value, placeholder, onChangeText }) {
    return (
        <>
            <View style={estilos.container}>
                <TextInput
                    placeholder={placeholder}
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={value}
                    onChangeText={onChangeText}
                    />

                <TouchableOpacity style={estilos.botao} onPress={onPress}>
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}



export default Buscador;