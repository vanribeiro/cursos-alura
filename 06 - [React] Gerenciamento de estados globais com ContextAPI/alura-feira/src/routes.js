import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho';
import Feira from './pages/Feira';
import Login from './pages/Login';
import { UsuarioProvider } from './common/contexts/Usuario';
import { CarrinhoProvider } from './common/contexts/Carrinho';
import { PagamentoProvider } from 'common/contexts/Pagamento';

const Router = () => {

    return(
        <>
            <BrowserRouter>
                <Switch>
                    <UsuarioProvider>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <CarrinhoProvider>
                            <PagamentoProvider>
                                <Route path="/feira">
                                    <Feira />
                                </Route>
                                <Route path="/carrinho">
                                    <Carrinho />
                                </Route>
                            </PagamentoProvider>
                        </CarrinhoProvider>
                    </UsuarioProvider>
                </Switch>
            </BrowserRouter>
        </>
    );

}

export default Router