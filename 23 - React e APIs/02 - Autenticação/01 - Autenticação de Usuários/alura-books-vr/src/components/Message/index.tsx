import styled from "styled-components";

interface IMessage {
    color?: string;
    message: string
}

const Message = styled.div<{$color: string}>`
    margin: 4px 0;

    p{
        color: ${props => props.$color};
        font-size: 12px;
        line-height: 14px;
        padding-left: 24px;
    }
`;


function ErrorMessage({ color, message }: IMessage) {
    
    return (
        <Message $color={color}>
            <p>
                { message }
            </p>
        </Message>
    )
}

export {
    ErrorMessage
}