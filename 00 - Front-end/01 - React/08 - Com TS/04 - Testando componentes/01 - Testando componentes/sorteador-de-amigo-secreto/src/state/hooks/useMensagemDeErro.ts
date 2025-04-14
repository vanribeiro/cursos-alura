import { erroState } from "../atom";
import { useRecoilValue } from 'recoil';


const useMensagemDeErro = () => {
    const mensagem = useRecoilValue(erroState);
    return mensagem;
}

export default useMensagemDeErro;