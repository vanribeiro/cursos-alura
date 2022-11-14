import { useNavigate } from "react-router-dom";
import useListaParticipantes from "../../state/hooks/useListaParticipantes";
import { Footer, FooterResponsiveImage } from "./style";
import bag from './../../assets/wavy-buddies-shopping-bags.png';
import playIcon from './../../assets/icones/play_circle.png';
import useSorteador from "../../state/hooks/useSorteador";
import { OrangeButton } from "../UI";

const Rodape = () => {
	const participantes = useListaParticipantes();
	const navegarPara = useNavigate();
	const sortear = useSorteador();

	const iniciar = () => {
		sortear();
		navegarPara("/sorteio");
	};

	return (
		<Footer>
			<OrangeButton
				disabled={participantes.length < 3}
				onClick={iniciar}
				type="button">
				<img src={playIcon} alt="Ícone Play" />
				Iniciar brincandeira!
			</OrangeButton>
			<FooterResponsiveImage src={bag} alt="Duas sacolas de compra" />
		</Footer>
	);
};

export default Rodape;
