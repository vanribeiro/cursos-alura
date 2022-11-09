import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import { Box, Card } from './componentes/UI';
import './style/index.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <RecoilRoot>
        <Card>
          <Box>
            <Routes>
                <Route path='/' element={<Formulario />}/>
            </Routes>
          </Box>
        </Card>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
