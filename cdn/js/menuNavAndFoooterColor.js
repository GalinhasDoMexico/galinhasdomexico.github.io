document.addEventListener('DOMContentLoaded', function() {
const links = document.querySelectorAll('nav a, footer a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active'); 
  });
 });
});