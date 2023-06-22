import React from 'react';
import Topo from './componentes/Topo';
import Produtores from './componentes/Produtores';

function Home({melhoresProdutores}: any) {
  return <Produtores melhoresProdutores={melhoresProdutores} topo={Topo} />;
}

export default Home;
