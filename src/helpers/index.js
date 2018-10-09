export function swapi(urlParam) {
	const baseURL = 'https://swapi.co/api/';
	const endpoint = baseURL + urlParam;
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	const config = {
		method: 'GET',
		headers,
		mode: 'cors',
		cache: 'default',
	};

	return fetch(endpoint, config)
		.then(res => res.json())
		.then(data => data)
		.catch(err => {
			console.error('Fetching error:', err);
		});
}

export function getPath(url) {
	return url.split('/')[1];
}

export function getCustomPath(url, start, end) {
	const path = url.split('/');
	const newPath = [path[start], path[end]];

	return newPath.join('/');
}

export function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
