import styled from "styled-components";

const Form = styled.form`

    label{
        margin: 8px 0;
    }

    input, input::placeholder, label span{
        font-family: Poppins;
    }

    label span{
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 12.2px;
        font-weight: 700;
        line-height: 18.3px;

    }

    input::placeholder{
        color: #A4A4A4;
        font-size: 12.2px;
        line-height: 18.3px;
    }

    button{
        font-family: Poppins;
        font-size: 12.2px;
        font-weight: 700;
        line-height: 18.3px;
        text-align: center;
        padding: 6px 12px;
    }

`;

const Hr = styled.hr`
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
    height: 0.76px;
    border: none;
    margin: 16px 0;
`;

const FormFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

    p{
        font-size: 15.1px;
        font-weight: 700;
        line-height: 22.65px;
        color: #002F52;
        margin: 0;
    }
`;

const ButtonContainer = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LinkForgotPassword = styled.a`
    font-size: 12px !important;
    line-height: 18.3px;
    text-align: left;
    color: #002F52 !important;
    text-decoration: underline;
`;

export {
    ButtonContainer,
    Form,
    FormFooter,
    Hr,
    LinkForgotPassword
}