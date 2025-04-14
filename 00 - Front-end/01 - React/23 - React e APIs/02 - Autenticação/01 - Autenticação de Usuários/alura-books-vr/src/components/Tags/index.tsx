import styled from "styled-components";
import { AbTag } from "../vcr-comp-lib";

const Section = styled.section`
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
    margin-top: 16px;
    padding: 24px 8px;

    h3{
        font-family: Poppins;
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 32px;
    }

`;

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 24px auto;
    
    @media screen and (max-width: 599.99px){
        gap: 8px 6px;
    }
    
    @media screen and (min-width: 600px){
        gap: 16px 12px;
        margin: 24px auto;
        width: 73%;
    }

    @media screen and (min-width: 1728px){
        width: 43%;
    }

`;


interface ITags {
    listOfTags: Array<string>;
}

function Tags({ listOfTags }: ITags) {

    const tagStyle = {
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '21px',
        padding: '16px 24px 16px 24px',
        cursor: 'pointer'
    }
    
    return (
		<Section>
			<h3>TÓPICOS VISITADOS RECENTEMENTE</h3>
			<TagsContainer>
				{listOfTags.map((tag: string, index: number) => (
					<AbTag to={`${
                        tag
                            .toLowerCase()
                            .replace(/[^a-z]/gi,'-')
                    }`} key={index} style={tagStyle} texto={tag} />
				))}
			</TagsContainer>
		</Section>
	);
}

export default Tags;