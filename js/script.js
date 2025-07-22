  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menuMobile');

  hamburger.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });

  // Opcional: cerrar menú al hacer clic en un enlace
  document.querySelectorAll('#menuMobile a').forEach(link => {
    link.addEventListener('click', () => {
      menu.style.display = 'none';
    });
  });