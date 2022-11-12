import useListaParticipantes from "../../state/hooks/useListaParticipantes";
import { Item, Lista } from "./style";

const ListaParticipantes = () => {
    const participantes: Array<string> = useListaParticipantes();

    return (
        <Lista>
            {participantes.map(participante => {
                return <Item key={participante}>{participante}</Item>
            })}
        </Lista>
    )
}

export default ListaParticipantes;