import styled from "styled-components";

const Form = styled.form`
    width: 100%;
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

const ButtonContainer = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
    ButtonContainer,
    Form
}