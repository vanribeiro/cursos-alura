import React from 'react';
import styled from 'styled-components';
import Item from '../Item';
import ImageFilter from './../ImageFilter';

const Items = styled.div`
    box-shadow: 4px 4px 20px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-size: 12px;
`;

const IconeContainer = styled.figure`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <Items>
            <IconeContainer>
                {ImageFilter(props.type)}
            </IconeContainer>
            <Item {...props}  />
            <span>{props.date}</span>
        </Items>
    );
};