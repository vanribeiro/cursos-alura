import {useState, useEffect} from 'react';
import {carregarProdutores} from '../servicos/carregarDados';

function useProdutores() {
  const [titulo, setTitulo] = useState<string>('');
  const [listaDeProdutores, setListaDeProdutores] = useState<Array<any>>([]);

  useEffect(() => {
    const produtores = carregarProdutores();
    setTitulo(produtores.titulo);
    setListaDeProdutores(produtores.lista);
  }, []);

  return [titulo, listaDeProdutores];
}

export default useProdutores;
