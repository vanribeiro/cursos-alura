interface IPublishButton {
	title: string;
	modifier: string;
}

function PublishButton({ title, modifier }: IPublishButton) {
	return (
		<>
			<a className={`button button--${modifier}`} href="#" role="button">
				{title}
			</a>
		</>
	);
}

export default PublishButton;
