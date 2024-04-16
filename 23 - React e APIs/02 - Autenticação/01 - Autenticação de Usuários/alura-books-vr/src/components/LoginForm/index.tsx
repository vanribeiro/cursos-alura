import { AbBotao, AbCampoTexto } from '../vcr-comp-lib';
import { useState } from 'react';
import OpenedEyeIcon from './assets/olhos-abertos.png';
import { ButtonContainer, Form, FormFooter, Hr, LinkForgotPassword } from './style';

interface ILoginForm{
    setShowRegistryForm(value: boolean): void;
}

const styleLabel: object = {
    width: '100%',
    alignItems: 'flex-start'
}

const styleInput: object = {
    width: '100%',
    backgroundColor: '#FFFFFF'
}

function LoginForm({ setShowRegistryForm }: ILoginForm) {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleCriarConta = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        setShowRegistryForm(true);
    }

    return (
		<>
			<Form>
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
					tipo="password"
					rotulo="Senha"
					texto={password}
					placeholder="*********************"
					onChange={setPassword}
					icon={OpenedEyeIcon}
				/>
				<ButtonContainer>
					<LinkForgotPassword href="#">
						Esqueci minha senha
					</LinkForgotPassword>
					<AbBotao
						texto="Fazer login"
						variante="primario"
						type="button"
					/>
				</ButtonContainer>
				<Hr />
				<FormFooter>
					<p>Ainda não tem uma conta?</p>
					<AbBotao
						texto="Criar conta"
						type="submit"
						variante="primario"
						onClick={handleCriarConta}
					/>
				</FormFooter>
			</Form>
		</>
	);
}

export default LoginForm;