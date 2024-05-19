import React from 'react';

export default function Transacoes({ transacao, estilos }) {
  return (
    <li>
      <p className={estilos.mes}>{transacao.mes}</p>
      <div className={estilos.transacao}>
        <p data-testid="tipoTransacao">{transacao.transacao}</p>
        <span>{transacao.data}</span>
      </div>
      {transacao.transacao === 'Transferência' ? (
        <h3
          data-testid="valorTransacao"
          className={estilos.valor}
        >{`- ${transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</h3>
      ) : (
        <h3
          data-testid="valorTransacao"
          className={estilos.valor}
        >{`${transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</h3>
      )}
      <div className={estilos.divisor} />
    </li>
  );
}
