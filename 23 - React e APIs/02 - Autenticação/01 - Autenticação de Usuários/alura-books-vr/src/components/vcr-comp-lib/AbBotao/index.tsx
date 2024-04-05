import React from 'react';
import styled, { css } from 'styled-components';

interface AbBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background-color: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#eb9b00' : '#ffffff'};
  padding: 16px 32px;
  border: #eb9b00 2px solid;
  color: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#ffffff' : '#eb9b00'};
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  ${(props: AbBotaoProps) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background-color: #b87900;
            border: #b87900 2px solid;
          }
        `
      : css`
          &:hover {
            background-color: #ffffff;
            border: #b87900 2px solid;
            color: #b87900;
          }
        `};
`;

const AbBotao = ({ texto, tipo = 'primario', onClick }: AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  );
};

export { AbBotao, AbBotaoProps };
