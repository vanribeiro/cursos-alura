import { useState } from "react";
import { Title, OrangeButton, Box } from "../../componentes/UI";
import useListaParticipantes from "../../state/hooks/useListaParticipantes";
import useResultadoDoSorteio from "../../state/hooks/useResultadoDoSorteio";
import { Form, CTA, Select, NomeDoAmigoSecreto, ImagemDoRodape } from "./style";
import paperPlane from "./../../assets/paper-plane.png";

const Sorteio = () => {
	const [participanteDaVez, setParticipanteDaVez] = useState<string>("");
	const [amigoSecreto, setAmigoSecreto] = useState<string>("");
	const participantes = useListaParticipantes();
	const resultado = useResultadoDoSorteio();

	const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		if (resultado.has(participanteDaVez)) {
			setAmigoSecreto(resultado.get(participanteDaVez)!);
		}
	};

	return (
		<Box>
			<section>
				<Title>Quem vai tirar o papelzinho?</Title>
				<Form onSubmit={sortear}>
					<Select
						onChange={(evento) =>
							setParticipanteDaVez(evento.target.value)
						}
						required
						name="participante-da-vez"
						id="participante-da-vez"
						title="Escolha seu amigo(a) secreto(a)"
						value={participanteDaVez}>
						<option value="" disabled={true} hidden>
							Selecione o seu nome
						</option>
						{participantes.map((participante) => {
							return (
								<option key={participante}>
									{participante}
								</option>
							);
						})}
					</Select>
					<CTA>
						Clique em em sortear para ver quem é seu amigo secreto!
					</CTA>
					<OrangeButton type="submit" role="button">
						Sortear!
					</OrangeButton>
				</Form>
				{amigoSecreto && (
					<NomeDoAmigoSecreto role="alert">
						{amigoSecreto}
					</NomeDoAmigoSecreto>
				)}
				<ImagemDoRodape src={paperPlane} alt="Avião de papel verde" />
			</section>
		</Box>
	);
};

export default Sorteio;
