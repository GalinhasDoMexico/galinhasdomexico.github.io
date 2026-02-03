import { setupSettings } from "/public/cdn/js/settings/settings.js";
import { setupSettingsNavigation } from "/public/cdn/js/settings/category.js";

class SettingsMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Traduções
    const lang = document.documentElement.lang || "pt-BR";
    const translations = {
      "pt-BR": {
        title: "Configurações",
        beta: "BETA",
        themes: "Temas",
        blog: "Blog",
        export: "Exportar",
        import: "Importar",
        exportTitle: "Exportar configurações atuais",
        importTitle: "Importar configurações previamente salvas",
        dark: "Tema Escuro",
        light: "Tema Claro",
        blogText: "O blog ainda não foi lançado, portanto as configurações estão desativadas. Novas opções poderão ser adicionadas em breve.",
        disableBlogAlert: "Desativar alerta do blog"
      },
      "en-US": {
        title: "Settings",
        beta: "BETA",
        themes: "Themes",
        blog: "Blog",
        export: "Export",
        import: "Import",
        exportTitle: "Export current settings",
        importTitle: "Import previously saved settings",
        dark: "Dark Theme",
        light: "Light Theme",
        blogText: "The blog has not been launched yet, so settings are disabled. New options may be added soon.",
        disableBlogAlert: "Disable blog alert"
      }
    };

    const t = translations[lang] || translations["pt-BR"];

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/public/cdn/css/global.css" />
      <link rel="stylesheet" href="/public/cdn/css/settings.css" />
      
      <div class="menu" id="settingsMenu">
        <div class="headTitle">
          <div class="headTitle main">
            <button id="closeSettings" class="close-btn">×</button>
            <h1 class="fade" style="color: rgb(162, 0, 255)">${t.title}</h1>
            <p>${t.beta}</p>
          </div>
          <ul>
            <li><button data-category="themes">${t.themes}</button></li>
            <li><button class="deactivated">${t.blog}</button></li>
          </ul>
        </div>

        <div class="settingsDivContainer bodySettings">
          <div class="settingsDivContainer exportSettings">
            <button title="${t.exportTitle}" id="exportSettings">${t.export}</button>
            <label title="${t.importTitle}" for="importSettings">${t.import}</label>
            <input type="file" id="importSettings">
            <div id="reload-container"></div>
          </div>

          <hr>
          <div class="settingsDivContainer">
            <h2 id="themes">${t.themes}</h2>
            <div class="settingsDivContainer themeSettings">
              <button id="themeSwitcher-dark">${t.dark}</button>
              <button id="themeSwitcher-light">${t.light}</button>
            </div>

            <hr>

            <div class="settingsDivContainer">
              <h2>${t.blog}</h2>
              <div class="mdPurple">
                <blockquote><p>${t.blogText}</p></blockquote>
              </div>
              <div class="settingsDivContainer blogSettings">
                <label class="text checkbox-container">
                  <b class="text bSettings">[?]</b> ${t.disableBlogAlert}
                  <input type="checkbox" id="disableBlogAlert">
                  <span class="checkbox-slider">
                    <span class="unchecked"></span>
                    <span class="checked"></span>
                  </span>
                </label>
              </div>
              <div id="popup-container"></div>
              <hr>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    const menu = this.shadowRoot.querySelector("#settingsMenu");
    const closeBtn = this.shadowRoot.querySelector("#closeSettings");
    const toggleBtn = document.querySelector("[data-settings-toggle]");

    setupSettings(this.shadowRoot);
    setupSettingsNavigation(this.shadowRoot);

    if (!toggleBtn) return;

    // Abre/fecha via botão
    toggleBtn.addEventListener("click", e => {
      e.preventDefault();
      menu.classList.toggle("open");
      if (menu.classList.contains("open")) {
        history.replaceState(null, "", "#/settings");
      } else {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    });

    // Fecha via botão de fechar
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("open");
      history.replaceState(null, "", window.location.pathname + window.location.search);
    });

    // Fecha ao clicar fora
    document.addEventListener("click", e => {
      const path = e.composedPath();
      const clickNoMenu = path.includes(menu);
      const clickNoToggle = path.includes(toggleBtn);

      if (menu.classList.contains("open") && !clickNoMenu && !clickNoToggle) {
        menu.classList.remove("open");
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    });

    // Função utilitária para abrir/fechar com base no hash
    const syncWithHash = () => {
      const hash = window.location.hash || "";
      if (hash.startsWith("#/settings")) {
        menu.classList.add("open");
      } else {
        menu.classList.remove("open");
      }
    };

    // Abre automaticamente se a URL já tiver #/settings ao carregar
    syncWithHash();

    // Mantém sincronizado quando o hash mudar
    window.addEventListener("hashchange", syncWithHash);
  }
}

customElements.define("settings-menu", SettingsMenu);