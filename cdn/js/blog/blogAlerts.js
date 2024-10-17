function showAlert() {
  const navigatorLanguage = navigator.language || navigator.userLanguage;
  const isPortugueseBR = navigatorLanguage.includes('pt-BR');
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Xiaomi|Opera Mini/i.test(navigator.userAgent);

  let messageKey;
  if (isPortugueseBR) {
    messageKey = isMobile ? 'ptBRMobile' : '';
  } else {
    messageKey = isMobile ? 'otherMobile' : 'otherDesktop';
  }

  if (messageKey) {
    const message = messages[messageKey];
    const dontShowAgainText = isPortugueseBR ? 'Não mostrar novamente este alerta?' : 'Do not show this alert again? \n (Cancel = No / OK = Yes)';

    // Check if user has already chosen not to show the alert
    const shouldShowAgain = !localStorage.getItem(`alertShown_${messageKey}`);

    if (shouldShowAgain) {
      // Simulate a confirmation dialog with a checkbox
      const response = confirm(`${message}\n\n${dontShowAgainText}`);

      if (response) {
        localStorage.setItem(`alertShown_${messageKey}`, 'true');
      }
    }
  }
}

// Mensagens para cada caso
const messages = {
  ptBRMobile: 'O Blog não foi otimizado para celulares. Continue por sua conta e risco.',
  otherMobile: 'The Blog has not been optimized for mobile devices. Continue at your own risk!\n\nOnly available in Portuguese - Brazil (PT-BR)',
  otherDesktop: 'The Blog is only available in Portuguese - Brazil (PT-BR)'
};

window.addEventListener('load', showAlert);