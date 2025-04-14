import { createContext, useState } from "react";

const GlobalContext = createContext({});

function InfoProvider({ children }) {
    const valor = 150;
    const [nome, setNome] = useState('Van');
    return(
        <GlobalContext.Provider value={{valor, nome, setNome}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {
    GlobalContext,
    InfoProvider
}