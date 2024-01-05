document.addEventListener('DOMContentLoaded', function() {
  const themeButton = document.getElementById('theme-button');
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  themeButton.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    updateThemeIcon(isLightMode);
  });

  // Aplicar o tema quando a página carrega
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    updateThemeIcon(true);
  }

  function updateThemeIcon(isLightMode) {
    // Verifique a lógica da página atual
    const currentPage = window.location.pathname;

    // Defina o caminho do ícone com base na lógica da página
    let iconPath;
    if (
      currentPage === '/br/projects/minecraft' ||
      currentPage === '/br/projects/scripts' ||
      currentPage === '/br/projects/design-2d' ||
      currentPage === '/us/projects/minecraft' ||
      currentPage === '/us/projects/scripts' ||
      currentPage === '/us/projects/design-2d'
    ) {
      iconPath = isLightMode ? '/cdn/img/smoke.svg' : '/cdn/img/flashbang.svg';
    } else {
      iconPath = isLightMode ? '/cdn/img/smoke.svg' : '/cdn/img/flashbang.svg';
    }

    // Atribua o caminho do ícone ao src
    themeIcon.src = iconPath;
  }
    // Detecção da página atual
    const currentPage = window.location.pathname;

    // Imprimir no console
    console.log('Current Page:', currentPage);
});