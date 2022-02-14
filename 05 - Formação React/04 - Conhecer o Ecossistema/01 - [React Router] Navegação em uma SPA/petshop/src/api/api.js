async function busca(endPoint, setPosts) {
    const urlBase = `http://localhost:5000`;
    const mountedURL = `${urlBase}${endPoint}`;

    const response = await fetch(mountedURL)
        .then(response => {
            if(!response.ok){
                throw new Error('Esta página não existe');
            }
            return response.json();
        })
        .then(data => setPosts(data));

    return response;
}

export { busca };
