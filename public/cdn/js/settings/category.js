// Carregar os botões de navegação das categorias 

export function setupSettingsNavigation(root) {
  console.log("Settings navigation carregado.");

  // A seção principal dentro do shadowRoot
  const section = root.getElementById("settings");

  // Captura a categoria da URL (#settings/themes)
  const categoryId = window.location.hash.split("/")[1];

  if (categoryId) {
    const categoryElement = root.getElementById(categoryId);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Botões de navegação
  root.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      const categoryElement = root.getElementById(category);

      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, null, `#/settings/${category}`);
      }
    });
  });
}