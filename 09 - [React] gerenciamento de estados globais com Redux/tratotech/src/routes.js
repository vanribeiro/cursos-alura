import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import PaginaPadrao from './paginas/PaginaPadrao';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;