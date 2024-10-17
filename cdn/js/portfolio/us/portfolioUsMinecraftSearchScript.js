document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolio-posts');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const tagSelect = document.getElementById('tagSelect');
  
    // Exemplo
    const portfolio = [
      {
        title: 'Example "Aquatic Adventure"',
        description: 'Thumbnail Example for YouTube (for Portfolio)',
        date: 'Created Day: Sunday, October 8, 2023, 1:48:24 PM',
        imageUrl: '/cdn/img/portfolio/minecraft/thumbnails/us/example/Example (Aquatic Adventure).webp',
        categoria: ['Thumbnail Example'],
        tags: ['Thumbnail Example', 'YouTube', 'Thumbnail'],
        isFeaturedPurple: true
      },

      {
        title: 'Example "Building a City"',
        description: 'Thumbnail Example for Youtube (for Portfolio)',
        date: 'Created Day: Sunday, October 8, 2023, 1:48:05 PM',
        imageUrl: '/cdn/img/portfolio/minecraft/thumbnails/us/example/Example (Building a City).webp',
        categoria: ['Thumbnail Example'],
        tags: ['Thumbnail Example', 'YouTube', 'Thumbnail'],
        isFeaturedPurple: true
      },
    
    // Own Thumbnail
      {
        title: 'New Thumbnail "a well-made (or not) house"',
        description: '<b>[VIDEO HIDDEN FOR THE PUBLIC]</b> Minecraft Alpha, Episode 1',
        date: 'Created Day: Not informed ',
        imageUrl: '/cdn/img/portfolio/minecraft/thumbnails/my/Thumbnail versão 2.webp',
        categoria: ['Own Thumbnail'],
        tags: ['Own Thumbnail', 'YouTube', 'Thumbnail'],
        isFeaturedPurple: true
      },
    
    // Old Render
      {
        title: 'My First Wallpaper',
        description: 'My first Minecraft render I made',
        date: 'Created Day: Friday, September 1, 2023, 7:54:23 PM',
        imageUrl: '/cdn/img/portfolio/minecraft/projeto1.webp',
        categoria: ['Old Render'],
        tags: ['Old Render', 'ChickenOfMexico'],
        isFeaturedPurple: true
      },

      {
        title: 'Chicken and Herobrine',
        description: 'I dying to Herobrine ... Briefly',
        date: 'Created Day: Monday, September 4, 2023, 7:38:30 PM',
        imageUrl: '/cdn/img/portfolio/minecraft/projeto2.webp',
        categoria: ['Old Render'],
        tags: ['Old Render', 'ChickenOfMexico', 'Herobrine'],
        isFeaturedPurple: true
      },

      {
        title: 'Loritta vs. Lorrita (without blood)',
        description: 'Bot Loritta vs. Lorrita',
        date: 'Created Day: Tuesday, January 9, 2024, 9:09:23 PM',
        imageUrl: '/cdn/img/portfolio/minecraft/projeto5-1.webp',
        categoria: ['Old Render'],
        tags: ['Old Render', 'LorittaBot'],
        isFeaturedPurple: true
      },

      {
        title: 'Loritta vs. Lorrita (with blood)',
        description: 'Bot Loritta vs. Lorrita, but with blood (Gore, Oh Ma Ga)',
        date: 'Created Day: Tuesday, January 9, 2024, 9:05:00 PM',
        imageUrl: '/cdn/img/portfolio/minecraft/projeto5-2.webp',
        categoria: ['Old Render'],
        tags: ['Old Render', 'LorittaBot'],
        isFeaturedPurple: true
      },
    ];
  
    function renderportfolio(posts) {
      portfolioContainer.innerHTML = '';
      posts.forEach(function(post) {
        const portfolioElement = document.createElement('div');
        portfolioElement.classList.add('portfolio-post');
        
        const filteredTags = post.tags.filter(tag => tag !== 'Old Render' && tag !== 'Thumbnail Example' && tag !== 'Own Thumbnail');
        const tagsHtml = filteredTags.map(tag => `<span title="Tag: ${tag}"><b style="color: var(--white-color);">${tag}</b></span>`).join(' ');
  
        if (post.isFeaturedPurple || post.isFeatured) {
          portfolioElement.innerHTML = `
            <h2>`;
    
          if (post.isFeaturedPurple) {
            portfolioElement.innerHTML += `<span class="FeaturedPurple-post">`;
  
            const tagsHtml = post.tags.map(tag => {
              const className = tag === 'About the Portfolio' || tag === 'Highlights' ? 'hidden-tag' : '';
              return `<span title="Tag: ${tag}" class="${className}"><b style="color: var(--white-color);">${tag}</b></span>`;
            }).join(' ');
  
          } else if (post.isFeatured) {
            portfolioElement.innerHTML += `<span class="featured-post">`;
  
            const tagsHtml = post.tags.map(tag => {
              const className = tag === 'About the Portfolio' || tag === 'Highlights' ? 'hidden-tag' : '';
              return `<span title="Tag: ${tag}" class="${className}"><b style="color: var(--white-color);">${tag}</b></span>`;
            }).join(' ');
          }
    
          portfolioElement.innerHTML += `
          <div class="${post.isFeaturedPurple ? 'FeaturedPurple-post' : post.isFeatured ? 'featured-post' : ''}">
          <div class="portfolio-container">
          <h2><span title="Category: ${post.categoria[0]}"><b style="color: var(--black-color);">${post.categoria[0]}</b></span> ${post.title}</h2>
          </div>
          <p title="Description: ${post.description}">${post.description}</p>
          <p title="${post.date}" style="opacity: 0.5">${post.date}</p>
          </div>
          <div class="tags">${tagsHtml}</div>
          <div class="portfolio-content">
           <div class="portfolio-image-container">
            <img title="Click on the image to expand" class="portfolio-image mobile" src="${post.imageUrl}" alt="Imagem do Design 2D">
           </div>
          </div>
          `;
        } else {
           portfolioElement.innerHTML = `
          <h2>${post.title}</h2>
          <p title="Description: ${post.description}">${post.description}</p>
          <p title="${post.date}" style="opacity: 0.5">${post.date}</p>
          <div class="tags">${post.tags.map(tag => `<span title="Tag: ${tag}"><b style="color: var(--white-color);">${tag}</b></span>`).join(' ')}</div>
          <div class="portfolio-content">
           <div class="portfolio-image-container">
            <img class="portfolio-image mobile" src="${post.imageUrl}" alt="Project Image">
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
