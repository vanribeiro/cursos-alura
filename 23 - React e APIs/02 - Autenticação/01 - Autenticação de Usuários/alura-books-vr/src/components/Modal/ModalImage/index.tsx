import styled from 'styled-components';
import LoginImage from './assets/login-imagem.png';

const Img = styled.img`
    max-width: 100%;

	`

const Figure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
	
	@media screen and (min-width: 600px){
		width: 30%;
	}

	@media screen and (min-width: 768px){
		width: 40%;
	}

	/* @media screen and (min-width: 1024px){
		width: 30%;
	} */
`;

function ModalImage() {
    return (
		<>
			<Figure>
				<Img
					src={LoginImage}
					alt="Homem segurando uma chave grande para abrir uma fechadura que está em uma monitor de computador"
				/>
			</Figure>
		</>
	);
}

export default ModalImage;