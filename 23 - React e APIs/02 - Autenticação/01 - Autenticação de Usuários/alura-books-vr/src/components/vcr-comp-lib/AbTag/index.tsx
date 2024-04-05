import React from 'react';
import styled from 'styled-components';

interface AbTagProps {
  texto?: string;
  onClick?: () => void;
}

const TagEstilizada = styled.button<AbTagProps>`
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

const AbTag = ({ texto, onClick }: AbTagProps) => {
  return <TagEstilizada onClick={onClick}>{texto}</TagEstilizada>;
};

export { AbTag, AbTagProps };
