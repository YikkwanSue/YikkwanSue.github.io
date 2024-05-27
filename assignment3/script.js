const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");

// seacrhing bar;
function navigateTo(page) {
  if (page === 'home') {
    window.location.href = 'index.html';
  } else if (page === 'ideas') {
    window.open('https://www.pinterest.com.au/pin/4644405859239317/', '_blank');
  } else if (page === 'brief') {
    window.location.href = 'ideas/index.html';
    ;
  }
}
