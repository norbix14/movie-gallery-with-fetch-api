document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('contenedor');
  const pagination = document.getElementById('paginacion');
  const techDiff = document.getElementById('technicalDifficulties');

  techDiff.classList.remove('d-none');
	container.classList.add('d-none');
  pagination.style.display = 'none';
});
