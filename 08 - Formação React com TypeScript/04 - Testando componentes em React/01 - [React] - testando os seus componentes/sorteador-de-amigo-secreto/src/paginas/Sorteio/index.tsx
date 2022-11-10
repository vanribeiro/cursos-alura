import useListaParticipantes from "../../state/hooks/useListaParticipantes";

const Sorteio = () => {
    const participantes = useListaParticipantes();
    return (
        <section>
            <form>
                <select name="participante-da-vez" id="participante-da-vez">
                    {
                        participantes.map(participante => {
                            return (
                                <option key={participante}>{participante}</option>
                            )
                        })
                    }
                </select>
            </form>
        </section>
    )
}

export default Sorteio;