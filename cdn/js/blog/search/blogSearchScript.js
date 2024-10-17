document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const tagSelect = document.getElementById('tagSelect');

  const blogPosts = [
  // Posts "Sobre o Blog"
    
  // Posts "Destaques"

  // Posts comuns

  ];

  function renderBlogPosts(posts) {
    blogPostsContainer.innerHTML = '';
    posts.forEach(function(post) {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      
      const filteredTags = post.tags.filter(tag => tag !== 'Sobre o Blog' && tag !== 'Destaques');
      const tagsHtml = filteredTags.map(tag => `<span title="Tag: ${tag}"><a style="color: var(--white-color);" href="?tags=${tag}">${tag}</a></span>`).join(' ');

      if (post.isAboutBlog || post.isFeatured) {
        postElement.innerHTML = `
          <h2>`;
  
        if (post.isAboutBlog) {
          postElement.innerHTML += `<span class="aboutblog-post">`;

          const tagsHtml = post.tags.map(tag => {
            const className = tag === 'Sobre o Blog' || tag === 'Destaques' ? 'hidden-tag' : '';
            return `<span title="Tag: ${tag}" class="${className}"><a style="color: var(--white-color);" href="?tags=${tag}">${tag}</a></span>`;
          }).join(' ');

        } else if (post.isFeatured) {
          postElement.innerHTML += `<span class="featured-post">`;

          const tagsHtml = post.tags.map(tag => {
            const className = tag === 'Sobre o Blog' || tag === 'Destaques' ? 'hidden-tag' : '';
            return `<span title="Tag: ${tag}" class="${className}"><a style="color: var(--white-color);" href="?tags=${tag}">${tag}</a></span>`;
          }).join(' ');
        }
  
        postElement.innerHTML += `
        <div class="${post.isAboutBlog ? 'aboutblog-post' : post.isFeatured ? 'featured-post' : ''}">
        <h2><span title="Categoria: ${post.categoria[0]}"><a style="color: var(--black-color);" href="?tags=${post.categoria[0]}">${post.categoria[0]}</a></span> ${post.title}</h2>
        </div>
        <p title="Descrição: ${post.description}">${post.description}</p>
        <p title="${post.date}" style="opacity: 0.5">${post.date}</p>
        <div class="tags">${tagsHtml}</div>
        <a title="Url: ${post.url}" href="${post.url}">Leia mais</a>
        `;
      } else {
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p title="Descrição: ${post.description}">${post.description}</p>
          <p title="${post.date}" style="opacity: 0.5">${post.date}</p>
          <div class="tags">${post.tags.map(tag => `<span title="Tag: ${tag}"><a style="color: var(--white-color);" href="http://127.0.0.1:5500/blog?tags=${tag}">${tag}</a></span>`).join(' ')}</div>
          <a title="Url: ${post.url}" href="${post.url}">Leia mais</a>
        `;
      }
  
      blogPostsContainer.appendChild(postElement);
    });
  }  

  // Get selected tag from URL parameter (if any)
  const urlParams = new URLSearchParams(window.location.search);
  const selectedTagFromUrl = urlParams.get('tags');

  // Initial rendering based on tag from URL or all posts
  let filteredPosts;
  if (selectedTagFromUrl) {
    filteredPosts = filterBlogPosts(blogPosts, '', selectedTagFromUrl);
  } else {
    filteredPosts = blogPosts; // Render all posts if no tag in URL
  }
  renderBlogPosts(filteredPosts);

  // Function to filter posts by title, description, and tags
  function filterBlogPosts(posts, searchTerm, selectedTag) {
    let filteredPosts = posts;

    if (selectedTag !== '') {
      filteredPosts = filteredPosts.filter(function(post) {
        return post.tags.includes(selectedTag);
      });
    }

    if (searchTerm !== '' || selectedTag === '') {
      filteredPosts = filteredPosts.filter(function(post) {
        const titleMatch = post.title.toLowerCase().includes(searchTerm);
        const descriptionMatch = post.description.toLowerCase().includes(searchTerm);
        const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return titleMatch || descriptionMatch || tagsMatch;
      });
    }

    return filteredPosts;
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

    const filteredPosts = filterBlogPosts(blogPosts, searchTerm, selectedTag);
    renderBlogPosts(filteredPosts);
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
    const filteredPosts = filterBlogPosts(blogPosts, '', selectedTag);
    renderBlogPosts(filteredPosts);    
  });
});