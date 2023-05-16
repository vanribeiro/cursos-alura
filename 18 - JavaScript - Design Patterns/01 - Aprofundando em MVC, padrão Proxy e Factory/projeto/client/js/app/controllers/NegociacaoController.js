class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia'
        );
        
        this._mensagem = new Bind(
            new Mensagem(), 
            new MensagemView($('#mensagemView')),
            'texto',
            'bootstrapColorName'
        );
        
        this.TIMEOUT = 3 * 1000;
    }
    
    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagem.bootstrapColorName = 'success';
        this._messageTimer = setTimeout(() => { this._mensagem.resetaMensagem() }, this.TIMEOUT);
        this._limpaFormulario();   
    }

    importaNegociacoes() {
        let service = new NegociacaoService();

        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()
        ]).then(negociacoes => 
                negociacoes
                    .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                    .forEach(negociacao => {
                        this._mensagem.texto = 'Negociações importadas com sucesso!';
                        this._mensagem.bootstrapColorName = 'success';
                        this._messageTimer = setTimeout(() => { this._mensagem.resetaMensagem() }, this.TIMEOUT);
                        this._listaNegociacoes.adiciona(negociacao);
                    }
        )).catch(erro => {
                    this._mensagem.texto = erro;
                    this._mensagem.bootstrapColorName = 'danger';
                    this._messageTimer = setTimeout(() => { this._mensagem.resetaMensagem() }, 5 * 1000);
                });

    }

    apaga () {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociação apagada com sucesso!";
        this._mensagem.bootstrapColorName = 'success';
        this._messageTimer = setTimeout(() => { this._mensagem.resetaMensagem() }, this.TIMEOUT);
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}