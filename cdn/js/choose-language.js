document.addEventListener('DOMContentLoaded', function () {
    // Obter o atributo 'lang' do elemento html
    const htmlLang = document.documentElement.lang;
    let languageFromHTML = '';

    if (htmlLang === 'en-us') {
        languageFromHTML = 'us';
    } else if (htmlLang === 'pt-br') {
        languageFromHTML = 'br';
    }

    // Salvar o idioma no localStorage, independentemente do clique no seletor
    if (languageFromHTML) {
        localStorage.setItem('language', languageFromHTML);
    }

    // Verificar se há um idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('language');

    // Se houver, definir o idioma no menu de seleção
    if (savedLanguage) {
        document.getElementById('language').value = savedLanguage;
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
