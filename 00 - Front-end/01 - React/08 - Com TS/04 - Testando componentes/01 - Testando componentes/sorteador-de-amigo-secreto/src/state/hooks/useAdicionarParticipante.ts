import { useSetRecoilState, useRecoilValue } from "recoil";
import { erroState, listDeParticipanteState } from "../atom";

const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listDeParticipanteState);
    const lista  = useRecoilValue(listDeParticipanteState);
    const setErro = useSetRecoilState(erroState);
    return(nomeDoParticipante: string) =>{
        if(lista.includes(nomeDoParticipante)){
            setErro('Nomes duplicados não são permitidos!');
            setTimeout(() => {
                setErro('');
            }, 3 * 1000);
            return;
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante]);
    }
}

export default useAdicionarParticipante;