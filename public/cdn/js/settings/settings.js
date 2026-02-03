// Configurações
export function setupSettings(root) {
  console.log("Settings.js carregado.");

  const lang = document.documentElement.lang.toLowerCase();

  // Botões de tema
  root.getElementById('themeSwitcher-dark')?.addEventListener('click', () => {
    localStorage.setItem('theme', 'dark');
    applyTheme(false);
    showPopup('themeSwitcher-dark', true);
  });

  root.getElementById('themeSwitcher-light')?.addEventListener('click', () => {
    localStorage.setItem('theme', 'light');
    applyTheme(true);
    showPopup('themeSwitcher-light', true);
  });

  // Exportar configurações
  root.getElementById('exportSettings')?.addEventListener('click', () => {
    const settings = JSON.stringify(localStorage);
    const blob = new Blob([settings], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'galinhasdomexico-settings_backup_v0-0-1.json';
    a.click();
  });

  // Importar configurações
  root.getElementById('importSettings')?.addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      try {
        const settings = JSON.parse(event.target.result);
        for (const key in settings) {
          localStorage.setItem(key, settings[key]);
        }
        showReloadButton();
      } catch (error) {
        console.warn("Erro ao importar configurações:", error);
      }
    };
    reader.readAsText(file);
  });

  function showReloadButton() {
    const reloadContainer = root.getElementById('reload-container');
    if (!reloadContainer) return;

    const reloadButton = document.createElement('button');
    reloadButton.textContent = lang === 'pt-br' ? 'Recarregar Página' : 'Reload Page';
    reloadButton.className = 'reload-button';
    reloadButton.onclick = () => {
      location.reload();
    };

    reloadContainer.innerHTML = '';
    reloadContainer.appendChild(reloadButton);
  }

  function loadSettings() {
    const theme = localStorage.getItem('theme');
    applyTheme(theme === 'light');
  }

  function applyTheme(isLightMode) {
    document.body.classList.toggle('light-theme', isLightMode);
  }

  loadSettings();
}