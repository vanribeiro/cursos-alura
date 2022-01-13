class DateHelper{

    constructor() {
        throw new Error('Esta classe não pode ser instaciada');
    }

    static dataParaTexto(data) {
        let dia = data.getDate();
        let mes = (data.getMonth() + 1) > 9? (data.getMonth() + 1) : `0${(data.getMonth() + 1)}`;
        let ano = data.getFullYear();
        let diaMesAno = `${dia}/${mes}/${ano}`;
        return diaMesAno
    }

    static textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => indice === 1 ? item - 1 : item));
    }

    /**
     * POO: Métodos que pertence a definição da classe
     * Métodos estáticos são métodos que eu invoco diretamente da classe.
     * Não preciso criar uma instância toda vez que eu precisar usar algum método da classe em questão.
     */
}