document.addEventListener('DOMContentLoaded', () => {
  const ageModal = document.getElementById('age-modal-overlay');
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');

  // 1. Comprobar si el usuario ya ha verificado su edad anteriormente
  // Si NO hay registro en el navegador, mostramos el modal
  if (!localStorage.getItem('ageVerified')) {
    ageModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de la web de fondo
  }

  // 2. ¿Qué pasa si dice que SÍ?
  btnYes.addEventListener('click', () => {
    // Guardamos en el navegador que ya verificó la edad
    localStorage.setItem('ageVerified', 'true');
    // Ocultamos la ventana
    ageModal.style.display = 'none';
    // Devolvemos el scroll a la página
    document.body.style.overflow = 'auto';
  });

  // 3. ¿Qué pasa si dice que NO?
  btnNo.addEventListener('click', () => {
    // Lo expulsamos redirigiéndolo a otra web (puedes cambiar esta URL)
    window.location.href = 'https://www.google.com';
  });
});