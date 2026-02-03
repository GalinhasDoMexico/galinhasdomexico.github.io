function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    const isOpen = mobileMenu.classList.toggle('showMenu');

    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  } else {
    console.error('Elemento #mobileMenu não encontrado.');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector('.menuToggle');
  const menuBackground = document.querySelector('.menuNav');

  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }
  if (menuBackground) {
    menuBackground.addEventListener('click', toggleMenu);
  }
});
