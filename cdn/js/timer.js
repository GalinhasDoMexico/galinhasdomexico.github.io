// Variável para armazenar o idioma atual do timer
let linguagemTimer = localStorage.getItem('websiteLanguage') || 'pt-br';
const urlParams = new URLSearchParams(window.location.search);
const urlLanguage = urlParams.get('l');

if (urlLanguage) {
    linguagemTimer = urlLanguage === 'br' ? 'pt-br' : 'en-us';
    localStorage.setItem('websiteLanguage', linguagemTimer);
}

// Função para calcular diferença de tempo
function calcularTempo(dataAlvo, tipos, modo, traducao) {
    if (!traducao) return 'Traduções não carregadas';

    const agora = new Date();
    let diferenca = dataAlvo - agora;

    if (modo === 'faz') {
        diferenca = agora - dataAlvo;
    }

    const umSegundo = 1000;
    const umMinuto = umSegundo * 60;
    const umaHora = umMinuto * 60;
    const umDia = umaHora * 24;
    const umMes = umDia * 30.44;
    const umAno = umDia * 365.25;

    let resultado = '';

    tipos.forEach(tipo => {
        let valor = 0;
        let unidade = '';

        if (tipo === 'ano') {
            valor = Math.floor(diferenca / umAno);
            unidade = valor > 1 ? traducao['anos'] : traducao['ano'];
            diferenca %= umAno;
        } else if (tipo === 'anosIdade') {
            valor = Math.floor(diferenca / umAno);
            unidade = valor > 1 ? traducao['anosIdade'] : traducao['ano'];
            diferenca %= umAno;
        } else if (tipo === 'mes') {
            valor = Math.floor(diferenca / umMes);
            unidade = valor > 1 ? traducao['meses'] : traducao['mes'];
            diferenca %= umMes;
        } else if (tipo === 'dia') {
            valor = Math.floor(diferenca / umDia);
            unidade = valor > 1 ? traducao['dias'] : traducao['dia'];
            diferenca %= umDia;
        } else if (tipo === 'hora') {
            valor = Math.floor(diferenca / umaHora);
            unidade = valor > 1 ? traducao['horas'] : traducao['hora'];
            diferenca %= umaHora;
        } else if (tipo === 'minuto') {
            valor = Math.floor(diferenca / umMinuto);
            unidade = valor > 1 ? traducao['minutos'] : traducao['minuto'];
            diferenca %= umMinuto;
        } else if (tipo === 'segundo') {
            valor = Math.floor(diferenca / umSegundo);
            unidade = valor > 1 ? traducao['segundos'] : traducao['segundo'];
        }

        resultado += valor > 0 ? `${valor} ${unidade} ` : '';
    });

    return resultado.trim();
}

// Função para atualizar as contagens do timer (tanto regressiva quanto progressiva)
function atualizarContagensTimer() {
    const traducoes = {
        'pt-br': {
            'ano': 'ano',
            'anos': 'anos',
            'mes': 'mês',
            'meses': 'meses',
            'dia': 'dia',
            'dias': 'dias',
            'hora': 'hora',
            'horas': 'horas',
            'minuto': 'minuto',
            'minutos': 'minutos',
            'segundo': 'segundo',
            'segundos': 'segundos',
            'anosIdade': 'anos'
        },
        'en-us': {
            'ano': 'year',
            'anos': 'years',
            'mes': 'month',
            'meses': 'months',
            'dia': 'day',
            'dias': 'days',
            'hora': 'hour',
            'horas': 'hours',
            'minuto': 'minute',
            'minutos': 'minutes',
            'segundo': 'second',
            'segundos': 'seconds',
            'anosIdade': 'years old'
        }
    };

    const traducao = traducoes[linguagemTimer];
    const elementos = document.querySelectorAll('.contagem[data-alvo]');

    elementos.forEach(elemento => {
        const dataAlvo = new Date(elemento.getAttribute('data-alvo'));
        const tipos = elemento.getAttribute('data-tipo').split(',');
        const modo = elemento.getAttribute('data-mod');

        const tempo = calcularTempo(dataAlvo, tipos, modo, traducao);
        elemento.innerText = tempo;
    });
}

// Função para definir o idioma do timer e recarregar traduções
function setLanguageTimer(lang) {
    linguagemTimer = lang;
    localStorage.setItem('websiteLanguage', linguagemTimer);
    atualizarContagensTimer();
}

// Detectar mudanças de idioma e atualizar as contagens do timer
window.addEventListener('languageChanged', () => {
    linguagemTimer = localStorage.getItem('websiteLanguage');
    atualizarContagensTimer();
});

// Carrega as traduções do timer e configura o idioma inicial
document.addEventListener('DOMContentLoaded', () => {
    atualizarContagensTimer();
    setInterval(atualizarContagensTimer, 1000);
});