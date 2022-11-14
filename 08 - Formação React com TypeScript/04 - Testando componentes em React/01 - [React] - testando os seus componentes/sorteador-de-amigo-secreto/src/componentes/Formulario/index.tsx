import { useState, useRef } from "react";
import useAdicionarParticipante from "../../state/hooks/useAdicionarParticipante";
import useMensagemDeErro from "../../state/hooks/useMensagemDeErro";
import { BotaoAdicionar, Form, InputNome, MensagemDeErro} from './style';

const Formulario = () => {
	const [nome, setNome] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante();

    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        setNome('');
        adicionarNaLista(nome);
        inputRef.current?.focus();
    }

	return (
		<Form onSubmit={adicionarParticipante}>
            <div className="form-group">
                <InputNome
                    ref={inputRef}
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <BotaoAdicionar type="submit" disabled={!nome}>Adicionar</BotaoAdicionar>
            </div>

            {mensagemDeErro && <MensagemDeErro role="alert">{mensagemDeErro}</MensagemDeErro>
            }
		</Form>
	);
};

export default Formulario;
