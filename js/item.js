/**
 * Crear un nuevo item.
 * 
 * @param {object} data - objeto con datos
 * @param {string} data.title - informacion
 * @param {string} data.icon - clases del icono a mostrar
 * 
 * @returns una cadena con un elemento HTML
*/
export default function (data = {title: '', icon: 'fas fa-info-circle'}) {
  return `
    <div class="item">
      <p title="${data.title}">
        <i class="${data.icon}"></i>
      </p>
    </div>
  `;
}
