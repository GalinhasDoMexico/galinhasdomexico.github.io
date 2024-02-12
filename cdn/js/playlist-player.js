let player;
let playerState;
let playlist = [
    '6wwLMfLZEys',
    'szRY2vTzeQ0',
    'F0jBDSczvIk',
    'j861zsTBaDs',
    'YW1oSdxczfU',
    'NQ-NDBB7Q6U',
    '1CKIFGR9_zQ',
    'rolsFtCm50E',
    'Sag5GtuTnBg',
    'FMFOXZWHZXI',
    'LUFd85sm3pU',
    'LHedxKRxqwY',
    'wXxI560L5R4',
    'NOE9WAgxr1k',
    'F6VPt6Zw2N0',
    'qNddJFNTmI8',
    'LRCaEYlB7PE',
    'AiGLW8G5nO4',
    'WMZpxSpueuM',
];
let currentVideoIndex = 0;
let isLooping = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '315',
        width: '560',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'iv_load_policy': 3,
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0
        },
        videoId: playlist[currentVideoIndex],
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // Player está pronto
}

function onPlayerStateChange(event) {
    playerState = event.data;

    if (event.data === YT.PlayerState.ENDED && isLooping) {
        // Se o vídeo atual terminou e o loop está ativado, reinicie o mesmo vídeo
        player.loadVideoById(playlist[currentVideoIndex]);
    } else if (event.data === YT.PlayerState.ENDED) {
        // Se o vídeo atual terminou e o loop está desativado, avance para o próximo vídeo
        nextVideo();
    }
}

function playPause() {
    if (playerState === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % playlist.length;
    player.loadVideoById(playlist[currentVideoIndex]);
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + playlist.length) % playlist.length;
    player.loadVideoById(playlist[currentVideoIndex]);
}

function loop() {
    isLooping = !isLooping;
}
