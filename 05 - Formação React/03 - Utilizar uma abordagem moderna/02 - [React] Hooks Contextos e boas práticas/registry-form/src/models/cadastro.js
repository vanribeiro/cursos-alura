const validarCPF = (cpf) => {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 dígitos" };
    } else{
        return { valido: true, texto: "" };
    } 
}

const validarSenha = (senha) => {
    if (senha.length !== 4) {
        return { valido: false, texto: "Senha deve ter entre 04 e 72 dígitos" };
    } else{
        return { valido: true, texto: "" };
    } 
}

const validarNome = (nome) => {
    if (nome.length < 4) {
        return { valido: false, texto: "Nome deve ter no mínimo 03 caracteres" };
    } else{
        return { valido: true, texto: "" };
    } 
}
  
export {
    validarNome,
    validarCPF,
    validarSenha
}