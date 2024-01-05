
  function getBrowserLanguage() {
    return (navigator.language || navigator.userLanguage).toLowerCase();
  }

  // Verifique o idioma do navegador e redirecione
  const browserLanguage = getBrowserLanguage();
  if (browserLanguage.includes('pt')) {
    // Se o idioma for português, redirecione para /br/
    window.location.href = '/br/';
  } else {
    // Para outros idiomas, redirecione para /us/
    window.location.href = '/us/';
  }