window.addEventListener('load', function() {
	const newsletterForm = document.querySelector('.footer-newsletter-form');
	newsletterForm.onsubmit = valida;

	function valida() {
		const isValid = true;
		const inputEmail = document.querySelector('.footer-newsletter-input');
		isValid = validaEmail(inputEmail.value);
		inputEmail.onfocus = adicionaPreRenderPaginaCadastrado();

		if(!isValid) {
			inputEmail.classList.add('form-erro');
			document.querySelector('.footer-newsletter-button').classList.add('form-erro');
		}

		return isValid;
	}

	function validaEmail(email) {
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
	}

	function adicionaPreRenderPaginaCadastrado() {
		const prerender = document.createElement('link');
		prerender.rel = 'prerender';
		prerender.href = 'cadastrado.html';
		document.head.appendChild(prerender);
	}

});
