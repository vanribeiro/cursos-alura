import {useState, useEffect} from 'react';
import {carregarProdutores} from '../servicos/carregarDados';
import {
  ordernarPelaMaiorDistancia,
  ordernarPelaMelhorClassificacao,
  ordernarPelaMenorDistancia,
  ordernarPelaPiorClassificacao,
  ordernarPeloNomeAZ,
  ordernarPeloNomeZA,
} from '../utils/ordernar';

function useProdutores() {
  const [titulo, setTitulo] = useState<string>('');
  const [lista, setLista] = useState<Array<any>>([]);
  const [ordernador, setOrdenador] = useState<string>('padrao');

  useEffect(() => {
    const produtores = carregarProdutores();
    setTitulo(produtores.titulo);
    const novaLista = [...produtores.lista];

    if (ordernador === 'padrao') {
      setLista(novaLista);
    }

    if (ordernador === 'nome-a-z') {
      setLista(novaLista.sort(ordernarPeloNomeAZ));
    }

    if (ordernador === 'nome-z-a') {
      setLista(novaLista.sort(ordernarPeloNomeZA));
    }

    if (ordernador === 'menor-distancia') {
      setLista(novaLista.sort(ordernarPelaMenorDistancia));
    }

    if (ordernador === 'maior-distancia') {
      setLista(novaLista.sort(ordernarPelaMaiorDistancia));
    }

    if (ordernador === 'pior-classificacao') {
      setLista(novaLista.sort(ordernarPelaPiorClassificacao));
    }

    if (ordernador === 'melhor-classificacao') {
      setLista(novaLista.sort(ordernarPelaMelhorClassificacao));
    }
  }, [ordernador]);

  return {titulo, lista, setOrdenador};
}

export default useProdutores;
