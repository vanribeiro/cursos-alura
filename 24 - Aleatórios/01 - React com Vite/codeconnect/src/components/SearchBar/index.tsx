import { useState } from 'react';
import './style.css';

function SearchBar() {
	const [ termoPesquisa, setTermoPesquisa ] = useState("");

	return (
		<>
			<input
				className="searchbar__input"
				type="search"
				placeholder="Digite o que você procura"
				value={termoPesquisa}
				onChange={(event) => setTermoPesquisa(event?.target.value)}
			/>
		</>
	);
}

export default SearchBar;