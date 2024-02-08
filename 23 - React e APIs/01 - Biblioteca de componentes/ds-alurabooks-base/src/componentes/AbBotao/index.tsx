import React from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
    background-color: #eb9b00;
    padding: 16px 32px;
    border: #eb9b00 2px solid;
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
    &:hover{
        background-color: #b87900;
        border: #b87900 2px solid;
    }
`;

const AbBotao = () => {
    return (
        <BotaoEstilizado>
            Clique aqui!
        </BotaoEstilizado>
    )
}

export {
    AbBotao
};