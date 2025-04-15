function navigateTo(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

function checkHash() {
  const hash = window.location.hash.slice(1); // Remove o # do início
  if (hash) {
    navigateTo(hash);
  } else {
    navigateTo('mainPage'); // Página padrão ao acessar o site sem hash
  }
}

// Adiciona event listeners para o hashchange e carregamento da página
window.addEventListener('hashchange', checkHash);
window.addEventListener('load', checkHash);
