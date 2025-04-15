document.addEventListener('DOMContentLoaded', function () {
  const gallerySearches = document.querySelectorAll('.gallerySearch');
  const galleryContainers = document.querySelectorAll('.gallerySearchResults');
  const selectedTagsContainers = document.querySelectorAll('.gallerySearchTagsSelected');
  const tabLinks = document.querySelectorAll('.gallerySearchTabsLink');
  let currentCategory = 'minecraft';
  let galleryData = {};
  let selectedTags = [];
  let currentLanguage = localStorage.getItem('websiteLanguage') || 'pt-br';

  function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('websiteLanguage', language);
    fetchAndRenderPortfolio();
  }

  function fetchAndRenderPortfolio() {
    fetch('/cdn/json/gallery.json')
      .then(response => response.json())
      .then(data => {
        galleryData = data;
        initializeSearchForms();
        renderPortfolios(galleryData[`${currentCategory} ${currentLanguage}`]);
      })
      .catch(error => console.error('Erro carregando JSON:', error));
  }

  fetchAndRenderPortfolio();

  function initializeSearchForms() {
    gallerySearches.forEach(gallerySearch => {
      gallerySearch.innerHTML = `
<form id="gallerySearchForm">
  <input type="text" id="gallerySearchInput" placeholder="${currentLanguage === 'en-us' ? 'Search...' : 'Pesquisar...'}">
  <div class="tagSelectAndSearchButton">
    <select id="tagSelect">
      <option value="">${currentLanguage === 'en-us' ? 'All Categories and Tags' : 'Todas as Categorias e Tags'}</option>
    </select>
    <button type="submit">
      <svg>
        <use href="/cdn/img/svg/sprites.svg#searchSvg"></use>
      </svg>
    </button>
  </div>
</form>
      `;

      const tagSelect = gallerySearch.querySelector('#tagSelect');
      const searchForm = gallerySearch.querySelector('#gallerySearchForm');
      const searchInput = gallerySearch.querySelector('#gallerySearchInput');
      const { tags, categories } = getAllTagsAndCategories(galleryData[`${currentCategory} ${currentLanguage}`]);

      const categoryOptGroup = document.createElement('optgroup');
      categoryOptGroup.label = currentLanguage === 'en-us' ? 'Categories' : 'Categorias';
      categories.forEach(category => {
        if (category) {
          const option = document.createElement('option');
          option.value = category;
          option.textContent = category;
          categoryOptGroup.appendChild(option);
        }
      });
      tagSelect.appendChild(categoryOptGroup);

      const tagOptGroup = document.createElement('optgroup');
      tagOptGroup.label = currentLanguage === 'en-us' ? 'Tags' : 'Tags';
      tags.forEach(tag => {
        if (tag) {
          const option = document.createElement('option');
          option.value = tag;
          option.textContent = tag;
          tagOptGroup.appendChild(option);
        }
      });
      tagSelect.appendChild(tagOptGroup);

      searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPortfolio = filterPortfolio(galleryData[`${currentCategory} ${currentLanguage}`], searchTerm, selectedTags);
        renderPortfolios(filteredPortfolio);
      });

      tagSelect.addEventListener('change', function () {
        const selectedTag = tagSelect.value;
        if (selectedTag && !selectedTags.includes(selectedTag)) {
          selectedTags.push(selectedTag);
          updateSelectedTags();
          tagSelect.value = '';
          renderPortfolios(filterPortfolio(galleryData[`${currentCategory} ${currentLanguage}`], searchInput.value.toLowerCase(), selectedTags));
        }
      });
    });
  }

  function renderPortfolios(posts) {
    if (!posts) {
      console.error('Posts estão indefinidos.');
      return;
    }

    galleryContainers.forEach(container => {
      container.innerHTML = '';
      posts.forEach(function (post) {
        const galleryElement = document.createElement('div');
        galleryElement.classList.add('galleryResultsPost');

        const tagsHtml = post.tags
          .map(tag => `<span title="Tag: ${tag}"><b style="color: var(--white-color);">${tag}</b></span>`)
          .join(' ');

        const categoryHtml = post.category ? `<span class="galleryResultsPostContainer category" title="${currentLanguage === 'en-us' ? 'Category: ' : 'Categoria: '}${post.category}"><b>${post.category}</b></span>` : '';

        galleryElement.innerHTML = `
          <h2>${post.title}</h2>
          <p class="galleryResultsPost description" title="${currentLanguage === 'en-us' ? 'Description: ' : 'Descrição: '}${post.description}">${post.description}</p>
          <p class="galleryResultsPost date">${post.dateText} <span class="contagem" data-alvo="${post.date}" data-tipo="${post.dateType}" data-mod="faz" title="${post.date}"></span></p>
          <div class="galleryResultsPostContainer">
            <div class="galleryResultsPostContainer category">${categoryHtml}</div>
            <div class="galleryResultsPostContainer tags">${tagsHtml}</div>
          </div>
          <div class="galleryResultsContent">
            <div class="galleryResultsImageContainer">
              <img title="${currentLanguage === 'en-us' ? 'Click to expand' : 'Clique para expandir'}" class="galleryResultsImage gallery-image" src="${post.imageUrl}" loading="lazy" alt="Imagem do projeto">
            </div>
          </div>
        `;
        container.appendChild(galleryElement);

        // Adicionar evento de clique para imagens
        const galleryImage = galleryElement.querySelector('.galleryResultsImage');
        if (galleryImage) {
          galleryImage.addEventListener('click', function () {
            createModal(post.imageUrl);
          });
        }
      });
    });
  }

  function updateSelectedTags() {
    selectedTagsContainers.forEach(container => {
      container.innerHTML = '';
      selectedTags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('gallerySelectedTags');
        tagElement.innerHTML = `<span>${tag}</span><div style="margin-right: 8px; width: 1px; height: 17px; background-color: rgb(255, 255, 255);"></div><span class="galleryRemoveTag" data-tag="${tag}">X</span>`;
        container.appendChild(tagElement);
      });

      const removeTagElements = container.querySelectorAll('.galleryRemoveTag');
      removeTagElements.forEach(element => {
        element.addEventListener('click', function () {
          const tagToRemove = this.getAttribute('data-tag');
          selectedTags = selectedTags.filter(tag => tag !== tagToRemove);
          updateSelectedTags();
          renderPortfolios(filterPortfolio(galleryData[`${currentCategory} ${currentLanguage}`], '', selectedTags));
        });
      });
    });
  }

  function filterPortfolio(gallery, searchTerm, selectedTags) {
    let filteredPortfolio = gallery;

    if (selectedTags.length > 0) {
      filteredPortfolio = filteredPortfolio.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag) || post.category.includes(tag))
      );
    }

    if (searchTerm) {
      filteredPortfolio = filteredPortfolio.filter(function (post) {
        const titleMatch = post.title.toLowerCase().includes(searchTerm);
        const descriptionMatch = post.description.toLowerCase().includes(searchTerm);
        const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        const categoryMatch = typeof post.category === 'string' && post.category.toLowerCase().includes(searchTerm);
        return titleMatch || descriptionMatch || tagsMatch || categoryMatch;
      });
    }

    return filteredPortfolio;
  }

  function getAllTagsAndCategories(gallery) {
    const tagSet = new Set();
    const categorySet = new Set();
    gallery.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag));
      if (typeof post.category === 'string' && post.category.trim() !== '') {
        categorySet.add(post.category);
      }
    });
    return { tags: Array.from(tagSet), categories: Array.from(categorySet) };
  }

  // Função para criar e exibir o modal de imagem
  function createModal(imageUrl) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const img = document.createElement('img');
    img.src = imageUrl;

    const modalText = document.createElement('p');
    modalText.textContent = currentLanguage === 'en-us'
      ? 'Click outside the image to close it.'
      : 'Clique fora da imagem para fechá-la.';

    modalContent.appendChild(img);
    modal.appendChild(modalContent);
    modal.appendChild(modalText);

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.remove();
      }
    });

    document.body.appendChild(modal);
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', function () {
      tabLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.getAttribute('data-category');

      initializeSearchForms(); // Re-renderiza os formulários de pesquisa
      renderPortfolios(galleryData[`${currentCategory} ${currentLanguage}`]); // Atualiza os portfólios
    });
  });

  // Adicionar eventos aos links de idiomas para alternar
  document.getElementById('lang-pt-br').addEventListener('click', function () {
    setLanguage('pt-br');
  });

  document.getElementById('lang-en-us').addEventListener('click', function () {
    setLanguage('en-us');
  });

  // Função para obter a tradução com base no atributo data-translate
  function obterTextoTraduzido(chave) {
    const traducoes = {
      'pt-br': {
        'modalText': 'Clique fora da imagem para fechá-la.'
      },
      'en-us': {
        'modalText': 'Click outside the image to close.'
      }
    };

    return traducoes[currentLanguage][chave] || chave;
  }
});