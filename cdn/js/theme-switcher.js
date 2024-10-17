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
    const currentPage = window.location.pathname;
    let iconPath;
    if (
      currentPage === '/br/portfolio/minecraft' ||
      currentPage === '/br/portfolio/scripts' ||
      currentPage === '/br/portfolio/design-2d' ||
      currentPage === '/us/portfolio/minecraft' ||
      currentPage === '/us/portfolio/scripts' ||
      currentPage === '/us/portfolio/design-2d'
    ) {
      iconPath = isLightMode ? '/cdn/img/smoke.svg' : '/cdn/img/flashbang.svg';
    } else {
      iconPath = isLightMode ? '/cdn/img/smoke.svg' : '/cdn/img/flashbang.svg';
    }
    themeIcon.src = iconPath;
  }

  // Detecção da página atual
  const currentPage = window.location.pathname;
  console.log('Current Page:', currentPage);
});
