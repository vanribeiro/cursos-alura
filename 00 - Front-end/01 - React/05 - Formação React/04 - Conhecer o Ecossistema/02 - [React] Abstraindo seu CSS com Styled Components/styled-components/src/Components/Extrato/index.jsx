import React from "react";
import { Box, Botao } from "../../Components/UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
        {extratoLista.updates.map(({ id, type, from, value, date }) => {
            return (
                <Items key={id} type={type} value={value} from={from} date={date} />
            );
        })}

        <Botao>Ver mais</Botao>
    </Box>
  );
};

export default Extrato;
