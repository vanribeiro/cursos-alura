import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import AppRouter from './routes';

// Sem React Router DOM 
// const componenteAtual = window.location.pathname === '/' ? <Inicio /> : <Cardapio />;

ReactDOM.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
    document.getElementById('root')
);