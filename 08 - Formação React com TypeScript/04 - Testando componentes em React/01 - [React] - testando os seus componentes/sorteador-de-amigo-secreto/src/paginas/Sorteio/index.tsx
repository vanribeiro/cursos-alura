import { useState } from "react";
import useListaParticipantes from "../../state/hooks/useListaParticipantes";
import useResultadoDoSorteio from "../../state/hooks/useResultadoDoSorteio";

const Sorteio = () => {
	const [participanteDaVez, setParticipanteDaVez] = useState<string>("");
	const [amigoSecreto, setAmigoSecreto] = useState<string>("");
	const participantes = useListaParticipantes();
    const resultado = useResultadoDoSorteio();

	const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
        if(resultado.has(participanteDaVez)){
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
	};

	return (
		<section>
			<form onSubmit={sortear}>
				<select
					onChange={(evento) =>
						setParticipanteDaVez(evento.target.value)
					}
					required
					name="participante-da-vez"
					id="participante-da-vez"
					placeholder="Selecione o seu nome"
					value={participanteDaVez}>
					{participantes.map((participante) => {
						return (
							<option key={participante}>{participante}</option>
						);
					})}
				</select>
				<button>Sortear</button>
			</form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
		</section>
	);
};

export default Sorteio;
