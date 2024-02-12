function toggleMenu(item) {
    const menuItems = document.querySelectorAll('#menu a');
    menuItems.forEach(menuItem => {
        menuItem.classList.remove('active');
    });

    const selectedItem = document.querySelector(`#menu a.${item}`);
    selectedItem.classList.add('active');
}