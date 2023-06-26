import { createContext, useState } from 'react';

const AutenticacaoContext = createContext();

const mock = {
    nome: 'Vanessa',
    endereco: 'Rua da Neves, 59, Marquês',
    telefone: '(12) 3333-3333',
    email: 'van',
    senha: '123'
}

function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState({});

    const login = (email, senha) => {
        if(
            email === 'van' && 
            senha === '123'
        ){
            setUsuario(mock);
            return 'ok';
        } else {
            return 'E-mail ou senha incorretos';
        }
    }

    return (
        <AutenticacaoContext.Provider value={{usuario, login}}>
            {children}
        </AutenticacaoContext.Provider>
    );
}

export {
    AutenticacaoContext,
    AutenticacaoProvider
}