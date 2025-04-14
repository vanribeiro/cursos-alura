import { atom } from "recoil";

const listDeParticipanteState = atom<string[]>({
    key: 'listDeParticipanteState',
    default: []
});

const erroState = atom<string>({
    key: 'erroState',
    default: ''
});

const resultadoDoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoDoAmigoSecreto',
    default: new Map()
});

export {
    listDeParticipanteState,
    erroState,
    resultadoDoAmigoSecreto
}