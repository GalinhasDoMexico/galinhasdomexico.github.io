// Carrega todos os principais scripts em um só

import "/public/cdn/js/menu.js";
import "/public/cdn/js/menuMobile.js";
import "/public/cdn/js/language.js";
import "/public/cdn/js/themeSwitcher.js";
import "/public/cdn/js/footer.js";
import "/public/cdn/js/settings/menu.js";
import "/public/cdn/js/settings/category.js";
import "/public/cdn/js/settings/settings.js";

// qualquer inicialização global
document.addEventListener("DOMContentLoaded", () => {
  console.log("Todos os scripts carregados!");
});
