/**
 * Crear una etiqueta HTML `<img>`.
 * 
 * @param {object} data - objeto con los datos para la imagen
 * @param {string} data.src - url de la imagen
 * @param {string} data.title - titulo de la imagen
 * @param {string} data.alt - texto alternativo de la imagen
 * 
 * @returns una cadena con un elemento HTML
*/
export default function (data = {src: '', title: '', alt: ''}) {
  return `
    <img
      class="poster"
      title="${data.title}"
      src="${data.src}"
      alt="${data.title}"
      loading="lazy"
    >`;
}
