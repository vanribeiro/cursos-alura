import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos);
        const todosOsEventos = get(listaDeEventosState);
        
        const eventosx = todosOsEventos.filter(evento => {
            if(!filtro.data){
                return true;
            }

            if(filtro.data && filtro.completo){
                return filtro.completo === evento.completo;
            }

            if(filtro.data && filtro.incompleto){
                return filtro.incompleto === !evento.completo;
            }
            
            const ehOMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
            return ehOMesmoDia;
        });
        return eventosx;
    }
});

const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/eventos');
        const eventosJSON: IEvento[] = await respostaHttp.json();

        return eventosJSON.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim)
        }));
    }
});

export {
    eventosFiltradosState,
    eventosAsync
}