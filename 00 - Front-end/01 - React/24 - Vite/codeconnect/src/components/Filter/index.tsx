import './style.css';

function Filter() {
    return (
		<>
			<section className="filter__section">
				<ul className="filter__list">
					<li className="filter__item">
						<span>
							Programação{" "}
							<span className="filter__item__close">
								&#10006;
							</span>
						</span>
					</li>
				</ul>
				<button type="button" className="filter__reset">
					Limpar Tudo
				</button>
			</section>
		</>
	);
}

export default Filter;