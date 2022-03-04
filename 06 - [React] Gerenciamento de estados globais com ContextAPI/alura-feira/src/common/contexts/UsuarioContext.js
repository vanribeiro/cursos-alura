import { createContext, useState } from "react";

const UsuarioContext = createContext();

// Exibe o nome do contexto no Dev Tool Context
UsuarioContext.displayName = "Usuário";

const UsuarioProvider = ({ children }) => {
    const [nome, setNome] = useState('');
    const [saldo, setSaldo] = useState(0);
    return (
        <>
            <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
                {children}
            </UsuarioContext.Provider>
        </>
    )
}

export {
    UsuarioContext,
    UsuarioProvider
};