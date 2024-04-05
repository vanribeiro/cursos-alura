import React, { useState } from 'react';
import styled from 'styled-components';

const gradientBg = 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)';
const colorFont = ({ selecionado }: any) =>
  selecionado ? '#ffffff ' : '#EB9B00';

const SectionEstilizada = styled.section<{
  selecionado: boolean;
}>`
  width: 194px;
  height: 88px;
  padding: 8px 0px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  background-image: ${props => (props.selecionado ? gradientBg : '#ffffff')};
  border-color: ${props => (props.selecionado ? '#002F52' : '#EB9B00')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  cursor: pointer;
`;

const HeaderEstilizado = styled.header<{
  selecionado: boolean;
}>`
  color: ${(props: any) => colorFont(props)};
`;

const PrecoEstilizado = styled.div<{
  selecionado: boolean;
}>`
  color: ${(props: any) => colorFont(props)};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const FooterEstilizado = styled.footer<{
  selecionado: boolean;
}>`
  color: ${props => (props.selecionado ? '#ffffff' : 'rgba(0, 0, 0, 0.54)')};
`;

interface AbGrupoOpcaoProps {
  id: number;
  titulo: string;
  corpo: string;
  rodape: string;
}

interface AbGrupoOpcoesProps {
  opcoes: AbGrupoOpcaoProps[];
  valorPadrao?: AbGrupoOpcaoProps | null;
  onChange?: (opcao: AbGrupoOpcaoProps) => void;
}

const AbGrupoOpcoes = ({
  opcoes,
  onChange,
  valorPadrao,
}: AbGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<AbGrupoOpcaoProps | null>(
    valorPadrao ?? null
  );

  const aoSelecionar = (opcao: AbGrupoOpcaoProps): void => {
    setSelecao(opcao);
    if (onChange) {
      onChange(opcao);
    }
  };

  return (
    <>
      {opcoes.map(opcao => {
        const estaSelecionado = selecao?.id === opcao.id;

        return (
          <SectionEstilizada
            key={opcao.id}
            selecionado={estaSelecionado}
            onClick={() => aoSelecionar(opcao)}
          >
            <HeaderEstilizado selecionado={estaSelecionado}>
              {opcao.titulo}
            </HeaderEstilizado>
            <PrecoEstilizado selecionado={estaSelecionado}>
              <strong>{opcao.corpo}</strong>
            </PrecoEstilizado>
            <FooterEstilizado selecionado={estaSelecionado}>
              {opcao.rodape}
            </FooterEstilizado>
          </SectionEstilizada>
        );
      })}
    </>
  );
};

export { AbGrupoOpcoes, AbGrupoOpcaoProps, AbGrupoOpcoesProps };
