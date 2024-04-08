import { useState } from "react";
import { AbModal } from "../vcr-comp-lib";
import styled from 'styled-components';
import ModalImage from "./ModalImage";
import LoginForm from "../LoginForm";

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const H2 = styled.h2`
    font-size: 17.6px;
    font-weight: 700;
    line-height: 26.4px;
    color: #EB9B00;
    text-transform: uppercase;
`;

const ModalContainer = styled.div`
    @media screen and (min-width: 600px){
        display: flex;
    }

`;

const ModalContent = styled.div`
    @media screen and (min-width: 768px){
        width: 50%;
    }

    @media screen and (min-width: 1024px){
        width: 60%;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const CloseButton = styled.button`
    text-decoration: none !important;
    background-color: transparent;
    border: none;
    color: #002F52;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
`;

interface IModal{
    setOpenModal(value: React.SetStateAction<boolean>): void;
}

function Modal({setOpenModal}: IModal) {
    const [closeModal, setCloseModal] = useState<boolean>(false);

    const handleClick = () => {
        setCloseModal(true);
        setOpenModal(false);
    }

    return (
        <>
            <AbModal fechaModal={closeModal}>
                <ModalContainer>
                    <ModalImage />
                    <ModalContent>
                        <Header>
                            <H2>Login</H2>
                            <ButtonContainer>
                                <CloseButton onClick={() => handleClick()}>
                                    &#10006;
                                </CloseButton>
                            </ButtonContainer>
                        </Header>
                        <LoginForm />
                    </ModalContent>
                </ModalContainer>
            </AbModal>
        </>
    );
}

export default Modal;