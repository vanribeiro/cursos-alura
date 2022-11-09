import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import './style/index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Formulario />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
