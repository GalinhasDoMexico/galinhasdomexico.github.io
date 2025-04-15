document.addEventListener('DOMContentLoaded', async () => {
  // Função para mapear valores de ?l para o formato de arquivo .md
  const mapLangMD = (lang) => {
    switch (lang) {
      case 'pt-br':
        return 'pt-br';
      case 'en-us':
        return 'en-us';
      default:
        return 'pt-br'; // Idioma padrão
    }
  };

  // Função para determinar o idioma com base em `websiteLanguage` e `?l` (sem alterar nenhum deles)
  const getLanguage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('l'); // Captura ?l na URL (ex.: br ou en)
    const storedLang = localStorage.getItem('websiteLanguage'); // Captura do localStorage (ex.: pt-br ou en-us)

    // Prioridade para determinar o idioma:
    if (storedLang) {
      console.info(`Idioma detectado no localStorage: ${storedLang}`);
      return storedLang; // Utiliza o idioma definido no localStorage
    } else if (urlLang) {
      const mappedLang = mapLangMD(urlLang === 'br' ? 'pt-br' : 'en-us'); // Mapeia br/en para pt-br/en-us
      console.info(`Idioma detectado na URL (?l): ${mappedLang}`);
      return mappedLang; // Utiliza o idioma definido na URL
    } else {
      console.info(`Usando idioma padrão: pt-br`);
      return 'pt-br'; // Idioma padrão
    }
  };

  // Função para carregar e renderizar o Markdown
  async function loadMarkdown() {
    try {
      const lang = getLanguage(); // Obtém o idioma final
      console.info(`Idioma final utilizado: ${lang}`);

      // Busca global por todos os elementos com data-md-path
      const markdownContainers = document.querySelectorAll('[data-md-path]');
      for (const container of markdownContainers) {
        let mdPath = container.getAttribute('data-md-path');
        const isMultilang = container.getAttribute('data-md-multilang') === 'true';

        // Ajustar o caminho para incluir o idioma, se necessário
        if (isMultilang) {
          mdPath = `${mdPath}_${lang}.md`; // Formato do arquivo correto
          console.info(`Carregando arquivo: ${mdPath}`);
        }

        // Carregar o conteúdo Markdown
        const response = await fetch(mdPath);
        if (!response.ok) {
          throw new Error(`Erro ao carregar o arquivo: ${mdPath}`);
        }
        const markdown = await response.text();

        // Renderizar o conteúdo Markdown no HTML
        const html = marked.parse(markdown);
        container.innerHTML = html;
      }
    } catch (error) {
      console.error('Erro ao carregar Markdown:', error.message);
      const markdownContainers = document.querySelectorAll('[data-md-path]');
      markdownContainers.forEach(container => {
        container.innerHTML = `<p style="color: red;">Erro ao carregar conteúdo.</p>`;
      });
    }
  }

  // Escuta mudanças de idioma disparadas pelo language.js
  window.addEventListener('languageChanged', () => {
    console.info('Idioma alterado por language.js, recarregando .md...');
    loadMarkdown(); // Recarrega os arquivos Markdown quando o idioma é alterado
  });

  // Carrega o Markdown na inicialização
  loadMarkdown();
});