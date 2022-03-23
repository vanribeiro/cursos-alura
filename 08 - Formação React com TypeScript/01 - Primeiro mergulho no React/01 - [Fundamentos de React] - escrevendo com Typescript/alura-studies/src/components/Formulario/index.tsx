import Botao from "../Botao";

const Formulario = () => {
	return (
		<form>
			<div>
				<label htmlFor="tarefa">Adicione um novo estudo</label>
				<input
					id="tarefa"
					name="tarefa"
					type="text"
					placeholder="O que você quer estudar?"
					required
				/>
			</div>
			<div>
				<label htmlFor="tempo">Tempo</label>
				<input
					id="tempo"
					name="tempo"
					type="time"
					step="1"
					min="00:00:00"
					max="01:30:00"
					required
				/>
			</div>
			<Botao />
		</form>
	);
};

export default Formulario;
