import {useState, useEffect} from 'react';
import {carregarProdutores} from '../servicos/carregarDados';
import {ordernarPelaMenorDistancia} from '../utils/ordernar';

function useProdutores(melhoresProdutores: boolean) {
  const [lista, setLista] = useState<Array<any>>([]);

  useEffect(() => {
    const produtores = carregarProdutores();
    const novaLista = [...produtores.lista];
    setLista(novaLista.sort(ordernarPelaMenorDistancia));

    if (melhoresProdutores) {
      const listarMelhoresProdutores = novaLista.filter(
        produtor => produtor.estrelas > 3,
      );
      setLista(listarMelhoresProdutores);
    }
  }, [melhoresProdutores]);

  return lista;
}

export default useProdutores;
