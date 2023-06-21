const ordernarPelaDistancia = (a: any, b: any) => {
  const A = a.distancia;
  const B = b.distancia;

  if (A < B) {
    return -1;
  }
  if (A > B) {
    return 1;
  }
  return 0;
};

const ordernarPelaPiorClassificacao = (a: any, b: any) => {
  const A = a.estrelas;
  const B = b.estrelas;

  if (A < B) {
    return -1;
  }
  if (A > B) {
    return 1;
  }
  return 0;
};

const ordernarPelaMelhorClassificacao = (a: any, b: any) => {
  const A = a.estrelas;
  const B = b.estrelas;

  if (A > B) {
    return -1;
  }
  if (A < B) {
    return 1;
  }
  return 0;
};

const ordernarPeloNomeAZ = (a: any, b: any) => {
  const A = a.nome;
  const B = b.nome;

  return A.localeCompare(B);
};

const ordernarPeloNomeZA = (a: any, b: any) => {
  const A = a.nome;
  const B = b.nome;

  return -B.localeCompare(A);
};

export {
  ordernarPelaDistancia,
  ordernarPeloNomeAZ,
  ordernarPeloNomeZA,
  ordernarPelaPiorClassificacao,
  ordernarPelaMelhorClassificacao,
};
