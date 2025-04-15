(function() {
  let markdownContent = {};

  async function loadMarkdown(section, language) {
    const formattedLanguage = ['pt-br', 'en-us'].includes(language) ? language : 'pt-br';
    const response = await fetch(`/cdn/md/changelog/changelog_${section}_${formattedLanguage}.md`);
    const markdown = await response.text();
    markdownContent[section] = markdown;
    renderMarkdown(section, markdown);
  }

  function renderMarkdown(section, markdown) {
    const contentId = section === 'website' ? 'content-website' : 'content-blog';
    const contentElement = document.getElementById(contentId);

    if (contentElement) {
      const htmlContent = marked.parse(markdown);
      contentElement.innerHTML = htmlContent;
    }
  }

  function searchMarkdown(section) {
    const searchInputId = section === 'website' ? 'searchInputWebsite' : 'searchInputBlog';
    const contentId = section === 'website' ? 'content-website' : 'content-blog';
    const searchInput = document.getElementById(searchInputId).value;
    const contentElement = document.getElementById(contentId);

    if (searchInput && contentElement) {
      const regex = new RegExp(`(${searchInput})`, 'gi');
      const htmlContent = marked.parse(markdownContent[section].replace(regex, '<span class="highlight">$1</span>'));
      contentElement.innerHTML = htmlContent;

      // Scroll to the first highlighted occurrence
      const firstHighlight = contentElement.querySelector('.highlight');
      if (firstHighlight) {
        firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function setLanguage(language) {
    localStorage.setItem('websiteLanguage', language);
    checkActiveSection(true);
  }

  function checkActiveSection(forceReload = false) {
    const language = localStorage.getItem('websiteLanguage') || 'pt-br';
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
      const sectionId = section.getAttribute('data-id') ? section.getAttribute('data-id').split('/')[1] : null;

      if (section.classList.contains('active') && sectionId) {
        loadMarkdown(sectionId, language);
      }
    });
  }

  function initialize() {
    const language = localStorage.getItem('websiteLanguage') || 'pt-br';
    checkActiveSection();

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          checkActiveSection(true);
        } else {
          entry.target.classList.remove('active');
        }
      });
    });

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });

    // Listen for custom language change event
    window.addEventListener('languageChanged', () => {
      checkActiveSection(true);
    });
  }

  window.addEventListener('load', initialize);

  // Exposing functions to global scope for onclick handlers
  window.searchMarkdown = searchMarkdown;
  window.setLanguage = setLanguage;
})();