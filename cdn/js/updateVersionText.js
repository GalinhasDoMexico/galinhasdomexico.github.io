document.addEventListener('DOMContentLoaded', function() {
  const currentPageUrl = window.location.href;

  // Verifique se a URL contém "/us/", "/br/" ou "/blog/"
  if (currentPageUrl.includes("/us/")) {
      updateVersion("Version 20240423", ".version");
  } else if (currentPageUrl.includes("/br/")) {
      updateVersion("Versão 20240423", ".version");
  } else if (currentPageUrl.includes("/blog/")) {
      updateVersion("Versão Blog 20240831", ".versionblog");
  }
});

function updateVersion(newText, className) {
  // Selecione o elemento com a classe especificada
  const versionText = document.querySelectorAll(className); // Seleciona todos os elementos com a classe

  // Verifique se pelo menos um elemento foi encontrado
  if (versionText.length > 0) {
      // Se sim, atualize o texto de todos os elementos
      versionText.forEach(element => element.textContent = newText);
  }
}