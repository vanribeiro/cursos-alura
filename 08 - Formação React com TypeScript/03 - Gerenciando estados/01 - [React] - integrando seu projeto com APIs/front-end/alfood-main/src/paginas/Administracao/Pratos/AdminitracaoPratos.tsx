import {
	Paper,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Table,
	TableBody,
	Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import IPrato from "../../../interfaces/IPrato";
import { Link } from "react-router-dom";
import http from "../../../http";

const AdministracaoPratos = () => {

	const [pratos, setPratos] = useState<IPrato[]>([]);

	useEffect(() => {
		http
			.get<IPrato[]>('pratos/')
			.then((resposta) => setPratos(resposta.data));
	}, []);

    const excluir = (pratoAhSerExcluido: IPrato) => {
        http.delete(`pratos/${pratoAhSerExcluido.id}/`)
            .then(() => {
                const listaPratos = pratos.filter(prato => prato.id !== pratoAhSerExcluido.id);
                setPratos([...listaPratos]);
            })
    }

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Nome</TableCell>
						<TableCell>Tag</TableCell>
						<TableCell>Imagem</TableCell>
						<TableCell>Editar</TableCell>
						<TableCell>Excluir</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{pratos?.map((prato) => {
						return (
							<TableRow key={prato.id}>
								<TableCell>{prato.nome}</TableCell>
								<TableCell>{prato.tag}</TableCell>
								<TableCell>
									[ <a href={prato.imagem} target="_blank" rel="noreferrer">ver imagem</a> ]
								</TableCell>
								<TableCell>
									[{" "}
									<Link
										to={`/admin/pratos/${prato.id}`}>
										editar
									</Link>{" "}
									]
								</TableCell>
								<TableCell>
									<Button variant="outlined" color="error" onClick={() => excluir(prato)}>
										excluir
									</Button>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AdministracaoPratos;
