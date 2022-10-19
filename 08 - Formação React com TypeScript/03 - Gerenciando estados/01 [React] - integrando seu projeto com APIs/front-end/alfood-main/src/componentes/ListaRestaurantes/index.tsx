import { Button, FormControl, IconButton, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { IPaginacao } from "../../interfaces/IPaginacao";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";

const ListaRestaurantes = () => {
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
	const [mensagem, setMensagem] = useState("");
	const [proximaPagina, setProximaPagina] = useState("");
  const [nomeRestaurante, setNomeRestaurante] = useState("");

	useEffect(() => {
		axios
			.get<IPaginacao<IRestaurante>>(
				"http://localhost:8000/api/v1/restaurantes/",
				{
					params: { ordering: "nome" },
				}
			)
			.then((resposta) => {
				setRestaurantes(resposta.data.results);
				setProximaPagina(resposta.data.next);
			})
			.catch((erro) => {
				console.log(erro);
			});
	}, []);

	const verMais = () => {
		axios
			.get<IPaginacao<IRestaurante>>(proximaPagina)
			.then((resposta) => {
				setRestaurantes([...restaurantes, ...resposta.data.results]);
				setProximaPagina(resposta.data.next);
			})
			.catch((erro) => {
				console.log(erro);
			});
	};

  const buscarRestaurante = (evento: React.FormEvent<HTMLFormElement>) => {

    evento.preventDefault();

    axios
      .get<IPaginacao<IRestaurante>>(
        "http://localhost:8000/api/v1/restaurantes/",
        {
          params: { 
            ordering: "nome",
            search: `${nomeRestaurante}`
          },
        }
      )
      .then((resposta) => {

        if(resposta.data.results.length === 0){
          setMensagem("Ops! Parece que esse restaurante não existe...");
        } else{
          setMensagem("");
        }

        setRestaurantes(resposta.data.results);
        setProximaPagina(resposta.data.next);
        
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

	return (
		<section className={style.ListaRestaurantes}>
			<form onSubmit={buscarRestaurante}>
				<FormControl
					sx={{
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row"
					}}>
					<TextField
            sx={{ width: '90%' }}
						id="standard-basic"
						placeholder="Encontre seu restaurante favorito"
            aria-label="Encontre seu restaurante favorito"
						variant="standard"
						value={nomeRestaurante}
						onChange={evento => setNomeRestaurante(evento.target.value)}
					/>
          <Button sx={{ width: '8%' }} color="primary" type="submit">
						<SearchOutlined />
          </Button>
				</FormControl>
			</form>
			<h1>
				Os restaurantes mais <em>bacanas</em>!
			</h1>
      <p>{mensagem}</p>
			{restaurantes?.map((item) => (
				<Restaurante restaurante={item} key={item.id} />
			))}
			{proximaPagina && <button onClick={verMais}>ver mais</button>}
		</section>
	);
};

export default ListaRestaurantes;
