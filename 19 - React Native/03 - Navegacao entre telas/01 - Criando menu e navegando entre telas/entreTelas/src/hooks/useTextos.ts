import {useEffect, useState} from 'react';
import {carregarTextos} from '../servicos/carregarDados';

function useTextos() {
  const [texto, setTexto] = useState<any>({});

  useEffect(() => {
    const textoDoTopo = carregarTextos();
    setTexto(textoDoTopo);
  }, []);

  return {...texto};
}

export default useTextos;
