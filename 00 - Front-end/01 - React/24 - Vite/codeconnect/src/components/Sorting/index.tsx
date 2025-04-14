import './style.css';

function Sorting() {
    return (
		<>
			<section className="sorting__section">
				<div className="sorting__list">
					<div className="sorting__item sorting__item--active">
                        Recentes
					</div>
					<div className="sorting__item">
                        Antigos
					</div>
				</div>
			</section>
		</>
	);
}

export default Sorting;