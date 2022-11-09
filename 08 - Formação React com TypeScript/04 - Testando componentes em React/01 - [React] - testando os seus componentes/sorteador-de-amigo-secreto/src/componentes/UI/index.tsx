import styled from "styled-components";

const Box = styled.div`
    margin: auto;
    display: flex;
    align-items: center;

    @media screen and (max-width: 991px){
        width: 90%;
    }

    @media screen and (min-width: 992px){
        width: 80%;
    }
`;

const Card = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #FFF9EB;
    border: 1px #000000 solid;
    border-radius: 48px 48px 0 0;
`;

const ResponsiveImage = styled.img`
    max-width: 100%;
`;
export {
    Box,
    ResponsiveImage,
    Card
}