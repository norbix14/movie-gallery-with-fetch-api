import makeElementHtmlMovie from './movie.js';
import fetchMovies from './fetch.js';

document.addEventListener('DOMContentLoaded', () => {
	let page = 1;
	const btnPrev = document.getElementById('btnAnterior');
	const btnNext = document.getElementById('btnSiguiente');
	const moviesContainer = document.getElementById('peliculas');

	const loadMovies = async () => {
		try {
			let movies = '';
			const response = await fetchMovies({ page });
			const { status } = response;
			if (status !== 200) return alert(`Ha ocurrido un error ${status}`);
			const { results } = await response.json();
			results.forEach(movie => movies += makeElementHtmlMovie(movie));
			moviesContainer.innerHTML = movies;
		} catch (e) {
			return alert('Ha ocurrido un error');
		}
	}

	btnNext.addEventListener('click', () => {
		if (page < 1000) {
			page += 1;
			loadMovies();
		}
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	});

	btnPrev.addEventListener('click', () => {
		if (page > 1) {
			page -= 1;
			loadMovies();
		}
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	});

	loadMovies();

});
