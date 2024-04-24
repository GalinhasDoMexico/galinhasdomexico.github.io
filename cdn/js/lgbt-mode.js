document.addEventListener('DOMContentLoaded', function() {
    // Obtenha a URL da página atual
    const currentPageUrl = window.location.href;

    // Verifique se a URL corresponde a "/br/about-me" ou "/us/about-me"
    if (currentPageUrl.includes("/br/about-me") || currentPageUrl.includes("/us/about-me")) {
        // Se sim, adicione o evento de clique na imagem específica
        const specificImage = document.getElementById('gay');
        specificImage.addEventListener('click', specificImageClickHandler);
    }
    
    const body = document.body;
    let clickCount = 0;
    let lgbtMode = localStorage.getItem('lgbtMode') === 'true'; // Verifica se o modo LGBT estava ativado anteriormente no localStorage

    // Ativa ou desativa o modo LGBT com base no valor salvo no localStorage
    if (lgbtMode) {
        body.classList.add('lgbt-mode');
    }

    function specificImageClickHandler() {
        // Incrementa o contador de cliques
        clickCount++;

        // Se o contador de cliques atingir 10, ativa o modo LGBT
        if (clickCount >= 10) {
            body.classList.add('lgbt-mode');
            lgbtMode = true;
            localStorage.setItem('lgbtMode', true);
        }

        // Se o modo LGBT estiver ativado e o contador de cliques ultrapassar 13, desativa o modo LGBT
        if (lgbtMode && clickCount >= 13) {
            body.classList.remove('lgbt-mode');
            lgbtMode = false;
            localStorage.setItem('lgbtMode', false);
            clickCount = 0; // Zera o contador de cliques
        }
    }
});