const useFormatadorDeMoedas = () =>{
    const stringCurrencyStyle = { style: 'currency', currency: 'BRL'};
    
    const converteParaMoedaBrasileira = (valor) => {
        return typeof valor === 'string'
            ? parseFloat(valor).toLocaleString('pt-BR', stringCurrencyStyle)
            :  valor.toLocaleString('pt-BR', stringCurrencyStyle)
    }

    return {
        converteParaMoedaBrasileira
    }
}


export default useFormatadorDeMoedas;