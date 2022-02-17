import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;

  .text{
    font-weight: bold;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ type, from, value }) => {
    return (
        <Item>
            <span className="text">{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Item>
    );
};
