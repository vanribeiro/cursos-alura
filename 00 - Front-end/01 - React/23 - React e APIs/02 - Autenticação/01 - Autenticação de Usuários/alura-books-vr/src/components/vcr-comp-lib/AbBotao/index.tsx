import styled, { css } from 'styled-components';

interface AbBotaoProps {
  texto?: string;
  variante?: 'primario' | 'secundario';
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background-color: ${(props: AbBotaoProps) =>
    props.variante === 'primario' ? '#eb9b00' : '#ffffff'};
  padding: 16px 32px;
  border: #eb9b00 2px solid;
  color: ${(props: AbBotaoProps) =>
    props.variante === 'primario' ? '#ffffff' : '#eb9b00'};
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  ${(props: AbBotaoProps) =>
    props.variante === 'primario'
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

const AbBotao = ({ texto, type, variante = 'primario', onClick }: AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} variante={variante} type={type}>
      {texto}
    </BotaoEstilizado>
  );
};

export { AbBotao };
