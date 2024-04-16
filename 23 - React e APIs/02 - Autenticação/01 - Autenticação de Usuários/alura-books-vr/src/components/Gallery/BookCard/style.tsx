import styled from "styled-components";

const Header = styled.header`

    h2, h3{
        font-family: Poppins;
        font-weight: 700;
        margin-top: 0;
    }

    h2{
        color: #002F52;
        font-size: 18px;
        line-height: 27px;
    }

    h3{
        color: #EB9B00;
        font-size: 16px;
        line-height: 24px;
    }
`;

const Img = styled.img`
    width: 32px;
    height: 32px;
`;

const Body = styled.div`

    p{
        margin: 8px 0;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: #000000D9;

    }

`;

const BookCardContainer = styled.div`
    padding: 16px;
    
`;

const PriceContainer = styled.div`
    margin-top: 16px;

    p, span{
        font-family: Poppins;
    }
    
    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #0000008A;
    }

    span {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        color: #002F52;
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
`;

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export {
    Body,
    BookCardContainer,
    Footer,
    Header,
    IconsContainer,
    Img,
    PriceContainer
}