import "./style.css";

interface ILinkButton {
	title: string;
	modifier: string;
}

function LinkButton({ title, modifier }: ILinkButton) {
	return (
		<>
			<a className={`button ${modifier}`} href="#" role="button">
				{title}
			</a>
		</>
	);
}

export default LinkButton;
