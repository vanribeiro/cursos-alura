import styled from "styled-components";

const Img = styled.img<{$randomNumber?: boolean}>`

    @media screen and (max-width: 599.99px) {
        width: 179px;
        height: 249px;
    }

    
    @media screen and (min-width: 600px) {
        width: 179px;
        height: 249px;

    }

    @media screen and (min-width: 1024px) {
        width: 192px;
        height: 266px;
    }

    @media screen and (min-width: 1728px) {

        width: 179px;
        height: 240px;

    }
`;

const Images = styled.div<{width: number;}>`
    text-align: center;
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 599.99px) {
        white-space: nowrap;
        overflow-x: auto;
        width:  ${(props) => `${props.width}px`};
        padding: 10px;

    }

    @media screen and (min-width: 600px) {
        align-items: center;
    }
   
`;

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
    & :nth-child(2) {

        img{
            width: 100%;
            height: 100%;
        }


        @media screen and (min-width: 600px) {
            width: 280px;
            height: 388px;
        }

        @media screen and (min-width: 1728px) {
            
            width: 263px !important;
            height: 370px;

        }
    }
`;

export {
    Img,
    CarouselContainer,
    Images,
}