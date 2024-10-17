function populateTags() {
  const titleMetaTag = document.querySelector('meta[name="post:title"]');
  const tagsMetaTag = document.querySelector('meta[name="post:tags"]');

  const titleContent = titleMetaTag ? titleMetaTag.getAttribute('content') : '';
  const tagsContent = tagsMetaTag ? tagsMetaTag.getAttribute('content') : '';

  const targetElements = document.querySelectorAll('h1, a, p');

  for (const targetElement of targetElements) {
      let targetText = targetElement.textContent;

      // Substitui {title}
      if (titleContent) {
          targetText = targetText.replace(/\{title\}/g, titleContent);
      }
      // Substitui {tags}
      if (tagsContent) {
          targetText = targetText.replace(/\{tags\}/g, tagsContent);
      }

      targetElement.textContent = targetText;

      // Atualiza o href se for um link
      if (targetElement.tagName === 'A') {
          let originalHref = targetElement.href;

          // Substitui {title} e {tags} na URL, se existirem
          if (titleContent) {
              originalHref = originalHref.replace(/\{title\}/g, titleContent);
          }
          if (tagsContent) {
              originalHref = originalHref.replace(/\{tags\}/g, tagsContent);
          }

          targetElement.href = originalHref;
      }

      // Substitui placeholders no atributo title
      if (targetElement.hasAttribute('title')) {
          let originalTitle = targetElement.getAttribute('title');

          // Substitui {title} e {tags} no title, se existirem
          if (titleContent) {
              originalTitle = originalTitle.replace(/\{title\}/g, titleContent);
          }
          if (tagsContent) {
              originalTitle = originalTitle.replace(/\{tags\}/g, tagsContent);
          }

          targetElement.setAttribute('title', originalTitle);
      }
  }
}

window.addEventListener('DOMContentLoaded', populateTags);