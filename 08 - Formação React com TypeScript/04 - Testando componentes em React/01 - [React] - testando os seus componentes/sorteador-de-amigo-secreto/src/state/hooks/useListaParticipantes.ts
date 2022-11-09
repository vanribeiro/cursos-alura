import { useRecoilValue } from "recoil";
import { listDeParticipanteState } from "../atom";

const useListaParticipantes = () => {
    return useRecoilValue(listDeParticipanteState);
}

export default useListaParticipantes;