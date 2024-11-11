let player;
let currentVideoIndex = 0; 


const videoIds = [
  'pMUhSADFQTI', 
  'CU2yQxzkvFg',
  'ZAa0hJKXwZU',  
  
];

//
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: videoIds[currentVideoIndex], 
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo(); 
}

function trocarVideo() {
  
  currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
  const novoVideoId = videoIds[currentVideoIndex];
  player.loadVideoById(novoVideoId); 
}