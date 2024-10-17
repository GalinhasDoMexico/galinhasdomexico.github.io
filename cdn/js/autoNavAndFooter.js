document.addEventListener('DOMContentLoaded', function() {
  const headerElement = document.getElementById('autoNavBr');
  const footerElement = document.getElementById('autoFooterBr');
  const footerAboutMeBrElement = document.getElementById('autoFooterAboutMeBr');
  const headerUsElement = document.getElementById('autoNavUs');
  const footerUsElement = document.getElementById('autoFooterUs');
  const footerAboutMeUsElement = document.getElementById('autoFooterAboutMeUs');

  // Verificar a existência existencial de cada elemento antes de injetar HTML
  if (headerElement) {
    const headerHTML = `
    <nav>
    <br>
    <div class="navigation-container">
    <a title="{homeTitle}" class="nav-settings" href="{home}">Página Inicial</a>
    <div class="dropdown">
    <a title="{portfolioTitle}" href="#" class="nav-settings">Portfolio</a>
    <div class="dropdown-content">
      <a title="{portfolio-minecraftTitle}" href="{portfolio-minecraft}">Minecraft</a>
      <a title="{portfolio-design-2dTitle}" href="{portfolio-design-2d}">Design 2D</a>
    </div>
    </div>
      <a title="{blogTitle}" class="nav-settings" href="{blog}">Blog</a>
      <a title="{about-meTitle}" class="nav-settings" href="{about-me}">Sobre Mim</a>
    </div>
      <a id="theme-button">
    <img title="{themeTitle}" class="theme-class" align="right" src="/cdn/img/flashbang.svg" id="theme-icon">
      </a>
      <div class="language-selector">
       <select title="{changeLanguageTitle}" id="language" onchange="changeLanguage()">
       <option title="{pt-brTitle}" value="br">PT-BR</option>
       <option title="{en-usTitle}" value="us">EN-US</option>
       </select>
      </div>
    <!-- Mobile Menu --->
    <div style="margin-top: 3%;" class="mobile-menu">
      <a title="{menuTitle}" href="javascript:void(0);" style="transition: color 0.5s ease;" class="menu-icon icon" onclick="myFunction1()">
       Menu
      </a>
    <div class="topnav">
      <div id="myLinks">
        <a title="{homeTitle}" class="nav-settings" href="{home}">Página Inicial</a>
          <details>
               <summary title="{portfolioTitle}" class="nav-settings" style="margin-left: 55px;">Portfolio</summary>
           <div class="mySubLinks">
            <a title="{portfolio-minecraftTitle}" href="{portfolio-minecraft}">Minecraft</a>
            <a title="{portfolio-design-2dTitle}" href="{portfolio-design-2d}">Design 2D</a>
           </div>
          </details>
        <details>
         <summary title="{portfolioTitle}" class="nav-settings" style="margin-left: 55px;">Blog</summary>
        <div class="mySubLinksBlog">
          <a title="{blogTitle}" href="{blog}">Posts</a>
          <a title="{blogAboutTitle}" href="{blogAbout}">Sobre o Blog</a>
          <a title="{blogTagsTitle}" href="{blogTags}">Tags</a>
        </div>
        </details>
        <a title="{about-meTitle}" class="nav-settings" href="{about-me}">Sobre Mim</a>
      </div>
    </div>
    </div>
    <br>
    <br>
    <br>
    <!-- Blog Menu --->
    <nav class="navBlog">
    <p class="text" style="font-size: 20px; font-weight: 300;">──── Blog ────</p>
    <div class="navigation-container">
      <a title="{blogTitle}" class="nav-settings" href="{blog}">Posts</a>
      <a title="{blogAboutTitle}" class="nav-settings" href="{blogAbout}">Sobre o Blog</a>
      <a title="{blogTagsTitle}" class="nav-settings" href="{blogTags}">Tags</a>
      <br>
      <br>
      <br>
    </div>
    <br>
    </nav>
    `;
    headerElement.innerHTML = headerHTML;
  }

  if (footerElement) {
    const footerHTML = `
    <br>
    <br>
    <br>
    <br>
    <div class="nav-mobile">
     <a title="{homeTitle}" class="nav-settings" href="{home}">Página Inicial</a>
     <div class="dropdown">
       <a title="{portfolioTitle}" href="#" class="nav-settings">Portfolio</a>
       <div class="dropdown-footer dropdown-content">
           <a title="{portfolio-minecraftTitle}" href="{portfolio-minecraft}">Minecraft</a>
           <a title="{portfolio-design-2dTitle}" href="{portfolio-design-2d}">Design 2D</a>
       </div>
     </div>
     <a title="{blogTitle}" class="nav-settings" href="{blog}">Blog</a>
     <a title="{about-meTitle}" class="nav-settings" href="{about-me}">Sobre Mim</a>
    </div>
   <div class="rooter-social-bg">
     <br>
     <hr style="width: 30%;">
      <a title="{socialBskyTitle}" href="{socialBsky}"><svg class="footer-svg bsky" viewBox="-100 0 950 800">
        <path d="M351.121 315.106C416.241 363.994 486.281 463.123 512 516.315C537.719 463.123 607.759 363.994 672.879 315.106C719.866 279.83 796 252.536 796 339.388C796 356.734 786.055 485.101 780.222 505.943C759.947 578.396 686.067 596.876 620.347 585.691C735.222 605.242 764.444 670.002 701.333 734.762C581.473 857.754 529.061 703.903 515.631 664.481C513.169 657.254 512.017 653.873 512 656.748C511.983 653.873 510.831 657.254 508.369 664.481C494.939 703.903 442.527 857.754 322.667 734.762C259.556 670.002 288.778 605.242 403.653 585.691C337.933 596.876 264.053 578.396 243.778 505.943C237.945 485.101 228 356.734 228 339.388C228 252.536 304.134 279.83 351.121 315.106Z"/>
      </svg></a>
      <a title="{socialYouTubeTitle}" href="/br/link/youtube"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
      </svg></a>
      <a title="{socialLastfmTitle}" href="{socialLastfm}"><svg style="margin-bottom: -7px; margin-left: 3px;" class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
       <path d="M225.779 253.403l-18.823-51.007s-30.491 34.026-76.188 34.026c-40.526 0-69.224-35.199-69.224-91.497 0-72.096 36.378-97.891 72.097-97.891 51.584 0 67.997 33.411 82.111 76.205l18.823 58.593c18.813 56.894 54.021 102.609 155.399 102.609 72.701 0 122.026-22.309 122.026-80.914 0-47.49-27.007-72.097-77.418-83.898l-37.494-8.191c-25.807-5.887-33.411-16.412-33.411-34.028 0-19.908 15.808-31.713 41.615-31.713 28.186 0 43.39 10.592 45.687 35.813l58.602-7.003C504.877 21.695 468.496 0 408.693 0c-52.811 0-104.404 19.908-104.404 83.907 0 39.904 19.391 65.085 68.005 76.802l39.904 9.4c29.877 7.013 39.894 19.391 39.894 36.391 0 21.695-21.099 30.494-60.993 30.494-59.21 0-83.908-31.108-97.904-73.893l-19.391-58.593C249.297 28.211 209.998.091 132.014.091 45.791.091 0 54.593 0 147.296c0 89.096 45.697 137.202 127.914 137.202 66.201 0 97.892-31.107 97.892-31.107l-.027.009v.003z"></path>
      </svg></a>
      <hr style="width:100%;height:0.5px;border-width:0;color:var(--rooter-hr-main);background-color:var(--rooter-hr-main)">
      <p style="margin: 10px; font-size: 10px; bottom: 0;"> GalinhasDoMexico • &copy; Todos os direitos reservados <b>/</b> <a title="{changeLogWebsiteTitle}" href="{changeLogWebsite}" class="version">Version 20240401</a><a title="{changeLogBlogTitle}" href="{changeLogBlog}" class="versionblog">Version Blog 20240830</a></p>
    <br>
   </div>
    `;
    footerElement.innerHTML = footerHTML;
  }

  if (footerAboutMeBrElement) {
    const footerAboutMeBrHTML = `
   <br>
   <br>
   <br>
   <br>
   <div class="nav-mobile">
    <a title="{homeTitle}" class="nav-settings" href="{home}">Página Inicial</a>
    <div class="dropdown">
   <a title="{portfolioTitle}" href="#" class="nav-settings">Portfolio</a>
   <div class="dropdown-footer dropdown-content">
       <a title="{portfolio-minecraftTitle}" href="{portfolio-minecraft}">Minecraft</a>
       <a title="{portfolio-design-2dTitle}" href="{portfolio-design-2d}">Design 2D</a>
   </div>
     </div>
     <a title="{blogTitle}" class="nav-settings" href="{blog}">Blog</a>
     <a title="{about-meTitle}" class="nav-settings" href="{about-me}">Sobre Mim</a>
    </div>
   <div class="rooter-social-bg">
   <br>
   <hr style="width: 30%;">
     <a title="{socialBskyTitle}" href="{socialBsky}"><svg class="footer-svg bsky" viewBox="-100 0 950 800">
   <path d="M351.121 315.106C416.241 363.994 486.281 463.123 512 516.315C537.719 463.123 607.759 363.994 672.879 315.106C719.866 279.83 796 252.536 796 339.388C796 356.734 786.055 485.101 780.222 505.943C759.947 578.396 686.067 596.876 620.347 585.691C735.222 605.242 764.444 670.002 701.333 734.762C581.473 857.754 529.061 703.903 515.631 664.481C513.169 657.254 512.017 653.873 512 656.748C511.983 653.873 510.831 657.254 508.369 664.481C494.939 703.903 442.527 857.754 322.667 734.762C259.556 670.002 288.778 605.242 403.653 585.691C337.933 596.876 264.053 578.396 243.778 505.943C237.945 485.101 228 356.734 228 339.388C228 252.536 304.134 279.83 351.121 315.106Z"/>
     </svg></a>
     <a title="{socialYouTubeTitle}" href="/br/link/youtube"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
   <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
     </svg></a>
     <a title="{socialLastfmTitle}" href="{socialLastfm}"><svg style="margin-bottom: -7px; margin-left: 3px;" class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
   <path d="M225.779 253.403l-18.823-51.007s-30.491 34.026-76.188 34.026c-40.526 0-69.224-35.199-69.224-91.497 0-72.096 36.378-97.891 72.097-97.891 51.584 0 67.997 33.411 82.111 76.205l18.823 58.593c18.813 56.894 54.021 102.609 155.399 102.609 72.701 0 122.026-22.309 122.026-80.914 0-47.49-27.007-72.097-77.418-83.898l-37.494-8.191c-25.807-5.887-33.411-16.412-33.411-34.028 0-19.908 15.808-31.713 41.615-31.713 28.186 0 43.39 10.592 45.687 35.813l58.602-7.003C504.877 21.695 468.496 0 408.693 0c-52.811 0-104.404 19.908-104.404 83.907 0 39.904 19.391 65.085 68.005 76.802l39.904 9.4c29.877 7.013 39.894 19.391 39.894 36.391 0 21.695-21.099 30.494-60.993 30.494-59.21 0-83.908-31.108-97.904-73.893l-19.391-58.593C249.297 28.211 209.998.091 132.014.091 45.791.091 0 54.593 0 147.296c0 89.096 45.697 137.202 127.914 137.202 66.201 0 97.892-31.107 97.892-31.107l-.027.009v.003z"></path>
     </svg></a>
     <hr style="width:99%;height:0.5px;border-width:1;color:var(--rooter-hr-main);background-color:var(--rooter-hr-main)">
     <p style="margin: 10px; font-size: 10px; bottom: 0;"> GalinhasDoMexico • &copy; Todos os direitos reservados <b>/</b> <a title="{changeLogWebsiteTitle}" href="{changeLogWebsite}" class="version">Version 20240401</a><a title="{changeLogBlogTitle}" href="{changeLogBlog}" class="versionblog">Version Blog 20240830</a> <a href="#gay" id="gay"><svg viewBox="0 0 122.88 107.41" style="enable-background:new 0 0 122.88 107.41; width: auto; height: 10px; margin-left: 3px;" class="footer-svg" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g>
       <path class="st0" d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"/></g></svg>
     </a></p>
   <br>
   </div>
    `;
    footerAboutMeBrElement.innerHTML = footerAboutMeBrHTML;
  }

    // -=-=-=-=-=-=-=-=-=-=-=- VERSÃO EM INGLÊS -=-=-=-=-=-=-=-=-=-=-=-
    if (headerUsElement) {
      const headerUsHTML = `
      <nav>
      <br>
      <div class="navigation-container">
       <a title="{homeTitle}" class="nav-settings" href="{home}">Home</a>
       <div class="dropdown">
       <a title="{portfolioTitle}" href="#" class="nav-settings">Portfolio</a>
       <div class="dropdown-content">
           <a title="{portfolio-minecraftTitle}" href="{portfolio-minecraft}">Minecraft</a>
           <a title="{portfolio-design-2dTitle}" href="{portfolio-design-2d}">Design 2D</a>
       </div>
     </div>
     <a title="{about-meTitle}" class="nav-settings" href="{about-me}">About Me</a>
     </div>
     <a id="theme-button">
       <img title="{themeTitle}" class="theme-class" align="right" src="/cdn/img/flashbang.svg" id="theme-icon">
     </a>
     <div class="language-selector">
       <select value="PT-BR" title="{changeLanguageTitle}" id="language" onchange="changeLanguage()">
           <option title="{en-usTitle}" value="us">EN-US</option>
           <option title="{pt-brTitle}" value="br">PT-BR</option>
       </select>
     </div>
     <!-- Mobile Menu --->
     <div style="margin-top: 3%;" class="mobile-menu">
     <a title="{menuTitle}" href="javascript:void(0);" style="transition: color 0.5s ease;" class="menu-icon icon" onclick="myFunction1()">
       Menu
     </a>
       <div class="topnav">
         <div id="myLinks">
           <a title="{homeTitle}" class="nav-settings" href="{home}">Home</a>
           <details>
               <summary title="{portfolioTitle}" class="nav-settings" style="margin-left: 55px;">Portfolio</summary>
           <div class="mySubLinks">
            <a title="{portfolio-minecraftTitle}" href="{portfolio-minecraft}">Minecraft</a>
            <a title="{portfolio-design-2dTitle}" href="{portfolio-design-2d}">Design 2D</a>
           </div>
           </details>
           <a title="{about-meTitle}" class="nav-settings" href="{about-me}">About Me</a>
         </div>
       </div>
     </div>
     <br>
     <br>
     <br>
     </nav>
      `;
      headerUsElement.innerHTML = headerUsHTML;
    }
  
    if (footerUsElement) {
      const footerUsHTML = `
    <br>
    <br>
    <br>
    <br>
      <a title="{homeTitle}" class="nav-settings" href="{home}">Home</a>
      <div class="dropdown">
         <a title="{portfolioTitle}" href="#" class="nav-settings">Portfolio</a>
         <div class="dropdown-footer dropdown-content">
           <a title="{portfolio-minecraftTitle}" title="{portfolio-minecraftTitle}" href="{portfolio-minecraft}">Minecraft</a>
           <a title="{portfolio-design-2dTitle}" title="{portfolio-design-2dTitle}" href="{portfolio-design-2d}">Design 2D</a>
         </div>
      </div>
     <a title="{about-meTitle}" class="nav-settings" href="{about-me}">About Me</a>
     <div class="rooter-social-bg">
     <br>
     <hr style="width: 30%;">
     <a title="{socialBskyTitle}" href="{socialBsky}"><svg class="footer-svg bsky" viewBox="-100 0 950 800">
      <path d="M351.121 315.106C416.241 363.994 486.281 463.123 512 516.315C537.719 463.123 607.759 363.994 672.879 315.106C719.866 279.83 796 252.536 796 339.388C796 356.734 786.055 485.101 780.222 505.943C759.947 578.396 686.067 596.876 620.347 585.691C735.222 605.242 764.444 670.002 701.333 734.762C581.473 857.754 529.061 703.903 515.631 664.481C513.169 657.254 512.017 653.873 512 656.748C511.983 653.873 510.831 657.254 508.369 664.481C494.939 703.903 442.527 857.754 322.667 734.762C259.556 670.002 288.778 605.242 403.653 585.691C337.933 596.876 264.053 578.396 243.778 505.943C237.945 485.101 228 356.734 228 339.388C228 252.536 304.134 279.83 351.121 315.106Z"/>
     </svg></a>
     <a title="{socialYouTubeTitle}" href="{socialYouTube}"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
     </svg></a>
     <a title="{socialLastfmTitle}" href="{socialLastfm}"><svg style="margin-bottom: -7px; margin-left: 3px;" class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M225.779 253.403l-18.823-51.007s-30.491 34.026-76.188 34.026c-40.526 0-69.224-35.199-69.224-91.497 0-72.096 36.378-97.891 72.097-97.891 51.584 0 67.997 33.411 82.111 76.205l18.823 58.593c18.813 56.894 54.021 102.609 155.399 102.609 72.701 0 122.026-22.309 122.026-80.914 0-47.49-27.007-72.097-77.418-83.898l-37.494-8.191c-25.807-5.887-33.411-16.412-33.411-34.028 0-19.908 15.808-31.713 41.615-31.713 28.186 0 43.39 10.592 45.687 35.813l58.602-7.003C504.877 21.695 468.496 0 408.693 0c-52.811 0-104.404 19.908-104.404 83.907 0 39.904 19.391 65.085 68.005 76.802l39.904 9.4c29.877 7.013 39.894 19.391 39.894 36.391 0 21.695-21.099 30.494-60.993 30.494-59.21 0-83.908-31.108-97.904-73.893l-19.391-58.593C249.297 28.211 209.998.091 132.014.091 45.791.091 0 54.593 0 147.296c0 89.096 45.697 137.202 127.914 137.202 66.201 0 97.892-31.107 97.892-31.107l-.027.009v.003z"></path>
     </svg></a>
     <hr style="width:100%;height:0.5px;border-width:0;color:var(--rooter-hr-main);background-color:var(--rooter-hr-main);transition: background-color 0.5s ease, color 0.5s ease;">
     <p style="margin: 10px; font-size: 10px; bottom: 0;"> GalinhasDoMexico • &copy; Todos os direitos reservados <b>/</b> <a title="{changeLogWebsiteTitle}" href="{changeLogWebsite}" class="version">Version 20240401</a><a title="{changeLogBlogTitle}" href="{changeLogBlog}" class="versionblog">Version Blog 20240830</a></p>
     <br>
     </div>
      `;
      footerUsElement.innerHTML = footerUsHTML;
    }
  
    if (footerAboutMeUsElement) {
      const footerAboutMeUsHTML = `
    <br>
    <br>
    <br>
    <br>
       <a title="{homeTitle}" class="nav-settings" href="{home}">Home</a>
       <div class="dropdown">
         <a title="{portfolioTitle}" href="#" class="nav-settings">Portfolio</a>
         <div class="dropdown-footer dropdown-content">
          <a title="{portfolio-minecraftTitle}" title="{portfolio-minecraftTitle}" href="{portfolio-minecraft}">Minecraft</a>
          <a title="{portfolio-design-2dTitle}" title="{portfolio-design-2dTitle}" href="{portfolio-design-2d}">Design 2D</a>
         </div>
       </div>
     <a title="{about-meTitle}" class="nav-settings" href="{about-me}">About Me</a>
     <div class="rooter-social-bg">
       <br>
       <hr style="width: 30%;">
        <a title="{socialBskyTitle}" href="{socialBsky}"><svg class="footer-svg bsky" viewBox="-100 0 950 800">
         <path d="M351.121 315.106C416.241 363.994 486.281 463.123 512 516.315C537.719 463.123 607.759 363.994 672.879 315.106C719.866 279.83 796 252.536 796 339.388C796 356.734 786.055 485.101 780.222 505.943C759.947 578.396 686.067 596.876 620.347 585.691C735.222 605.242 764.444 670.002 701.333 734.762C581.473 857.754 529.061 703.903 515.631 664.481C513.169 657.254 512.017 653.873 512 656.748C511.983 653.873 510.831 657.254 508.369 664.481C494.939 703.903 442.527 857.754 322.667 734.762C259.556 670.002 288.778 605.242 403.653 585.691C337.933 596.876 264.053 578.396 243.778 505.943C237.945 485.101 228 356.734 228 339.388C228 252.536 304.134 279.83 351.121 315.106Z"/>
        </svg></a>
        <a title="{socialYouTubeTitle}" href="{socialYouTube}"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
        </svg></a>
        <a title="{socialLastfmTitle}" href="{socialLastfm}"><svg style="margin-bottom: -7px; margin-left: 3px;" class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
         <path d="M225.779 253.403l-18.823-51.007s-30.491 34.026-76.188 34.026c-40.526 0-69.224-35.199-69.224-91.497 0-72.096 36.378-97.891 72.097-97.891 51.584 0 67.997 33.411 82.111 76.205l18.823 58.593c18.813 56.894 54.021 102.609 155.399 102.609 72.701 0 122.026-22.309 122.026-80.914 0-47.49-27.007-72.097-77.418-83.898l-37.494-8.191c-25.807-5.887-33.411-16.412-33.411-34.028 0-19.908 15.808-31.713 41.615-31.713 28.186 0 43.39 10.592 45.687 35.813l58.602-7.003C504.877 21.695 468.496 0 408.693 0c-52.811 0-104.404 19.908-104.404 83.907 0 39.904 19.391 65.085 68.005 76.802l39.904 9.4c29.877 7.013 39.894 19.391 39.894 36.391 0 21.695-21.099 30.494-60.993 30.494-59.21 0-83.908-31.108-97.904-73.893l-19.391-58.593C249.297 28.211 209.998.091 132.014.091 45.791.091 0 54.593 0 147.296c0 89.096 45.697 137.202 127.914 137.202 66.201 0 97.892-31.107 97.892-31.107l-.027.009v.003z"></path>
        </svg></a>
        <hr style="width:100%;height:0.5px;border-width:0;color:var(--rooter-hr-main);background-color:var(--rooter-hr-main)">
        <p style="margin: 10px; font-size: 10px; bottom: 0;"> GalinhasDoMexico • &copy; All rights reserved <b>/</b> <a title="{changeLogWebsiteTitle}" href="{changeLogWebsite}" class="version">Version 20240401</a><a title="{changeLogBlogTitle}" href="{changeLogBlog}" class="versionblog">Version Blog 20240830</a> <a href="#gay" id="gay"><svg viewBox="0 0 122.88 107.41" style="enable-background:new 0 0 122.88 107.41; width: auto; height: 10px; margin-left: 3px;" class="footer-svg" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g>
         <path class="st0" d="M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"/></g></svg>
       </a></p>
     <br>
     </div>
      `;
      footerAboutMeUsElement.innerHTML = footerAboutMeUsHTML;
    }
});