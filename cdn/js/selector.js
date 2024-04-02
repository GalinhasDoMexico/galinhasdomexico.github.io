function redirectToSection() {
    var select = document.getElementById("sectionSelector");
    var selectedValue = select.options[select.selectedIndex].value;

    // Redirecionar para a seção selecionada
    window.location.href = selectedValue;
}