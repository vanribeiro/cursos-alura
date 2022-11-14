import styled from "styled-components";
import { Button, Input } from "../UI";

const Form = styled.form`
    margin: 16px auto;
    
    .form-group{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @media screen and (max-width: 991px){
        width: 90%;
        flex-direction: column;

        .form-group{
            flex-direction: inherit;
        }
    }
    
    @media screen and (min-width: 992px){
        max-width: 1024px;
        width: 100%;
    }

`;

const InputNome = styled(Input)`
    padding-left: 20px;
    
    @media screen and (max-width: 359px) {
        max-width: 100%;
    }
    
    @media screen and (min-width: 360px) {
        max-width: 328px;
        width: 98%;
    }
    
    @media screen and (max-width: 991px) {
        font-size: 14px;
        margin-bottom: 8px;
        height: 48px;
    }

    @media screen and (min-width: 992px) {
        font-size: 16px;
        line-height: 24px;
        height: 78px;
        max-width: 100%;
        width: 100%;
    }
    
`;

const BotaoAdicionar = styled(Button)`
    background-color: #C4C4C4;
    font-size: 16px;
    line-height: 24px;
    
    @media screen and (max-width: 991px){
        height: 48px;
        width: 155px;
        border-radius: 37.5px;
    }
    
    @media screen and (min-width: 992px){
        height: 82px;
        width: 227px;
        border-radius: 0 37.5px 37.5px 0;
    }
`;

const MensagemDeErro = styled.p`
    color: #721c24;
    background-color: #f8d7da;
    padding: 8px;
    border-radius: 8px;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
`;

export {
    Form,
    InputNome,
    BotaoAdicionar,
    MensagemDeErro
}