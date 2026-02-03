// Troca de idiomas
// Detecta idioma atual pelo path
function getCurrentLangFromPath() {
  const path = window.location.pathname;

  if (path.startsWith('/us/')) return 'en-us';
  if (path.startsWith('/br/')) return 'pt-br';

  return 'pt-br'; // padrão
}

// Função que troca o primeiro segmento br/us e força recarregamento
function changeLocaleAndReload(language) {
  const shortLang = language === 'pt-br' ? 'br' : 'us';
  const url = new URL(window.location.href);
  let path = url.pathname || '/';

  if (!path.startsWith('/')) path = '/' + path;

  if (/^\/(br|us)(\/|$)/i.test(path)) {
    path = path.replace(/^\/(br|us)(\/|$)/i, `/${shortLang}$2`);
  } else {
    path = `/${shortLang}${path}`;
  }

  const newUrl = `${url.origin}${path}${url.search}${url.hash}`;
  console.log('Navegando para', newUrl);
  window.location.href = newUrl;
}

// Registro seguro de listeners (aguarda DOM)
document.addEventListener('DOMContentLoaded', () => {
  const ptBrLink = document.getElementById('lang-pt-br');
  const enUsLink = document.getElementById('lang-en-us');

  const currentLang = getCurrentLangFromPath();

  // Remove active de ambos
  ptBrLink?.classList.remove('active');
  enUsLink?.classList.remove('active');

  // Adiciona active no atual
  if (currentLang === 'pt-br') {
    ptBrLink?.classList.add('active');
  } else {
    enUsLink?.classList.add('active');
  }

  // Eventos de clique
  ptBrLink?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('clicou pt-br');
    changeLocaleAndReload('pt-br');
  });

  enUsLink?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('clicou en-us');
    changeLocaleAndReload('en-us');
  });
});