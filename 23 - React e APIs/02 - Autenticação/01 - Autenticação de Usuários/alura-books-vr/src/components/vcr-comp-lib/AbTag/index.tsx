import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface AbTagProps {
  texto?: string;
  onClick?: () => void;
  style: object;
  to?: string;
}

const TagEstilizada = styled(Link)<AbTagProps>`
  background-color: #eb9b00;
  padding: 24px 32px;
  border: #eb9b00 2px solid;
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-color: #b87900;
    border: #b87900 2px solid;
  }
`;

const AbTag = ({ texto, style, to, onClick }: AbTagProps) => {
	return (
		<TagEstilizada style={style} onClick={onClick} to={to}>
			{texto}
		</TagEstilizada>
	);
};

export { AbTag };
