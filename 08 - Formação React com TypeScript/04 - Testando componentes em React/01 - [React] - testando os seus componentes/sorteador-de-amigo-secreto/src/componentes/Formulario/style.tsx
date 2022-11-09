import styled from "styled-components";
import { Button, Input } from "../UI";

const Form = styled.form`
    margin: 10% auto 16px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
        height: 48px;
        
        @media screen and (max-width: 359px) {
            max-width: 100%;
        }
        
        @media screen and (min-width: 360px) {
            max-width: 328px;
            width: 98%;
        }
    }


`;

const InputNome = styled(Input)`
    font-size: 14px;
    padding-left: 20px;
`;

const BotaoAdicionar = styled(Button)`
    height: 48px;
    width: 155px;
    background-color: #C4C4C4;
    font-size: 16px;
    line-height: 24px;
`;

export {
    Form,
    InputNome,
    BotaoAdicionar,
}