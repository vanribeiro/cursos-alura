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
    cursor: pointer;
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
    text-align: center;
`;

const OrangeButton = styled(Button)`
    background-color: rgba(254, 101, 43, 0.99);
    font-weight: 600;
    color: #FFFFFF;
    padding: 10px 26px;
    
    @media screen and (max-width: 991px){
        width: 155px;
        font-size: 16px;
        line-height: 24px;
        
        img{
            display: none;
        }
    }
    
    @media screen and (min-width: 992px){
        font-size: 20px;
        line-height: 30px;
        width: 351px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        letter-spacing: 0.0125em;
    }
`;

export {
    Box,
    Button,
    Input,
    ResponsiveImage,
    Card,
    Title,
    OrangeButton
}