import { useCallback, useState } from "react";
import Pessoas from "./Pessoas";
import Chance from "chance";

const chance = new Chance();

const ListaPessoas = () => {
  const [pessoas, setPessoas] = useState([
    {
      nome: "Maria",
      id: chance.guid(),
    },
    {
      nome: "João",
      id: chance.guid(),
    },
  ]);

  const handleClickAdicionarPessoas = () => {
    setPessoas((listaAnterior) => [
      ...listaAnterior,
      {
        nome: chance.name(),
        id: chance.guid(),
      },
    ]);
  };

  const deletarPessoa = useCallback((id) => {
    setPessoas((listaAnterior) =>
      listaAnterior.filter((pessoa) => pessoa.id !== id)
    );
  }, []);

  return (
    <div className="has-text-centered">
      <ul>
        {pessoas.map(pessoa => {
            return (
                <Pessoas
                    id={pessoa.id}
                    key={pessoa.id}
                    nome={pessoa.nome}
                    deletar={deletarPessoa} />
            );
        })}
      </ul>
      <button
        className="button is-primary is-outlined"
        onClick={handleClickAdicionarPessoas}
      >
        Adicionar Pessoa
      </button>
    </div>
  );
};

export default ListaPessoas;
