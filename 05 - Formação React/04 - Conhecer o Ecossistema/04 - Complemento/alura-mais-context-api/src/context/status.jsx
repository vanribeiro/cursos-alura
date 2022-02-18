import React from 'react';

const valorPadrao = 'Você ainda não selecionou nenhum cachorro :(';
const StatusContext = React.createContext(valorPadrao);

export default StatusContext;