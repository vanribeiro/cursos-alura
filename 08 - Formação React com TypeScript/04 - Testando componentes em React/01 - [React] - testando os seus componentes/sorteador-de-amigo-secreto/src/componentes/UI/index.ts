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
        max-width: 1024px;
        width: 60%;
    }
`;

const Card = styled.div`
    width: 100%;
    background-color: #FFF9EB;
    border-top: 1px #000000 solid;
    border-radius: 48px 48px 0 0;
    padding: 56px 0;
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
    
    @media screen and (max-width: 991px){
        border-radius: 37.5px;
    }
    
    @media screen and (min-width: 992px){
        border-radius: 37.5px 0 0 37.5px;
    }
`;

const Title = styled.h1`
    color: #4B69FDFC;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;  
`;

export {
    Box,
    Button,
    Input,
    ResponsiveImage,
    Card,
    Title
}