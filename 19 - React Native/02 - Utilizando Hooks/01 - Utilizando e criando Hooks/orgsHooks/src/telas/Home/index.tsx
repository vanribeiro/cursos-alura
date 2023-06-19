import React from 'react';
import Topo from './componentes/Topo';
import Produtores from './componentes/Produtores';

function Home() {
  return <Produtores topo={Topo} />;
}

export default Home;
