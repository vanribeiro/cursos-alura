import Categoria from 'paginas/Categoria';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import PaginaPadrao from './paginas/PaginaPadrao';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />}/>
                    <Route path='/categoria/:nomeDaCategoria' element={<Categoria />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;