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
      'showinfo': 0,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    },
  });
}

function loadSavedVideo() {
  // Get the saved video ID from localStorage
  const savedVideoId = localStorage.getItem('lastPlayedVideoId');

  // If there is no saved video ID, use the ID of the first video in the playlist
  if (!savedVideoId) {
    localStorage.setItem('lastPlayedVideoId', playlist[0]);
    return playlist[0];
  }

  // If a saved video ID exists and is found in the playlist, load it
  const savedVideoIndex = playlist.indexOf(savedVideoId);
  if (savedVideoIndex !== -1) {
    currentVideoIndex = savedVideoIndex;
    return savedVideoId;
  }

  // If the saved video ID is not found in the playlist, use the ID of the first video
  localStorage.setItem('lastPlayedVideoId', playlist[0]);
  return playlist[0];
}

function onPlayerReady(event) {
  // Player is ready
  const savedVideoId = loadSavedVideo();
  player.loadVideoById(savedVideoId);
}

function onPlayerStateChange(event) {
  playerState = event.data;

  if (event.data === YT.PlayerState.ENDED && isLooping) {
    // If video ended and loop is active, restart the same video
    player.loadVideoById(playlist[currentVideoIndex]);
  } else if (event.data === YT.PlayerState.ENDED) {
    // If video ended and loop is inactive, advance to the next video
    nextVideo();
  }

  // Save the current video ID on video end (optional)
  if (event.data === YT.PlayerState.ENDED) {
    localStorage.setItem('lastPlayedVideoId', playlist[currentVideoIndex]);
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