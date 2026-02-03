// Carregar o footer

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const lang = document.documentElement.lang || "pt-BR";

    const translations = {
      "pt-BR": {
        home: "Início",
        gallery: "Galeria",
        privacy: "Política de Privacidade",
        rights: "Todos os direitos reservados para as imagens.",
        license: "Código-fonte sob",
        licenseName: "GPL-3.0 License",
        homeHref: "/br/",
        galleryHref: "/br/gallery",
        privacyHref: "/br/terms/privacy",
        licenseHref: "/license",
        homeTitle: "Início",
        galleryTitle: "Galeria",
        privacyTitle: "Política de Privacidade",
        siteTitle: 'Atual domínio',
        betaEnglish: ""
      },
      "en-US": {
        home: "Home",
        gallery: "Gallery",
        privacy: "Privacy Policy",
        rights: "All rights reserved for the images.",
        license: "Source code under",
        licenseName: "GPL-3.0 License",
        homeHref: "/us/",
        galleryHref: "/us/gallery",
        privacyHref: "/us/terms/privacy",
        licenseHref: "/license",
        homeTitle: "Home",
        galleryTitle: "Gallery",
        privacyTitle: "Privacy Policy",
        siteTitle: 'Current domain',
        betaEnglish: "[ Currently, the ENGLISH VERSION is in BETA ]"
      }
    };

    const t = translations[lang] || translations["pt-BR"];

    this.innerHTML = `
<footer>
  <div>
    <a title="${t.homeTitle}" href="${t.homeHref}">${t.home}</a> <b>/</b> 
    <a title="${t.galleryTitle}" href="${t.galleryHref}">${t.gallery}</a> <b>/</b> 
    <a title="${t.privacyTitle}" href="${t.privacyHref}">${t.privacy}</a>
  </div>
  <h2>GalinhasDoMexico</h2>
  <p>
    &copy; 2025 GalinhasDoMexico (<a title="${t.siteTitle}" href="https://cofm.site/">cofm.site</a>) • 
    ${t.rights}
  </p>
  <p>
    ${t.license} <a title="${t.licenseName}" href="${t.licenseHref}">${t.licenseName}</a>.
  </p>
  <b class="betaEnglish">
    ${t.betaEnglish}
  </b>
</footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);