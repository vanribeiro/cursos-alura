import { createContext, useEffect, useState } from "react";
import { escuro, claro } from "../estilosGlobais";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TemaContext = createContext({});

function TemaProvider({ children }) {
    const [temaAtual, setTemaAtual] = useState('escuro');

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    useEffect(async () => {
        const temaSalvo = await AsyncStorage.getItem('@tema');
        temaSalvo ? setTemaAtual(temaSalvo) : setTemaAtual(temaAtual);
    }, [temaAtual]);

    async function salvarTemaNoDispositivo(tema) {
        try {            
            await AsyncStorage.setItem('@tema', tema);
            setTemaAtual(tema);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <TemaContext.Provider value={{
            temaAtual,
            temaEscolhido: temas[temaAtual],
            salvarTemaNoDispositivo
        }}>
            {children}
        </TemaContext.Provider>
    )
}


export {
    TemaContext,
    TemaProvider
}