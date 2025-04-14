import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './componentes/Header';
import { Box, Card } from './componentes/UI';
import Configuracao from './paginas/Configuracao';
import Sorteio from './paginas/Sorteio';
import './style/index.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <RecoilRoot>
        <Card>
          <Box>
            <Routes>
                <Route path='/' element={<Configuracao />}/>
                <Route path='/sorteio' element={<Sorteio />}/>
            </Routes>
          </Box>
        </Card>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
