import { ReactNode } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;

  @media screen and (min-width: 250px) {
    max-width: 300px;
  }

  @media screen and (min-width: 280px) {
    max-width: 350px;
  }

  @media screen and (min-width: 600px) {
    max-width: unset;
  }

  @media screen and (min-width: 1024px) {
    max-width: 715px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 551px;
  }
`;

const Container = styled.div`
  margin: auto;

  @media screen and (min-width: 250px) {
    width: 240px;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  @media screen and (min-width: 360px) {
    width: 300px;
  }

  @media screen and (min-width: 600px) {
    width: 100%;
  }

  @media screen and (min-width: 1028px) {
    width: 700px;
  }

  @media screen and (min-width: 1100px) {
    width: 501px;
  }
`;

interface AbCardProps {
  children: ReactNode;
  styleCard?: object;
  styleContainer?: object;
}

const AbCard = ({ children, styleCard, styleContainer }: AbCardProps) => {
	return (
		<>
			<Card style={styleCard}>
				<Container style={styleContainer}>{children}</Container>
			</Card>
		</>
	);
};

export { AbCard };
