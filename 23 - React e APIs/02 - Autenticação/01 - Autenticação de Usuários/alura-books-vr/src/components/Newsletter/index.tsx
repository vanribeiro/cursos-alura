import { AbCampoTexto } from "../vcr-comp-lib";
import EnvelopeIcon from './assets/envelope.png';
import { useState } from "react";
import { CallToAction, Form, NewsletterContainer, Section } from "./style";

const styleLabel: object = {
    width: '100%',
    alignItems: 'flex-start'
}

const styleInput: object = {
    backgroundColor: '#FFFFFF',
    paddingLeft: '60px'
}

function Newsletter() {

    const [email, setEmail] = useState<string>('');
    
    return (
		<Section>
			<NewsletterContainer>
				<CallToAction>
					<h3>Fique por dentro das novidades!</h3>
                    <p>Atualizações de e-books, novos livros, promoções e outros.</p>
				</CallToAction>
				<Form>
					<AbCampoTexto
                        styleLabel={styleLabel}
                        styleInput={styleInput}
						placeholder="Cadastre seu e-mail"
						tipo="email"
						onChange={setEmail}
						texto={email}
                        icon={EnvelopeIcon}
					/>
				</Form>
			</NewsletterContainer>
		</Section>
	);
}

export default Newsletter;