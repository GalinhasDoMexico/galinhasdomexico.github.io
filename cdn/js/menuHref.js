document.addEventListener('DOMContentLoaded', function() {
  const baseUrl = window.location.origin;
  const currentPath = window.location.pathname;

  // Obter o valor do atributo lang
  const currentLang = document.documentElement.lang;
  let currentHome = currentLang === 'pt-br' ? '/br/' : '/us/';

  // Definir substituições de links e texto
  const replacements = {
    '{home}': currentHome,

    '{portfolio-minecraft}': currentLang === 'pt-br' ? '/br/portfolio/minecraft' : '/us/portfolio/minecraft',
    '{portfolio-design-2d}': currentLang === 'pt-br' ? '/br/portfolio/design-2d' : '/us/portfolio/design-2d',
    '{blog}': currentPath.startsWith('/blog/') ? '/blog/' : (currentLang === 'pt-br' ? '/blog/' : '/blog/'),
    '{blogAbout}': currentPath.startsWith('/blog/about') ? '/blog/about' : (currentLang === 'pt-br' ? '/blog/about' : '/blog/about'),
    '{blogTags}': currentPath.startsWith('/blog/tags') ? '/blog/tags' : (currentLang === 'pt-br' ? '/blog/tags' : '/blog/tags'),
    '{about-me}': currentLang === 'pt-br' ? '/br/about-me' : '/us/about-me',
    
    /* Title */
    '{homeTitle}': currentLang === 'pt-br' ? 'Início' : 'Home',
    '{portfolioTitle}': currentLang === 'pt-br' ? 'Portfolio' : 'Portfolio',
    '{portfolio-minecraftTitle}': currentLang === 'pt-br' ? 'Portfolio de Renders de Minecraft' : 'Minecraft Renders Portfolio',
    '{portfolio-design-2dTitle}': currentLang === 'pt-br' ? 'Portfolio de Design 2D' : '2D Design Portfolio',
    '{blogTitle}': currentPath.startsWith('/blog/') ? 'Blog' : (currentLang === 'pt-br' ? 'Blog' : 'Blog'),
    '{blogAboutTitle}': currentPath.startsWith('/blog/') ? 'Sobre o Blog' : (currentLang === 'pt-br' ? 'Sobre o Blog' : 'Sobre o Blog'),
    '{blogTagsTitle}': currentPath.startsWith('/blog/') ? 'Tags do Blog' : (currentLang === 'pt-br' ? 'Tags do Blog' : 'Tags do Blog'),
    '{about-meTitle}': currentLang === 'pt-br' ? 'Sobre mim' : 'About me',
    '{menuTitle}': currentLang === 'pt-br' ? 'Menu' : 'Menu',
    '{themeTitle}': currentLang === 'pt-br' ? 'Troque o tema entre claro e escuro' : 'Switch the theme between light and dark',
    '{changeLanguageTitle}': currentLang === 'pt-br' ? 'Selecione um idioma' : 'Select a language',
    '{pt-brTitle}': currentLang === 'pt-br' ? 'Mudar para o Português - Brasil' : 'Switch to Portuguese - Brazil',
    '{en-usTitle}': currentLang === 'pt-br' ? 'Mudar para o Inglês' : 'Switch to English',

    /* Footer */
    '{changeLog}': currentPath.startsWith('/changelog/') ? '/changelog/' : (currentLang === 'pt-br' ? '/changelog/' : '/changelog/'),
    '{changeLogWebsite}': currentPath.startsWith('/changelog/website') ? '/changelog/website' : (currentLang === 'pt-br' ? '/changelog/website' : '/changelog/website'),
    '{changeLogBlog}': currentPath.startsWith('/changelog/blog') ? '/changelog/blog' : (currentLang === 'pt-br' ? '/changelog/blog' : '/changelog/blog'),
    '{changeLogTitle}': currentPath.startsWith('/changelog/') ? 'Veja as atualizações feitas' : (currentLang === 'pt-br' ? 'Veja as atualizações feitas' : 'See the updates made'),
    '{changeLogWebsiteTitle}': currentPath.startsWith('/changelog/website') ? 'Atualizações do Website' : (currentLang === 'pt-br' ? 'Atualizações do Website' : 'Website Updates'),
    '{changeLogBlogTitle}': currentPath.startsWith('/changelog/blog') ? 'Atualizações do Blog' : (currentLang === 'pt-br' ? 'Atualizações do Blog' : 'Blog Updates'),
    '{socialBsky}': currentLang === 'pt-br' ? '/l?id=Bsky' : '/l?id=Bsky',
    '{socialYouTube}': currentLang === 'pt-br' ? '/br/link/youtube' : '/us/link/youtube',
    '{socialLastfm}': currentLang === 'pt-br' ? '/l?id=Lastfm' : '/l?id=Lastfm',
    '{socialBskyTitle}': currentLang === 'pt-br' ? 'Meu perfil no Bluesky' : 'My profile on Bluesky',
    '{socialYouTubeTitle}': currentLang === 'pt-br' ? 'Meus canais no YouTube' : 'My channels on YouTube',
    '{socialLastfmTitle}': currentLang === 'pt-br' ? 'Meu perfil no Last.fm' : 'My profile on Last.fm',
  };

  // Função para atualizar atributos href, texto e title com base nas substituições
  function updateContent() {
    const elements = document.querySelectorAll('*');  // Seleciona todos os elementos

    elements.forEach(element => {
      const content = element.textContent;  // Obtém o conteúdo do elemento
      if (content) {
        for (const key in replacements) {
          if (content.includes(key)) {
            const replacementValue = replacements[key];
            const newContent = content.replace(key, replacementValue);
            element.textContent = newContent;
            break;  // Sair do loop após a primeira substituição
          }
        }
      }

      // Verifica atributo title
      const title = element.getAttribute('title');
      if (title) {
        for (const key in replacements) {
          if (title.includes(key)) {
            const replacementValue = replacements[key];
            const newTitle = title.replace(key, replacementValue);
            element.setAttribute('title', newTitle);
            break;  // Sair do loop após a primeira substituição
          }
        }
      }

      // Verifica se é um link (elemento a)
      if (element.tagName === 'A') {
        const originalHref = element.getAttribute('href');
        if (originalHref && originalHref.includes('{')) {
          for (const key in replacements) {
            if (originalHref.includes(key)) {
              const replacementValue = replacements[key];
              const newHref = originalHref.replace(key, baseUrl + replacementValue);
              element.setAttribute('href', newHref);
              break;
            }
          }
        }
      }
    });
  }

  // Função para adicionar eventos de clique aos links e alternar classes de navegação
  function addClickEvents() {
    const navigationLinks = document.querySelectorAll('nav a, footer a');
    navigationLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        navigationLinks.forEach(l => l.classList.remove('nav-active'));
        e.target.classList.add('nav-active');
      });
    });
  }

  // Atualizar o conteúdo da página
  updateContent();

  // Adicionar eventos de clique aos links para alternar classes de navegação
  addClickEvents();

  // Atualizar a variável currentHome ao mudar de página
  window.addEventListener('popstate', function() {
    currentLang = document.documentElement.lang;
    currentHome = currentLang === 'pt-br' ? '/br/' : '/us/';

    // Atualizar links, texto e title com o novo valor de {home}
    updateContent();
  });
});