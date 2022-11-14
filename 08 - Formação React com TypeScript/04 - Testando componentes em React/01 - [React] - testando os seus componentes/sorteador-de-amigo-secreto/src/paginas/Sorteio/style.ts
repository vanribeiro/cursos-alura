import styled from "styled-components";
import { ResponsiveImage } from "../../componentes/UI";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	margin: auto;
`;

const Select = styled.select`
	margin: 16px 0;
	width: 100%;
	height: 75px;
	box-shadow: 4px 4px 0px #000000;
	padding: 0 24px;
	border-radius: 37.5px;
	font-size: 16px;
	line-height: 24px;
    cursor: pointer;
`;

const CTA = styled.p`
	font-size: 20px;
	line-height: 30px;
	color: #444444;
	text-align: center;
    padding: 2px 50px;
`;

const NomeDoAmigoSecreto = styled.p`
    color: #FE652BFC;
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;
    text-align: center;
`;

const ImagemDoRodape = styled(ResponsiveImage)`
    margin: auto;
    display: block;
`;

export {
    Form,
    Select,
    CTA,
    NomeDoAmigoSecreto,
    ImagemDoRodape
}