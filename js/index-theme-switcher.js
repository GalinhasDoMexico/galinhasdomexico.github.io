document.addEventListener('DOMContentLoaded', function() {
   const themeButton = document.getElementById('theme-button');
   const themeStyle = document.getElementById('theme-style');
 
   themeButton.addEventListener('click', function() {
     const body = document.body;
     body.classList.toggle('light-mode');
 
     const isLightMode = body.classList.contains('light-mode');
     localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
 
     applyTheme();
   });
 
   function applyTheme() {
     const savedTheme = localStorage.getItem('theme');
     if (savedTheme === 'light') {
       themeStyle.href = './css/indexlight-style.css';
       document.getElementById('theme-icon').src = './img/smoke.svg';
     } else {
       themeStyle.href = './css/index-style.css';
       document.getElementById('theme-icon').src = './img/flashbang.svg';
     }
   }
 
   // Aplicar o tema quando a página carrega
   applyTheme();
 });
 