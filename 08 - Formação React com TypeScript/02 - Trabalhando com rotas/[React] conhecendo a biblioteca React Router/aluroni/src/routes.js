import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/cardapio' element={<Cardapio />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;