import styled from 'styled-components';
import { AbBotao, AbCampoTexto } from '../vcr-comp-lib';
import { useEffect, useState } from 'react';
import OpenedEyeIcon from './assets/olhos-abertos.png';
import { viaCepBaseURL } from '../../service/api';

const Form = styled.form`
    width: 100%;
    label{
        margin: 8px 0;
    }

    input, input::placeholder, label span{
        font-family: Poppins;
    }

    label span{
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 12.2px;
        font-weight: 700;
        line-height: 18.3px;

    }

    input::placeholder{
        color: #A4A4A4;
        font-size: 12.2px;
        line-height: 18.3px;
    }

    button{
        font-family: Poppins;
        font-size: 12.2px;
        font-weight: 700;
        line-height: 18.3px;
        text-align: center;
        padding: 6px 12px;
    }

`;


const ButtonContainer = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const styleLabel: object = {
    width: '100%',
    alignItems: 'flex-start'
}

const styleInput: object = {
    width: '100%',
    backgroundColor: '#FFFFFF'
}

function RegisterForm() {

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address01, setAddress01] = useState<string>('');
    const [address02, setAddress02] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    useEffect(() => {
        if(cep.length === 8 ) {
            fetch(`${viaCepBaseURL}/${cep}/json`)
            .then(response => response.json())
            .then(data => {
                const address: string = `${data.logradouro}, ${data.bairro}, ` 
                                        + `${data.localidade}-${data.uf}`;
                const addressComplement: string = data.complemento;

                setAddress01(address);
                setAddress02(addressComplement);

            })
            .catch(err => { throw err; })
        }

    }, [cep]);

    return (
		<>
			<Form>
				<AbCampoTexto
                    styleInput={styleInput}
                    styleLabel={styleLabel}
						tipo="text"
						rotulo="Nome"
						texto={nome}
						placeholder="Seu nome completo"
						onChange={setNome}
                        
					/>
				<AbCampoTexto
                    styleInput={styleInput}
                    styleLabel={styleLabel}
						tipo="email"
						rotulo="E-mail"
						texto={email}
						placeholder="seuemail@maneiro.com.br"
						onChange={setEmail}
					/>
				<AbCampoTexto
                    styleInput={styleInput}
                    styleLabel={styleLabel}
						tipo="text"
						rotulo="Endereço"
						texto={address01}
						placeholder="Sua rua e número"
						onChange={setAddress01}
					/>
				<AbCampoTexto
                    styleInput={styleInput}
                    styleLabel={styleLabel}
						tipo="text"
						rotulo="Endereço"
						texto={address02}
						placeholder="Apto/casa, bloco"
						onChange={setAddress02}
					/>
				<AbCampoTexto
                    styleInput={styleInput}
                    styleLabel={styleLabel}
						tipo="text"
						rotulo="Cep"
						texto={cep}
						placeholder="Insira seu CEP"
						onChange={setCep}
					/>
				<AbCampoTexto
                    styleInput={styleInput}
                    styleLabel={styleLabel}
						tipo="password"
						rotulo="Senha"
						texto={password}
						placeholder="*********************"
						onChange={setPassword}
                        icon={OpenedEyeIcon}
					/>
				<AbCampoTexto
                    styleInput={styleInput}
                    styleLabel={styleLabel}
						tipo="password"
						rotulo="Confirmar Senha"
						texto={passwordConfirmation}
						placeholder="*********************"
						onChange={setPasswordConfirmation}
                        icon={OpenedEyeIcon}
					/>
                <ButtonContainer>
                    <AbBotao texto='Cadastrar' type='button' />
                </ButtonContainer>
			</Form>
		</>
	);
}

export default RegisterForm;