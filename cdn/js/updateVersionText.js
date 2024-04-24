document.addEventListener('DOMContentLoaded', function() {
    // Obtenha a URL da página atual
    const currentPageUrl = window.location.href;

    // Verifique se a URL contém "/us/"
    if (currentPageUrl.includes("/us/")) {
        // Se sim, altere o texto para "Version"
        updateVersion("Version 20240423");
    } else if (currentPageUrl.includes("/br/")) {
        // Se sim, altere o texto para "Versão"
        updateVersion("Versão 20240423");
    }
});

function updateVersion(newText) {
    // Selecione o elemento com a classe .version
    const versionText = document.querySelector('.version');
    
    // Verifique se o elemento foi encontrado
    if (versionText) {
        // Se sim, atualize o texto
        versionText.textContent = newText;
    }
}