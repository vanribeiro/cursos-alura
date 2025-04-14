import { memo } from "react";

const Pessoas = ({ nome, deletar, id }) => {
    console.log(`pessoa: ${nome}`);
    const handleClickDeletar = () => deletar(id);
    
    return(
        <li className="box mb-3">
            {nome}
            <button className="button is-danger ml-2" onClick={handleClickDeletar}>
                Me delete
            </button>
        </li>
    )
}

export default memo(Pessoas);