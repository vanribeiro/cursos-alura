import api from './api';

export async function buscaSaldo() {
  const userId = localStorage.getItem('userId');
  if(userId) {
    const resp = await api.get(`/users/${userId}/saldo`);
    return resp.data;
  } 

  return 0;
}

export async function atualizaSaldo(novoSaldo) {

  const userId = localStorage.getItem('userId');
  try {
    api
      .put(`/users/${userId}/saldo`, { saldo: novoSaldo })
      .then((resp) => console.log(resp.status))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
}
