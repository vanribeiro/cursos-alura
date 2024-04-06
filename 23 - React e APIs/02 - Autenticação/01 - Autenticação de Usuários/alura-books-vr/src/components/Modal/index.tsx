import { useEffect, useState } from "react";
import { AbModal } from "../vcr-comp-lib";
import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const CloseButton = styled.button`
    text-decoration: none !important;
`;

function Modal() {
    const [closeModal, setCloseModal] = useState<boolean>(false);

    const handleClick = () => {
        !closeModal ? setCloseModal(true) : setCloseModal(false);
    }

    useEffect(() => {
        if(closeModal) {
            const body: HTMLBodyElement | null = document.querySelector('body');

            if(body){ body.style.overflowY = 'auto'; }
        }
    }, [closeModal]);

    return (
        <>
            <AbModal fechaModal={closeModal}>
                <Header>
                    <ButtonContainer>
                        <CloseButton onClick={() => handleClick()}>
                            close
                        </CloseButton>
                    </ButtonContainer>
                </Header>
            </AbModal>
        </>
    );
}

export default Modal;