import styled from "styled-components";

const Box = styled.div`
    margin: auto;

    @media screen and (max-width: 991px){
        width: 90%;
    }

    @media screen and (min-width: 992px){
        width: 80%;
    }
`;

const ResponsiveImage = styled.img`
    max-width: 100%;
`

export {
    Box,
    ResponsiveImage
}