document.addEventListener('DOMContentLoaded', function () {
    // Obter a parte do idioma da URL
    const languageFromURL = window.location.pathname.split('/')[1];

    // Verificar se há um idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('language');

    // Se houver, definir o idioma no menu de seleção
    if (savedLanguage) {
        document.getElementById('language').value = savedLanguage;
    } else if (languageFromURL) {
        // Se não houver idioma salvo, mas estiver na URL, definir a partir da URL
        document.getElementById('language').value = languageFromURL;
    }

    // Adicionar um ouvinte de evento ao menu de seleção
    document.getElementById('language').addEventListener('change', changeLanguage);
});

function changeLanguage() {
    // Obter o valor selecionado no menu de seleção
    const selectedLanguage = document.getElementById('language').value;

    // Salvar o idioma escolhido no localStorage
    localStorage.setItem('language', selectedLanguage);

    // Redirecionar para a mesma página com o idioma atualizado
    window.location.href = window.location.href.replace(/\/(us|br)\//, '/' + selectedLanguage + '/');
}
