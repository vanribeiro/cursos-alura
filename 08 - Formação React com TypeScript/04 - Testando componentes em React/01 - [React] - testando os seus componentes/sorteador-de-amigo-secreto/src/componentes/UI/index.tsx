import styled from "styled-components";

const Box = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 991px){
        width: 100%;
    }

    @media screen and (min-width: 992px){
        width: 80%;
    }
`;

const Card = styled.div`
    width: calc(100% - 2px);
    height: 70vh;
    background-color: #FFF9EB;
    border: 1px #000000 solid;
    border-radius: 48px 48px 0 0;
`;

const ResponsiveImage = styled.img`
    max-width: 100%;
`;

const Button = styled.button`
    border: 1px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    border-radius: 37.5px;
`;

const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #000000;
    box-shadow: 2px 2px 0px #000000;
    border-radius: 37.5px;
`;

export {
    Box,
    Button,
    Input,
    ResponsiveImage,
    Card
}