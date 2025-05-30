import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

const Cronometro = ({ selecionado, finalizarTarefa }: Props) => {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) setTempo(tempoParaSegundos(selecionado?.tempo));
    }, [selecionado]);

    const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1 * 1000);
    }

    const handleClickButton = () => {
        regressiva(tempo);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronometro 
            </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao texto="Começar" onClick={handleClickButton}/>
        </div>
    );
}

export default Cronometro;