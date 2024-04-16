import styled from "styled-components";

const Section = styled.section`
	height: 44px;
	display: flex;
	align-items: center;
	flex: 1;
	gap: 16px;

	span {
		display: none;
	}
    
	@media screen and (max-width: 428px) {
        padding-right: 16px;
    }

    @media screen and (min-width: 429px) {
        justify-content: flex-end;
        padding-right: 24px;
    }

    @media screen and (min-width: 1024px) {
        padding-right: 80px;
    }

	@media screen and (min-width: 1728px) {
        gap: 48px;
        width: 30%;

		span {
			display: block;
		}
	}
`;

const Button = styled.button`

    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: white;
    color: #000000;
    border: none;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    cursor: pointer;
    
    &:hover{
        text-decoration: underline;
    }

`;


const ActionItem = styled.div`
    height: 44px;
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;

    a{

        display: inline-flex;
        align-items: center;
        gap: 8px;
        background-color: white;
        color: #000000;
        border: none;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
    }

`;

const Img = styled.img`
    height: 24px;
    width: 24px;
`;

const Favorites = styled(ActionItem)`

    @media screen and (min-width: 767.99px) {
        display: none;
    }
`;

export {
    ActionItem,
    Button,
    Favorites,
    Img,
    Section
}