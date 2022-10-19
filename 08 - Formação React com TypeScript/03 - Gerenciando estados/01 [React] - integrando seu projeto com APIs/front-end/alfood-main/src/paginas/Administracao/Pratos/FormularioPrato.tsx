import {
	TextField,
	Button,
	Typography,
	Box,
	Container,
	Paper,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IPrato from "../../../interfaces/IPrato";
import http from "../../../http";
import ITag from "../../../interfaces/ITag";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormularioPrato = () => {
	
	const [nomePrato, setNomePrato] = useState<string>("");
	const [descricao, setDescricao] = useState<string>("");

	const [tags, setTags] = useState<ITag[]>([]);
	const [tag, setTag] = useState<string>("");

	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
	const [restaurante, setRestaurante] = useState<number>(0);
	const [imagem, setImagem] = useState<File | null>(null);

	const parametros = useParams();

	useEffect(() => {
		http.get<{ tags: ITag[] }>("tags/").then((resposta) =>
			setTags(resposta.data.tags)
		);

		http.get<IRestaurante[]>("restaurantes/").then((resposta) =>
			setRestaurantes(resposta.data)
		);

		if (parametros.id) {

			http.get<IPrato>(`pratos/${parametros.id}/`).then((resposta) =>{
				setNomePrato(resposta.data.nome);
				setDescricao(resposta.data.descricao);
				setTag(resposta.data.tag);
				setRestaurante(resposta.data.restaurante);
			});


		}
	}, [parametros]);

	const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
		if (evento.target.files?.length) {
			setImagem(evento.target.files[0]);
		} else{
			setImagem(null);
		}
	};

	const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		const formData = new FormData();
		formData.append('nome', nomePrato);
		formData.append('descricao', descricao);
		formData.append('tag', tag);
		formData.append('restaurante', restaurante.toString());
		if(imagem){
			formData.append('imagem', imagem);
		}

		if(parametros.id){
			http.request({
				url: `pratos/${parametros.id}/`,
				method: 'PUT',
				headers: {'Content-Type': 'multipart/form-data'},
				data: formData
			})
			.then(() => alert('Prato cadastrado com sucesso!'))
			.catch(erro => console.log(erro));
		} else{
			http.request({
				url: 'pratos/',
				method: 'POST',
				headers: {'Content-Type': 'multipart/form-data'},
				data: formData
			})
			.then(() => {
				setNomePrato('');
				setDescricao('');
				setRestaurante(0);
				setTag('');
				setImagem(null);
				alert('Prato cadastrado com sucesso!');
			})
			.catch(erro => console.log(erro));
		}

	};

	return (
		<>
			<Box>
				<Container maxWidth="lg" sx={{ mt: 1 }}>
					<Paper sx={{ padding: 2 }}>
						<Box
							sx={{
								marginTop: 1,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								flexGrow: 1,
							}}>
							<Typography component="h1" variant="h6">
								Formulário de Pratos
							</Typography>
							<Box
								component="form"
								sx={{ width: "100%" }}
								onSubmit={aoSubmeterForm}>
								<TextField
									id="standard-basic"
									label="Nome do Prato"
									variant="standard"
									value={nomePrato}
									onChange={(evento) =>
										setNomePrato(evento.target.value)
									}
									fullWidth
									margin="dense"
									required
								/>
								<TextField
									id="standard-basic"
									label="Descricao"
									variant="standard"
									value={descricao}
									onChange={(evento) =>
										setDescricao(evento.target.value)
									}
									fullWidth
									margin="dense"
									required
								/>
								<FormControl margin="dense" fullWidth>
									<InputLabel id="select-tag">Tag</InputLabel>
									<Select
										labelId="select-tag"
										value={tag}
										onChange={(evento) =>
											setTag(evento.target.value)
										}>
										{tags.map((tag) => (
											<MenuItem
												key={tag.id}
												value={tag.value}>
												{tag.value}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<FormControl margin="dense" fullWidth>
									<InputLabel id="select-restaurante">
										Restaurante
									</InputLabel>
									<Select
										labelId="select-restaurante"
										value={restaurante}
										onChange={(evento) =>
											setRestaurante(Number(evento.target.value))
										}>
										{restaurantes.map((restaurante) => (
											<MenuItem
												key={restaurante.id}
												value={restaurante.id}>
												{restaurante.nome}
											</MenuItem>
										))}
									</Select>
								</FormControl>

								<input
									type="file"
									onChange={selecionarArquivo}
								/>

								<Button
									sx={{ marginTop: 2 }}
									type="submit"
									variant="outlined"
									fullWidth>
									Salvar
								</Button>
							</Box>
						</Box>
					</Paper>
				</Container>
			</Box>
		</>
	);
};

export default FormularioPrato;
