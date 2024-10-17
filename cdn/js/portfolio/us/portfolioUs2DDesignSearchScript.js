document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolio-posts');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const tagSelect = document.getElementById('tagSelect');
  
    // Discord Bot
    const portfolio = [
      {
        title: 'Foxy Premium Tier 1',
        description: 'Related to Bot Foxybot Premium',
        date: 'Created Day: Sunday, October 8, 2023, 1:48:24 PM',
        imageUrl: '/cdn/img/portfolio/design/foxybot/projeto1.webp',
        categoria: ['Discord Bot'],
        tags: ['Discord Bot', 'FoxyBot', 'Discord Banner'],
        isFeaturedPurple: true
      },

      {
        title: 'Foxy Premium Tier 2',
        description: 'Related to Bot Foxybot Premium',
        date: 'Created Day: Sunday, October 8, 2023, 1:48:05 PM',
        imageUrl: '/cdn/img/portfolio/design/foxybot/projeto2.webp',
        categoria: ['Discord Bot'],
        tags: ['Discord Bot', 'FoxyBot', 'Discord Banner'],
        isFeaturedPurple: true
      },

      {
        title: 'Foxy Premium Tier 3',
        description: 'Related to Bot Foxybot Premium',
        date: 'Created Day: Sunday, October 8, 2023, 1:47:39 PM',
        imageUrl: '/cdn/img/portfolio/design/foxybot/projeto3.webp',
        categoria: ['Discord Bot'],
        tags: ['Discord Bot', 'FoxyBot', 'Discord Banner'],
        isFeaturedPurple: true
      },

      {
        title: 'Foxy Donate',
        description: 'Related to the Donate of Bot Foxybot',
        date: 'Created Day: Saturday, October 7, 2023, 10:16:45 PM',
        imageUrl: '/cdn/img/portfolio/design/foxybot/projeto4.webp',
        categoria: ['Discord Bot'],
        tags: ['Discord Bot', 'FoxyBot', 'Discord Banner'],
        isFeaturedPurple: true
      },

    // Discord Server
      {
        title: 'Foxy "Regras"',
        description: '<b>[NOT USED]</b> Banner for Rule Text Channel on Foxy Discord Server',
        date: 'Created Day: Not informed',
        imageUrl: '/cdn/img/portfolio/design/discordbanner/foxybot/foxy regras banner 1500x500 (com marca d\'agua).webp',
        categoria: ['Discord Server'],
        tags: ['Discord Server', 'FoxyBot', 'Discord Banner'],
        isFeaturedPurple: true
      },

      {
        title: 'Foxy "Feedback"',
        description: '<b>[NOT USED]</b> Banner for Feedback Text Channel on Foxy Discord server',
        date: 'Created Day: Not informed',
        imageUrl: '/cdn/img/portfolio/design/discordbanner/foxybot/foxy feedback banner 1500x500 (com marca d\'agua).webp',
        categoria: ['Discord Server'],
        tags: ['Discord Server', 'FoxyBot', 'Discord Banner'],
        isFeaturedPurple: true
      },

      {
        title: 'Foxy "Donate"',
        description: '<b>[NOT USED]</b> Banner for Donate\'s text channel on Foxy\'s Discord server',
        date: 'Criado dia: Não informado',
        imageUrl: '/cdn/img/portfolio/design/discordbanner/foxybot/foxy donates banner 1500x500 (com marca d\'agua).webp',
        categoria: ['Discord Server'],
        tags: ['Discord Server', 'FoxyBot', 'Discord Banner'],
        isFeaturedPurple: true
      },

      {
        title: 'ChickenOfMexico\'s Server "Diretrizes"',
        description: '<b>[TEMPORARILY NOT USED]</b> Banner for guideline text channel on my Discord Server',
        date: 'Created Day: Not informed',
        imageUrl: '/cdn/img/portfolio/design/discordbanner/chicken/diretrizes image.webp',
        categoria: ['Discord Server'],
        tags: ['Discord Server', 'ChickenOfMexico\'s Server', 'Discord Banner'],
        isFeaturedPurple: true
      },

      {
        title: 'ChickenOfMexico\'s Server "Diretrizes do Suporte"',
        description: '<b>[TEMPORARILY NOT USED]</b> Support guideline text channel banner on my Discord Server ',
        date: 'Created Day: Not informed',
        imageUrl: '/cdn/img/portfolio/design/discordbanner/chicken/diretrizes do suporte image.webp',
        categoria: ['Discord Server'],
        tags: ['Discord Server', 'ChickenOfMexico\'s Server', 'Discord Banner'],
        isFeaturedPurple: true
      },

      {
        title: 'ChickenOfMexico\'s Server "VIPs"',
        description: '<b>[TEMPORARILY NOT USED]</b> Vip text channel banner on my Discord Server',
        date: 'Created Day: Not informed',
        imageUrl: '/cdn/img/portfolio/design/discordbanner/chicken/vips image.webp',
        categoria: ['Discord Server'],
        tags: ['Discord Server', 'ChickenOfMexico\'s Server', 'Discord Banner'],
        isFeaturedPurple: true
      },
    ];
  
    function renderportfolio(posts) {
      portfolioContainer.innerHTML = '';
      posts.forEach(function(post) {
        const portfolioElement = document.createElement('div');
        portfolioElement.classList.add('portfolio-post');
        
        const filteredTags = post.tags.filter(tag => tag !== 'Discord Bot' && tag !== 'Discord Server');
        const tagsHtml = filteredTags.map(tag => `<span title="Tag: ${tag}"><b style="color: var(--white-color);">${tag}</b></span>`).join(' ');
  
        if (post.isFeaturedPurple || post.isFeatured) {
          portfolioElement.innerHTML = `
            <h2>`;
    
          if (post.isFeaturedPurple) {
            portfolioElement.innerHTML += `<span class="FeaturedPurple-post">`;
  
            const tagsHtml = post.tags.map(tag => {
              const className = tag === 'Sobre o Projeto' || tag === 'Destaques' ? 'hidden-tag' : '';
              return `<span title="Tag: ${tag}" class="${className}"><b style="color: var(--white-color);">${tag}</b></span>`;
            }).join(' ');
  
          } else if (post.isFeatured) {
            portfolioElement.innerHTML += `<span class="portfolio-post">`;
  
            const tagsHtml = post.tags.map(tag => {
              const className = tag === 'Sobre o Projeto' || tag === 'Destaques' ? 'hidden-tag' : '';
              return `<span title="Tag: ${tag}" class="${className}"><b style="color: var(--white-color);">${tag}</b></span>`;
            }).join(' ');
          }
    
          portfolioElement.innerHTML += `
          <div class="${post.isFeaturedPurple ? 'FeaturedPurple-post' : post.isFeatured ? 'portfolio-post' : ''}">
          <div class="portfolio-container">
          <h2><span title="Categoria: ${post.categoria[0]}"><b style="color: var(--black-color);">${post.categoria[0]}</b></span> ${post.title}</h2>
          </div>
          <p title="Descrição: ${post.description}">${post.description}</p>
          <p title="${post.date}" style="opacity: 0.5">${post.date}</p>
          </div>
          <div class="tags">${tagsHtml}</div>
          <div class="portfolio-content">
           <div class="portfolio-image-container">
            <img title="Clique na imagem para expandir" class="portfolio-image mobile" src="${post.imageUrl}" alt="Imagem do Design 2D">
           </div>
          </div>
          `;
        } else {
           portfolioElement.innerHTML = `
          <h2>${post.title}</h2>
          <p title="Descrição: ${post.description}">${post.description}</p>
          <p title="${post.date}" style="opacity: 0.5">${post.date}</p>
          <div class="tags">${post.tags.map(tag => `<span title="Tag: ${tag}"><b style="color: var(--white-color);">${tag}</b></span>`).join(' ')}</div>
          <div class="portfolio-content">
           <div class="portfolio-image-container">
            <img class="portfolio-image mobile" src="${post.imageUrl}" alt="Imagem do projeto">
           </div>
          </div>
          `;
      }

      portfolioContainer.appendChild(portfolioElement);
    });
  }  

  // Get selected tag from URL parameter (if any)
  const urlParams = new URLSearchParams(window.location.search);
  const selectedTagFromUrl = urlParams.get('tags');

  // Initial rendering based on tag from URL or all posts
  let filteredportfolio;
  if (selectedTagFromUrl) {
    filteredportfolio = filterportfolio(portfolio, '', selectedTagFromUrl);
  } else {
    filteredportfolio = portfolio; // Render all posts if no tag in URL
  }
  renderportfolio(filteredportfolio);

  // Function to filter posts by title, description, and tags
  function filterportfolio(portfolio, searchTerm, selectedTag) {
    let filteredportfolio = portfolio;

    if (selectedTag !== '') {
      filteredportfolio = filteredportfolio.filter(function(portfolio) {
        return portfolio.tags.includes(selectedTag);
      });
    }

    if (searchTerm !== '' || selectedTag === '') {
      filteredportfolio = filteredportfolio.filter(function(portfolio) {
        const titleMatch = portfolio.title.toLowerCase().includes(searchTerm);
        const descriptionMatch = portfolio.description.toLowerCase().includes(searchTerm);
        const tagsMatch = portfolio.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return titleMatch || descriptionMatch || tagsMatch;
      });
    }

    return filteredportfolio;
  }

  // Function to handle search form submission
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();

    let selectedTag = tagSelect.value; // Get the selected tag

    // Check if there's a tag in the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTagFromUrl = urlParams.get('tags');

    // Prioritize the URL parameter tag if it exists
    if (selectedTagFromUrl) {
      selectedTag = selectedTagFromUrl;
    }

    const filteredportfolio = filterportfolio(portfolio, searchTerm, selectedTag);
    renderportfolio(filteredportfolio);
  });

  // Function to handle tag select change
  tagSelect.addEventListener('change', function() {
    const selectedTag = tagSelect.value;

    // Update the URL parameter with the selected tag
    if (selectedTag !== '') {
      const newUrlParams = new URLSearchParams();
      newUrlParams.set('tags', selectedTag);
      history.replaceState(null, '', `?${newUrlParams.toString()}`); // Update URL without reloading
    } else {
      // Remove the tag parameter if no tag is selected
      history.replaceState(null, '', window.location.pathname); // Remove tag parameter
    }

    // Filter and render posts based on the selected tag
    const filteredportfolio = filterportfolio(portfolio, '', selectedTag);
    renderportfolio(filteredportfolio);    
  });
});
