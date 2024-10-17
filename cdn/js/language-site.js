function getBrowserLanguage() {
  return (navigator.language || navigator.userLanguage).toLowerCase();
}

// Verifique o idioma no localStorage e redirecione
const storedLanguage = localStorage.getItem('language');

if (storedLanguage) {
  // Redirecionar com base no valor armazenado
  if (storedLanguage === 'br') {
      window.location.href = '/br/';
  } else if (storedLanguage === 'us') {
      window.location.href = '/us/';
  }
} else {
  // Usar o idioma do navegador se não houver valor no localStorage
  const browserLanguage = getBrowserLanguage();
  if (browserLanguage.includes('pt')) {
      window.location.href = '/br/';
  } else {
      window.location.href = '/us/';
  }
}