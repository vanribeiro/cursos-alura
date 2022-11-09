import useListaParticipantes from "../../state/hooks/useListaParticipantes";

const ListaParticipantes = () => {
    const participantes: Array<string> = useListaParticipantes();

    return (
        <ul>
            {participantes.map(participante => {
                return <li key={participante}>{participante}</li>
            })}
        </ul>
    )
}

export default ListaParticipantes;