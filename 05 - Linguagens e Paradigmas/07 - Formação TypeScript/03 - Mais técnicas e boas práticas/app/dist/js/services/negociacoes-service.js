import { Negociacao } from "../models/negociacao.js";
class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((dados) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    }
}
export { NegociacoesService };
//# sourceMappingURL=negociacoes-service.js.map