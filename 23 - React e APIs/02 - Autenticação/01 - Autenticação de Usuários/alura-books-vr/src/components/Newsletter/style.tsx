import styled from "styled-components";

const Section = styled.div`
    background: #F9F9F9;
    padding: 32px 0;
`;

const NewsletterContainer = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 767.99px){
        width: 90%;
        justify-content: space-between;
    }
    
    @media screen and (min-width: 1024px){
        width: 725px;
    }

    @media screen and (min-width: 1728px){
        width: 774px;
    }
`;

const Form = styled.form`
    width: 48%;
    label{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`;

const CallToAction = styled.div`
    width: 48%;

    h3, p{
        color: #002F52;
    }
    
    h3{
        margin-bottom: 0;
    }

    @media screen and (max-width: 767.99px){
        h3{
            font-size: 18px;
            font-weight: 500;
            line-height: 27px;
            margin-bottom: 0;
        }

        p{
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
        }
    }
    
    @media screen and (min-width: 768px){
        h3{
            font-size: 24px;
            font-weight: 500;
            line-height: 36px;
        }
    
        p{
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
        }

    }

`;

export {
    CallToAction,
    Form,
    NewsletterContainer,
    Section,
}