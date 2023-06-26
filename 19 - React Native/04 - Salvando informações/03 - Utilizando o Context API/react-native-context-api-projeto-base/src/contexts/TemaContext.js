import { createContext, useState } from "react";
import { escuro, claro } from "../estilosGlobais";

const TemaContext = createContext({});

function TemaProvider({ children }) {
    const [temaAtual, setTemaAtual] = useState('escuro');

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual]
        }}>
            {children}
        </TemaContext.Provider>
    )
}


export {
    TemaContext,
    TemaProvider
}