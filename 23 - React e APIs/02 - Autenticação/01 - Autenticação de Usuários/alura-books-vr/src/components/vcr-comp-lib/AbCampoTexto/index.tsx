import React from 'react';
import styled from 'styled-components';

const LabelEstilizado = styled.label`
  color: #002f52;
  display: flex;
  flex-direction: column;

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
    color: rgba(164, 164, 164, 1);
  }
`;

interface AbCampoTextoProps {
  rotulo: string;
  placeholder?: string;
  texto: string;
  tipo?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}

const AbCampoTexto = ({
  placeholder,
  rotulo,
  tipo,
  texto,
  onChange,
}: AbCampoTextoProps) => {
  return (
    <LabelEstilizado>
      <span>{rotulo}</span>
      <InputEstilizado
        placeholder={placeholder}
        type={tipo}
        value={texto}
        onChange={(evento: any) => onChange(evento.target.value)}
      />
    </LabelEstilizado>
  );
};

export { AbCampoTexto, AbCampoTextoProps };
