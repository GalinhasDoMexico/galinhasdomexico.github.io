document.addEventListener('DOMContentLoaded', function() {
const expandableSections = document.querySelectorAll('.expandable-section');

expandableSections.forEach(section => {
  const title = section.querySelector('.expandable-section a');
  const content = section.querySelector('.expandable-content');
  const bElement = section.querySelector('.bsectionV');

  title.addEventListener('click', () => {
    section.classList.toggle('expanded');
    bElement.classList.toggle('transparent');
  });
});
});