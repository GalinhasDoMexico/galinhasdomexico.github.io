// Carrega o menu
class SiteMenu extends HTMLElement {
  connectedCallback() {
    const lang = document.documentElement.lang || 'pt-BR'

    const translations = {
      'pt-BR': {
        home: 'Início',
        gallery: 'Galeria',
        settings: 'Configurações',
        version: 'v0.2.0-remake',
        homeHref: '/br/',
        galleryHref: '/br/gallery',
        websiteInfoHref: '/br/website/info',
        websiteInfoTitle: 'Informações sobre o Website',
        ptbr: 'Você já está usando o idioma em Português Brasil',
        enus: 'Switch to English (US) [BETA]'
      },
      'en-US': {
        home: 'Home',
        gallery: 'Gallery',
        settings: 'Settings',
        version: 'v0.2.0-remake',
        homeHref: '/us/',
        galleryHref: '/us/gallery',
        websiteInfoHref: '/us/website/info',
        websiteInfoTitle: 'Website info',
        ptbr: 'Mudar para o idioma em Português Brasil',
        enus: 'You are already using the language in English (US) [BETA]'
      }
    }

    const t = translations[lang] || translations['pt-BR']

    this.innerHTML = `
<nav>
  <div id="mainNav">

    <!-- Lado esquerdo -->
    <left>
      <a title="${t.home}" class="main-title" href="${t.homeHref}">GalinhasDoMexico</a>

      <div class="partition"></div>

      <a title="${t.home}" class="desktop" href="${t.homeHref}">${t.home}</a>
      <a title="${t.gallery}" class="desktop" href="${t.galleryHref}">${t.gallery}</a>
    </left>

    <!-- Lado direito -->
    <right>
      <div class="infoOnNav desktop">
        <a title="${t.settings}" href="#" data-settings-toggle class="settings-icon">
          <svg><use href="/src/cdn/img/svg/sprites.svg#settingsSvg"></use></svg>
        </a>
        <a title="${t.websiteInfoTitle}" href="${t.websiteInfoHref}" class="version">${t.version}</a>
      </div>

      <!-- Idiomas -->
      <div class="mainLanguage">
        <div class="divider-vertical"></div>
        <a title="${t.ptbr}" href="#" class="language-link" id="lang-pt-br">PT-BR</a>
        <div class="divider-dot"></div>
        <a title="${t.enus}" href="#" class="language-link" id="lang-en-us">EN-US</a>
      </div>
    </right>

    <!-- Menu para celular -->
    <div class="mobile">
      <button class="menuToggle">Menu</button>
      <div id="mobileMenu" class="mobileMenu">
        <div class="menuBackground"></div>
        <nav class="menuNav">
          <a class="menuLink main" href="${t.homeHref}">GalinhasDoMexico</a>
          <a class="menuLink" href="${t.homeHref}" onclick="navigateTo('home')">${t.home}</a>
          <a class="menuLink" href="${t.galleryHref}" onclick="navigateTo('gallery')">${t.gallery}</a>
          <a title="${t.settings}" href="#/settings" data-settings-toggle class="settings-icon">
            <svg><use href="/src/cdn/img/svg/sprites.svg#settingsSvg"></use></svg>
          </a>
          <a class="menuLink infoButton" href="${t.websiteInfoHref}">${t.version}</a>
        </nav>
      </div>
    </div>

  </div>
  <hr class="nav-hr" width="47%" />
</nav>
    `
  }
}
customElements.define('site-menu', SiteMenu)
