document.addEventListener('DOMContentLoaded', function() {
    // Função para detectar dispositivos móveis
    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  
    // Função para verificar se a URL contém "transparency"
    function isTransparencyPage() {
      const url = window.location.href;
      return url.toLowerCase().includes('transparency');
    }
  
    // Função para obter o idioma do navegador
    function getBrowserLanguage() {
      return (navigator.language || navigator.userLanguage).toLowerCase();
    }
  
    // Verifica se o usuário está em um dispositivo móvel e na página "Transparency"
    if (isMobileDevice() && isTransparencyPage()) {
      const browserLanguage = getBrowserLanguage();
      const message = (browserLanguage === 'pt') ? 'Esta parte do site não foi otimizada para celular' : 'This part of the site has not been optimized for mobile';
      alert(message);
    }
});
  