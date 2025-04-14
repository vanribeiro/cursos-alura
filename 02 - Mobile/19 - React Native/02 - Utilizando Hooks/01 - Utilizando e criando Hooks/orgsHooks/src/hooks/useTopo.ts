import {useEffect, useState} from 'react';
import {carregarTopo} from '../servicos/carregarDados';

function useTextoTopo() {
  const [texto, setTexto] = useState<any>({});

  useEffect(() => {
    const textoDoTopo = carregarTopo();
    setTexto(textoDoTopo);
  }, []);

  return {...texto};
}

export default useTextoTopo;
