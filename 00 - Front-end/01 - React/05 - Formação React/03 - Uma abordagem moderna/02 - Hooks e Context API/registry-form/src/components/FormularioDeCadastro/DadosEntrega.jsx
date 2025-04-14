import React, { useEffect, useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");
  const [pontoDeReferencia, setPontoDeReferencia] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  const width75CSS = { width: "75%" };
  const width24CSS = { width: "24%", marginLeft: "1%" };

  useEffect(() => {
    const cleanedCEP = cep.replace(/\D/g, "");
    const cepRegexp = /^[0-9]{8}$/;
    const urlEndpoint = `https://viacep.com.br/ws/${cleanedCEP}/json`;
    const isValidCEP = cepRegexp.test(cleanedCEP);

    if(cep !== "" && isValidCEP){
        fetch(urlEndpoint)
          .then((response) => response.json())
          .then((endereco) => {
            setEndereco(endereco.logradouro);
            setBairro(endereco.bairro);
            setCidade(endereco.localidade);
            setEstado(endereco.uf);
          });
    }

  }, [cep]);

  const handleCEP = (event) => {
    setCEP(event.target.value);
    if(event.target.value === ''){
      setEndereco('');
      setBairro('');
      setCidade('');
      setEstado('');
    }
  };

  const handleEndereco = (event) => {
    setEndereco(event.target.value);
  };

  const handleNumero = (event) => {
    setNumero(event.target.value);
  };

  const handleBairro = (event) => {
    setBairro(event.target.value);
  };

  const handleCidade = (event) => {
    setCidade(event.target.value);
  };

  const handleEstado = (event) => {
    setEstado(event.target.value);
  };

  const handleComplemento = (event) => {
    setComplemento(event.target.value);
  };

  const handlepontoDeReferencia = (event) => {
    setPontoDeReferencia(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (possoEnviar()) {
      aoEnviar({
        cep,
        endereco,
        numero,
        bairro,
        cidade,
        estado,
        complemento,
        pontoDeReferencia,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="cep"
        type="text"
        name="cep"
        label="CEP"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        value={cep}
        onChange={handleCEP}
        onBlur={validarCampos}
        error={!erros.cep.valido}
        helperText={erros.cep.texto}
      />
      <Box fullWidth>
        <TextField
          sx={width75CSS}
          id="endereco"
          type="text"
          name="endereco"
          label="Endereço"
          required
          variant="outlined"
          margin="normal"
          value={endereco}
          onChange={handleEndereco}
        />
        <TextField
          sx={width24CSS}
          id="numero"
          type="number"
          name="numero"
          label="Número"
          required
          variant="outlined"
          margin="normal"
          value={numero}
          onChange={handleNumero}
        />
      </Box>
      <TextField
        id="bairro"
        type="text"
        name="bairro"
        label="Bairro"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        value={bairro}
        onChange={handleBairro}
      />
      <Box>
        <TextField
          sx={width75CSS}
          id="cidade"
          type="text"
          name="cidade"
          label="Cidade"
          required
          variant="outlined"
          margin="normal"
          value={cidade}
          onChange={handleCidade}
        />
        <TextField
          sx={width24CSS}
          id="estado"
          type="text"
          name="estado"
          label="Estado"
          required
          variant="outlined"
          margin="normal"
          value={estado}
          onChange={handleEstado}
        />
      </Box>
      <TextField
        id="complemento"
        type="text"
        name="complemento"
        label="Complemento"
        variant="outlined"
        margin="normal"
        fullWidth
        value={complemento}
        onChange={handleComplemento}
      />
      <TextField
        id="ponto-de-referencia"
        type="text"
        name="pontoDeReferencia"
        label="Ponto de Referência"
        variant="outlined"
        margin="normal"
        fullWidth
        value={pontoDeReferencia}
        onChange={handlepontoDeReferencia}
      />
      <Button variant="contained" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}
export default DadosEntrega;
