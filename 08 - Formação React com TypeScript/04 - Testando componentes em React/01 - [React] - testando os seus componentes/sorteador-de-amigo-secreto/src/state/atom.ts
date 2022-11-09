import { atom } from "recoil";

const listDeParticipanteState = atom<string[]>({
    key: 'listDeParticipanteState',
    default: []
});

const erroState = atom<string>({
    key: 'erroState',
    default: ''
})

export {
    listDeParticipanteState,
    erroState
}