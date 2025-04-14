import { useEffect } from "react";
import styled from "styled-components";

const TitlePageContainer = styled.div`
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 767.99px){
        height: 59px;
        padding: 16px 0px;
    }
    
    @media screen and (min-width: 768px){
        height: 120px;
        padding: 16px 0px;
    }
`;

const H2 = styled.h2`
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    
    @media screen and (max-width: 767.99px){
        font-size: 18px;
        line-height: 27px;

    }
    
    @media screen and (min-width: 768px){
        font-size: 36px;
        line-height: 54px;

    }
`;

interface ITitlePage {
    titlePage: string;
}

function TitlePage({ titlePage }: ITitlePage) {

    useEffect(() => {
        document.title = `AluraBooks - ${titlePage}`
    }, [titlePage]);

    return (
        <>
            <TitlePageContainer>
                <H2>{ titlePage }</H2>
            </TitlePageContainer>
        </>
    );
}

export default TitlePage;