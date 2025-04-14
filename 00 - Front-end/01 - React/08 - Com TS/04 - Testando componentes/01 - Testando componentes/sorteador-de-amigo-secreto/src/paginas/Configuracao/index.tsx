import Formulario from "../../componentes/Formulario";
import ListaParticipantes from "../../componentes/ListaParticipantes";
import Rodape from "../../componentes/Rodape";
import { Title } from "../../componentes/UI";

const Configuracao = () => {
    return (
        <>
            <Title>Vamos começar!</Title>
            <Formulario />
            <ListaParticipantes />
            <Rodape />
        </>
    )
}

export default Configuracao;