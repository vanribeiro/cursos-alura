import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Sacola from "./pages/Sacola";
import Favoritos from "./pages/Favoritos";
import Pedidos from "./pages/Pedidos";
import PageNotFound from './pages/Errors/PageNotFound';
import LayoutDefault from './pages/LayoutDefault';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LayoutDefault />}>
            <Route index element={<Home />} />
            <Route path='sacola' element={<Sacola />} />
            <Route path='favoritos' element={<Favoritos />} />
            <Route path='pedidos' element={<Pedidos />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
