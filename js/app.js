import makeElementHtmlMovie from './movie.js';
import fetchMovies from './fetch.js';

document.addEventListener('DOMContentLoaded', () => {
	let page = 1;
	const container = document.getElementById('contenedor');
	const pagination = document.getElementById('paginacion');
	const techDiff = document.getElementById('technicalDifficulties');
	const btnPrev = document.getElementById('btnAnterior');
	const btnNext = document.getElementById('btnSiguiente');
	const moviesContainer = document.getElementById('peliculas');
	const toTop = document.getElementById('toTop');

	window.addEventListener('scroll', controlScroll);

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop;
		const display = toTop.style.display;
		const cl = toTop.classList;
		if (st > 300) {
			toTop.style.display = 'block';
			cl.remove('hide');
			cl.add('show');
			setTimeout(() => {cl.add('rotate')}, 2100);
	  } else {
			if (display === 'block') {
				cl.remove('show');
				cl.add('hide');
				setTimeout(() => {
					cl.remove('rotate');
					toTop.style.display = 'none';
				}, 2000);
			}
	  }
	}

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
			techDiff.classList.remove('d-none');
			container.classList.add('d-none');
			pagination.style.display = 'd-none';
			return alert('Ha ocurrido un error');
		}
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});

	btnNext.addEventListener('click', () => {
		if (page < 1000) {
			page += 1;
			loadMovies();
		}
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});

	btnPrev.addEventListener('click', () => {
		if (page > 1) {
			page -= 1;
			loadMovies();
		}
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});

	techDiff.classList.add('d-none');
	container.classList.remove('d-none');
	pagination.style.display = 'flex';

	loadMovies();

});
