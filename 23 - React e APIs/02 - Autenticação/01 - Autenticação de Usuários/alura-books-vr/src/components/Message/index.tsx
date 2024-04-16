import styled from "styled-components";

interface IMessage {
    fontColor?: string;
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


function ErrorMessage({ fontColor, message }: IMessage) {
    
    return (
        <Message $color={fontColor}>
            <p>
                { message }
            </p>
        </Message>
    )
}

export {
    ErrorMessage
}