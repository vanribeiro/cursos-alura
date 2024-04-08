import { ReactNode } from 'react';
import styled from 'styled-components';

const ModalBg = styled.div<{ $fechaModal?: boolean }>`
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: ${props => props.$fechaModal ? 'none': 'flex'};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const ModalContent = styled.section<{ $padding?: string }>`
  background-color: #ffffff;
  border-radius: 24px;

  @media screen and (max-width: 428px) {
    max-width: 378px;
    width: 89%;
    padding: ${props => (props.$padding ? props.$padding : '24px')};
  }

  @media screen and (min-width: 429px) {
    width: 89%;
    padding: ${props => (props.$padding ? props.$padding : '24px')};
  }

  @media screen and (min-width: 1024px) {
    max-width: 843px;
    padding: ${props =>
      props.$padding ? props.$padding : '40px 48px 40px 40px'};
  }

  @media screen and (min-width: 1728px) {
    max-width: 978px;
    padding: ${props =>
      props.$padding ? props.$padding : '64px 48px 56px 48px'};
  }
`;

interface AbModal {
  fechaModal: boolean;
  controlaModal?: boolean;
  padding?: string;
  children: ReactNode;
}

const AbModal = ({ fechaModal, padding, children }: AbModal) => {
  return (
    <ModalBg $fechaModal={fechaModal}>
      <ModalContent $padding={padding}>{children}</ModalContent>
    </ModalBg>
  );
};

export { AbModal };
