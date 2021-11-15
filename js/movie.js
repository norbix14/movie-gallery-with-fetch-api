import Img from './image.js';
import Item from './item.js';

/**
 * Crear un elemento HTML conteniendo los datos de una pelicula.
 * 
 * @param {object} data - objeto con todos los datos de la pelicula
 * 
 * @returns una cadena con un elemento HTML
*/
export default function (data) {
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const {
    poster_path,
    title,
    overview,
    release_date,
    popularity,
    adult,
    original_language,
    original_title
  } = data;
  const src = poster_path !== null ? `${baseURL}${poster_path}` : 'img/no-image-icon.png';
  return `
    <div class="pelicula">
      ${Img({
        title: `Título original: ${original_title}`,
        src,
        alt: `${title} movie`
      })}
      <h3 class="titulo">${title}</h3>
      <div class="mas-info">
        ${Item({
          title: `Descripción: ${overview ? overview : 'No disponible'}`,
          icon: 'fas fa-info-circle'
        })}
        ${Item({
          title: `Fecha de estreno: ${release_date}`,
          icon: 'fas fa-calendar-alt'
        })}
        ${Item({
          title: `Popularidad: ${popularity}`,
          icon: 'fas fa-fire-alt'
        })}
        ${Item({
          title: `Idioma original: ${original_language}`,
          icon: 'fas fa-language'
        })}
        ${Item({
          title: `Película para adultos: ${adult ? 'Si' : 'No'}`,
          icon: `${adult ? 'far fa-frown' : 'far fa-smile'}`
        })}
      </div>
    </div>
  `;
}