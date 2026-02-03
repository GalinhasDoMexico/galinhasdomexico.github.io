// Renderiza o markdown
document.addEventListener('DOMContentLoaded', async () => {
  // Função para mapear valores para o formato de arquivo .md
  const mapLangMD = (lang) => {
    switch (lang.toLowerCase()) {
      case 'pt-br':
        return 'pt-br';
      case 'en-us':
        return 'en-us';
      default:
        return 'pt-br';
    }
  };

  // Função para determinar o idioma com base em `websiteLanguage` ou `lang` do <html>
  const getLanguage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const storedLang = localStorage.getItem('websiteLanguage'); // Captura do localStorage
    const htmlLang = document.documentElement.lang; // Captura <html lang="...">

    // Prioridade para determinar o idioma:
      if (htmlLang) {
      const mappedLang = mapLangMD(htmlLang);
      console.info(`Idioma detectado no atributo <html lang>: ${mappedLang}`);
      return mappedLang;
      } 
      else if (storedLang) {
      console.info(`Idioma detectado no localStorage: ${storedLang}`);
      return mapLangMD(storedLang);
    } else {
      console.info(`Usando idioma padrão: pt-br`);
      return 'pt-br';
    }
  };

  // Função para carregar e renderizar o Markdown
  async function loadMarkdown() {
    try {
      const lang = getLanguage();
      console.info(`Idioma final utilizado: ${lang}`);

      const markdownContainers = document.querySelectorAll('[data-md-path]');
      for (const container of markdownContainers) {
        let mdPath = container.getAttribute('data-md-path');
        const isMultilang = container.getAttribute('data-md-multilang') === 'true';

        if (isMultilang) {
          mdPath = `${mdPath}_${lang}.md`;
          console.info(`Carregando arquivo: ${mdPath}`);
        }

        const response = await fetch(mdPath);
        if (!response.ok) throw new Error(`Erro ao carregar o arquivo: ${mdPath}`);
        const markdown = await response.text();

        const html = marked.parse(markdown);
        container.innerHTML = html;
      }
    } catch (error) {
      console.error('Erro ao carregar Markdown:', error.message);
      document.querySelectorAll('[data-md-path]').forEach(container => {
        container.innerHTML = `<p style="color: red;">Erro ao carregar conteúdo.</p>`;
      });
    }
  }

  window.addEventListener('languageChanged', () => {
    console.info('Idioma alterado por language.js, recarregando .md...');
    loadMarkdown();
  });

  loadMarkdown();
});