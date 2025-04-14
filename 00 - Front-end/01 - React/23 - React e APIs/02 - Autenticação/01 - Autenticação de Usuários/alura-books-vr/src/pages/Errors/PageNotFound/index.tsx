import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100vw;
    height: 50vh;

    p{
        margin: 0;
        color: #f4f7fa;
    }

    `;

const StatusCode = styled.p`


    strong{
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;
        color: #FFFFFF;
    }

`;

const Cta = styled.p`
    font-size: 14px;
    line-height: 16px;
    margin-top: 8px !important;

    a{
        color: #afcde2;
        text-decoration: underline;
        padding: 16px;
    }
`;

function PageNotFound() {
    return (
        <>
            <Box>
                <StatusCode><strong>404</strong></StatusCode>
                <p>Página não encontrada</p>
                <Cta>
                    <Link to='/'>Ir para Home</Link>
                </Cta>
            </Box>
        </>
    );
}

export default PageNotFound;