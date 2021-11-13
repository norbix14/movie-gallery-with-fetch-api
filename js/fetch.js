/**
 * Traer los datos de las peliculas mas populares.
 * 
 * @param {object} data - objeto con datos para la peticion HTTP
 * @param {number} data.page - numero de pagina
 * 
 * @returns una promesa
*/
export default function (data = { page: 1 }) {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie/popular';
    const apiKey = '192e0b9821564f26f52949758ea3c473';
    const language = 'es-MX';
    const url = `${baseURL}?api_key=${apiKey}&language=${language}`;
    return fetch(`${url}&page=${data.page}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
  } catch (e) {
    return {
      status: 500,
      error: e
    }
  }
}
