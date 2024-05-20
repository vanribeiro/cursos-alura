const mockTransactionDepositGet = [
    {
      id: 1,
      transacao: 'Depósito',
      valor: '102',
      data: '22/11/2022',
      mes: 'Novembro',
    },
];

const mockTransactionDepositPost = [
    {
      transacao: 'Depósito',
      valor: '50',
    },
];

const mockAccountBalanceGet = {
  valor: 352
}

export {
    mockAccountBalanceGet,
    mockTransactionDepositGet,
    mockTransactionDepositPost
}