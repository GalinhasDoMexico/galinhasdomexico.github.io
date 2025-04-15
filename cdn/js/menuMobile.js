// Define a função toggleMenu no escopo global
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('showMenu');
}

document.addEventListener('DOMContentLoaded', function() {
  // Adiciona o evento de clique ao elemento com a classe .mobileMenu
  const mobileMenuButton = document.querySelector('.mobileMenu');
  if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', function() {
          toggleMenu(); // Alterna o menu ao clicar no botão
      });
  } else {
      console.error('Elemento .mobileMenu não encontrado.');
  }

  // Adiciona o evento de clique ao fundo do menu
  const menuBackground = document.querySelector('.menuBackground');
  if (menuBackground) {
      menuBackground.addEventListener('click', function() {
          toggleMenu(); // Fecha o menu ao clicar no fundo
      });
  } else {
      console.error('Elemento .menuBackground não encontrado.');
  }
});