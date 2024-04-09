/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import styled from 'styled-components';

const LabelEstilizado = styled.label`
  color: #002f52;
  display: flex;
  flex-direction: column;
  position: relative;

  span {
    padding-left: 24px;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 4px;
  }
`;

const InputEstilizado = styled.input`
  width: 509px;
  height: 44px;
  padding-left: 24px;
  border-radius: 24px;
  border: 1px solid rgba(0, 47, 82, 1);
  color: #002f52;

  &::placeholder {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    color: #002F52;
  }

  @media screen and (max-width: 599.99px){
    width: 76%;
  }
    
  @media screen and (min-width: 600px){
    width: 90%;
  }
`;

const Envelope = styled.img`
    position: absolute;
    padding: 24px;
`;

const OpenEye = styled.img<{$isText: string}>`
    position: absolute;
    right: 0;
    top: 50%;
    padding-right:16px;
    cursor: pointer;
    opacity: ${props => props.$isText === 'text' ? 0.4 : 1};
`;

interface AbCampoTextoProps {
  rotulo?: string;
  placeholder?: string;
  texto: string;
  tipo?: 'text' | 'email' | 'password' | 'date';
  styleInput?: object;
  styleLabel?: object;
  icon?: string;
  onChange: (value: string) => void;
  onClick?: (value: string) => void;
}

const AbCampoTexto = ({
  placeholder,
  rotulo,
  tipo,
  texto,
  styleInput,
  styleLabel,
  icon,
  onChange,
}: AbCampoTextoProps) => {

  const [inputType, setInputType] = useState(tipo);

  const handleClick = () => {
      inputType === 'password'
      ? setInputType('text')
      : setInputType('password');
  }

  return (
		<LabelEstilizado style={styleLabel}>
			<span>{rotulo}</span>

			{icon && tipo === "email" && (
				<Envelope src={icon} alt="Ícone de envelope" />
			)}

			<InputEstilizado
				style={styleInput}
				placeholder={placeholder}
				type={inputType}
				value={texto}
				onChange={(evento: any) => onChange(evento.target.value)}
			/>

			{icon && (tipo === "password" || tipo === "text") && (
				<OpenEye $isText={inputType} src={icon} alt="Ícone de olhos" onClick={() => handleClick()}/>
			)}
		</LabelEstilizado>
  );
};

export { AbCampoTexto };
