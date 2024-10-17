document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolio-posts');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const tagSelect = document.getElementById('tagSelect');
  
    // Exemplo
    const portfolio = [
      {
        title: 'Exemplo "Aventura Aquática"',
        description: 'Exemplo de Thumbnail para o YouTube (para portfólio)',
        date: 'Criado dia: Domingo, 8 de outubro de 2023, 13:48:24',
        imageUrl: '/cdn/img/portfolio/minecraft/thumbnails/br/example/Exemplo (Aventura Aquatica).webp',
        categoria: ['Exemplo de Thumbnail'],
        tags: ['Exemplo de Thumbnail', 'YouTube', 'Thumbnail'],
        isFeaturedPurple: true
      },

      {
        title: 'Exemplo "Construindo uma Cidade"',
        description: 'Exemplo de Thumbnail para o YouTube (para portfólio)',
        date: 'Criado dia: Domingo, 8 de outubro de 2023, 13:48:05',
        imageUrl: '/cdn/img/portfolio/minecraft/thumbnails/br/example/Exemplo (Construindo uma Cidade).webp',
        categoria: ['Exemplo de Thumbnail'],
        tags: ['Exemplo de Thumbnail', 'YouTube', 'Thumbnail'],
        isFeaturedPurple: true
      },
    
    // Thumbnail Própria
      {
        title: 'Nova Thumbnail "uma casa bem feita (ou não)"',
        description: '<b>[VÍDEO OCULTADO PARA O PÚBLICO]</b> Minecraft Alpha, episódio 1',
        date: 'Criado dia: Não informado',
        imageUrl: '/cdn/img/portfolio/minecraft/thumbnails/my/Thumbnail versão 2.webp',
        categoria: ['Thumbnail Própria'],
        tags: ['Thumbnail Própria', 'YouTube', 'Thumbnail'],
        isFeaturedPurple: true
      },
    
    // Renders Antigas
      {
        title: 'Meu Primeiro Wallpaper',
        description: 'Minha primeira render de Minecraft que fiz',
        date: 'Criado dia: Sexta-feira, 1 de setembro de 2023, 19:54:23',
        imageUrl: '/cdn/img/portfolio/minecraft/projeto1.webp',
        categoria: ['Renders Antigas'],
        tags: ['Renders Antigas', 'ChickenOfMexico'],
        isFeaturedPurple: true
      },

      {
        title: 'Chicken e Herobrine',
        description: 'Eu morrendo para o Herobrine... Resumidamente',
        date: 'Criado dia: Segunda-feira, 4 de setembro de 2023, 19:38:30',
        imageUrl: '/cdn/img/portfolio/minecraft/projeto2.webp',
        categoria: ['Renders Antigas'],
        tags: ['Renders Antigas', 'ChickenOfMexico', 'Herobrine'],
        isFeaturedPurple: true
      },

      {
        title: 'Loritta vs. Lorrita (sem sangue)',
        description: 'Bot Loritta contra a Lorrita',
        date: 'Criado dia: Terça-feira, 9 de janeiro de 2024, 21:09:23',
        imageUrl: '/cdn/img/portfolio/minecraft/projeto5-1.webp',
        categoria: ['Renders Antigas'],
        tags: ['Renders Antigas', 'LorittaBot'],
        isFeaturedPurple: true
      },

      {
        title: 'Loritta vs. Lorrita (com sangue)',
        description: 'Bot Loritta contra a Lorrita, mas com sangue (gore, oh ma ga)',
        date: 'Criado dia: Terça-feira, 9 de janeiro de 2024, 21:05:00',
        imageUrl: '/cdn/img/portfolio/minecraft/projeto5-2.webp',
        categoria: ['Renders Antigas'],
        tags: ['Renders Antigas', 'LorittaBot'],
        isFeaturedPurple: true
      },
    ];
  
    function renderportfolio(posts) {
      portfolioContainer.innerHTML = '';
      posts.forEach(function(post) {
        const portfolioElement = document.createElement('div');
        portfolioElement.classList.add('portfolio-post');
        
        const filteredTags = post.tags.filter(tag => tag !== 'Renders Antigas' && tag !== 'Exemplo de Thumbnail' && tag !== 'Thumbnail Própria');
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
            portfolioElement.innerHTML += `<span class="featured-post">`;
  
            const tagsHtml = post.tags.map(tag => {
              const className = tag === 'Sobre o Projeto' || tag === 'Destaques' ? 'hidden-tag' : '';
              return `<span title="Tag: ${tag}" class="${className}"><b style="color: var(--white-color);">${tag}</b></span>`;
            }).join(' ');
          }
    
          portfolioElement.innerHTML += `
          <div class="${post.isFeaturedPurple ? 'FeaturedPurple-post' : post.isFeatured ? 'featured-post' : ''}">
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
