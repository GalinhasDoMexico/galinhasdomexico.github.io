let translations = {};

// Mostrar a tela de loading
function showLoading() {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'flex';
}

// Ocultar a tela de loading com fade out
function hideLoading() {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.opacity = '1';
  loadingElement.style.transition = 'opacity 0.5s';
  loadingElement.style.opacity = '0';
  
  setTimeout(() => {
    loadingElement.style.display = 'none';
    document.getElementById('indexContent').style.display = 'block'; // Exibe a seção principal
  }, 500); // Tempo deve ser igual ao da transição
}


// Carregar traduções de um arquivo JSON
async function loadTranslations(language) {
  showLoading(); // Mostrar loading ao iniciar o carregamento
  const response = await fetch('/cdn/json/translations.json');
  const data = await response.json();
  translations = data[language] || {};
  updateTitle();
  hideLoading(); // Ocultar loading após carregar
}

// Inicializar traduções
async function initializeTranslations() {
  const language = localStorage.getItem('websiteLanguage') || 'pt-br';
  await loadTranslations(language);
  updateTitle(); // Atualiza título ao carregar
  checkHash(); // Verifica a hash após carregar as traduções
  document.body.style.display = 'block'; // Exibe o conteúdo da página após o carregamento
}

// Atualizar título e data-translate
function updateTitle() {
  const sectionId = window.location.hash.slice(1) || 'home';
  const titleElement = document.querySelector('title');
  titleElement.setAttribute('data-translate', sectionId);

  const language = localStorage.getItem('websiteLanguage') || 'pt-br';
  if (translations[sectionId]) {
    titleElement.textContent = translations[sectionId] || 'Título Desconhecido';
  } else {
    fetch('/cdn/json/translations.json')
      .then(response => response.json())
      .then(data => {
        translations = data[language] || {};
        titleElement.textContent = translations[sectionId] || 'Título Desconhecido';
      });
  }
}

// Função para navegação entre seções e sub-seções
function navigateTo(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (section.id === sectionId || section.dataset.id === sectionId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
  updateURL(sectionId);
  updateTitle();
}

// Atualizar URL sem recarregar a página
function updateURL(sectionId) {
  const newURL = `#${sectionId}`;
  window.history.pushState(null, '', newURL);
}

// Verificar hash e navegar para a seção correspondente, incluindo sub-seções
function checkHash() {
  const hash = window.location.hash.slice(1);
  if (hash) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }
}

// Adicionar event listeners
window.addEventListener('hashchange', checkHash);
window.addEventListener('load', initializeTranslations);

// Ouvir o evento de mudança de idioma
window.addEventListener('languageChanged', () => {
  const language = localStorage.getItem('websiteLanguage') || 'pt-br';
  loadTranslations(language);
});