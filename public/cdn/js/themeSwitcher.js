// Troca de tema
// Função para aplicar um tema
function setTheme(theme) {
  const body = document.body;

  if (theme === 'light') {
body.classList.add('light-theme');
localStorage.setItem('theme', 'light');
  } else {
body.classList.remove('light-theme');
localStorage.setItem('theme', 'dark');
  }
}

// Função para obter tema do sistema ou navegador
function getSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
return 'light';
  }
  return 'dark';
}

// Inicializar tema ao carregar a página
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = getSystemTheme();

  // Aplica o tema salvo ou usa o padrão (tema escuro) ou tema do sistema
  if (savedTheme) {
setTheme(savedTheme);
  } else {
setTheme(systemTheme);
  }
}

// Chama a inicialização ao carregar
document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
});