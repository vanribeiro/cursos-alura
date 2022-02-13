import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function DadosEntrega({aoEnviar}) {
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const width75CSS = { width: "75%" };
  const width24CSS = { width: "24%", marginLeft: "1%" };

  const handleCEP = (event) => {
    setCEP(event.target.value);
  }
  
  const handleEndereco = (event) => {
    setEndereco(event.target.value);
  }

  const handleNumero = (event) => {
    setNumero(event.target.value);
  }

  const handleCidade = (event) => {
    setCidade(event.target.value);
  }

  const handleEstado = (event) => {
    setEstado(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    aoEnviar({cep, endereco, numero, cidade, estado});
  }

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
      <Button variant="contained" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}
export default DadosEntrega;
