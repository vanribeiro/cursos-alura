// carrega videos assincronamente
setTimeout(function(){

	const containers = document.querySelectorAll('.elasticMedia-container[data-src]');
	for (let i = 0; i < containers.length; i++) {
		const src = containers[i].getAttribute('data-src');
		containers[i].innerHTML = `<iframe width="560" height="315" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
	}

}, 3 * 1000);