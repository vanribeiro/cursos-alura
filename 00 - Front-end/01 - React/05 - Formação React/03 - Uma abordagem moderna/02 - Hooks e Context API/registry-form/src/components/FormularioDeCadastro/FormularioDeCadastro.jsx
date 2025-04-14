import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioDeCadastro({ aoEnviar }) {
  const [etapaAtual, setEpataAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const sxTypography = { marginTop: '20px', textAlign: "center" };
  const sxStepper = { margin: '20px auto'};

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados}/>,
    <Typography sx={sxTypography} variant="h5">
      Obrigado pelo Cadastro!
    </Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEpataAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper sx={sxStepper} activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pesssoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioDeCadastro;
