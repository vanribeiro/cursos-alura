import styled from "styled-components";

const Container = styled.div`
    margin: auto;

    @media screen and (max-width: 767.99px){
        width: 100%;
    }

    @media screen and (min-width: 768px){
        max-width: 720px;
        display: flex;
        gap: 24px;
    }

    @media screen and (min-width: 1024px){
        max-width: 968px;
    }

    @media screen and (min-width: 1728px){
        max-width: 1400px;
    }
`;

export default Container;