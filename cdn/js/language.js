document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const languageFromURL = urlParams.get('l');
  const savedLanguage = localStorage.getItem('websiteLanguage');

  const browserLanguage = navigator.language.toLowerCase().includes('pt') ? 'pt-br' : 'en-us';
  const language = languageFromURL === 'br' ? 'pt-br' :
                   languageFromURL === 'us' ? 'en-us' :
                   (savedLanguage || browserLanguage);

  if (!savedLanguage || languageFromURL) {
    localStorage.setItem('websiteLanguage', language);
  }

  setLanguage(language);

  const ptBrLink = document.getElementById('lang-pt-br');
  const enUsLink = document.getElementById('lang-en-us');

  if (ptBrLink) {
    ptBrLink.addEventListener('click', (event) => {
      event.preventDefault();
      setLanguageWithoutReload('pt-br');
    });
  }

  if (enUsLink) {
    enUsLink.addEventListener('click', (event) => {
      event.preventDefault();
      setLanguageWithoutReload('en-us');
    });
  }

  window.addEventListener('hashchange', updateTitle);
  window.addEventListener('load', updateTitle);
});

// Adiciona um evento personalizado para sinalizar a mudança de idioma
function triggerLanguageChange() {
  const event = new CustomEvent('languageChanged');
  window.dispatchEvent(event);
}

function setLanguage(language) {
  fetch('/cdn/json/translations.json')
    .then(response => response.json())
    .then(translations => {
      const elementsToTranslate = document.querySelectorAll('[data-translate]:not([data-ignore])'); // Ignorar elementos com data-ignore
      elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        if (translations[language][translationKey]) {
          const textElement = element.querySelector('.language_textWithOtherElement');
          if (textElement) {
            textElement.textContent = translations[language][translationKey];
          } else if (element.tagName.toLowerCase() === 'button' || element.querySelector('svg') || element.querySelector('img')) {
            element.childNodes.forEach(child => {
              if (child.nodeType === Node.TEXT_NODE) {
                child.textContent = translations[language][translationKey];
              }
            });
          } else {
            element.textContent = translations[language][translationKey];
          }
        }
        if (translations[language][`${translationKey}-title`]) {
          element.title = translations[language][`${translationKey}-title`];
        }
      });

      const titleElement = document.querySelector('title');
      const titleKey = titleElement.getAttribute('data-translate');
      document.title = translations[language][titleKey] || 'Título Desconhecido';

      document.querySelectorAll('.language-link').forEach(link => {
        link.classList.remove('active');
        if (link.id === `lang-${language}`) {
          link.classList.add('active');
        }
      });

      localStorage.setItem('websiteLanguage', language);
      triggerLanguageChange(); // Dispara o evento de mudança de idioma
    })
    .catch(error => console.error('Erro ao carregar as traduções:', error));
}

function setLanguageWithoutReload(language) {
  const url = new URL(window.location);
  const shortLang = language === 'pt-br' ? 'br' : 'us';
  url.searchParams.set('l', shortLang);
  window.history.pushState({}, '', url);
  setLanguage(language);
}