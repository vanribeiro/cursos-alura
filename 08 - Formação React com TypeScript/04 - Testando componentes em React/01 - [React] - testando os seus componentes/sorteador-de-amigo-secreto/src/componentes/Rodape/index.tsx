import { useNavigate } from "react-router-dom";
import useListaParticipantes from "../../state/hooks/useListaParticipantes";
import { BotaoIniciarBrincadeira, Footer, FooterResponsiveImage } from "./style";
import bag from './../../assets/wavy-buddies-shopping-bags.png';
import playIcon from './../../assets/icones/play_circle.png';

const Rodape = () => {
	const participantes = useListaParticipantes();
	const navegarPara = useNavigate();

	const iniciar = () => {
		navegarPara("/sorteio");
	};

	return (
		<Footer>
			
			<BotaoIniciarBrincadeira
				disabled={participantes.length < 3}
				onClick={iniciar}>
				<img src={playIcon} alt="Ícone Play" />
				Iniciar brincandeira!
			</BotaoIniciarBrincadeira>
			<FooterResponsiveImage src={bag} alt="Duas sacolas de compra" />
		</Footer>
	);
};

export default Rodape;
