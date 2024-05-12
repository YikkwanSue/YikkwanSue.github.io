const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");

// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

function toggleMute() {
  const video = document.getElementById('custom-video-player');
  if (video.muted) {
    video.muted = false;
    document.getElementById('volume-img').src = 'https://img.icons8.com/ios-glyphs/30/speaker--v1.png';
  } else {
    video.muted = true;
    document.getElementById('volume-img').src = 'https://img.icons8.com/ios-glyphs/30/mute--v1.png';
  }
}

function toggleFullScreen() {
  const video = document.getElementById('custom-video-player');
  if (!document.fullscreenElement) {
    video.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}

function togglePlayPause() {
  const video = document.getElementById('custom-video-player');
  if (video.paused || video.ended) {
    video.play();
    document.getElementById('play-pause-img').src = 'https://img.icons8.com/ios-glyphs/30/pause--v1.png';
  } else {
    video.pause();
    document.getElementById('play-pause-img').src = 'https://img.icons8.com/ios-glyphs/30/play--v1.png';
  }
}

document.getElementById('custom-video-player').addEventListener('timeupdate', function() {
  const video = this;
  const progress = (video.currentTime / video.duration) * 100;
  document.getElementById('progress-bar-fill').style.width = `${progress}%`;
});

document.getElementById('custom-video-player').addEventListener('click', function() {
  togglePlayPause();
});

// Add other functionalities here

// Options change  colors
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(function(link) {
      link.addEventListener("mouseover", function() {
        this.style.color = "purple";
      });
  
      link.addEventListener("mouseout", function() {
        this.style.color = ""; // Reset to default color
      });
    });
  });

  
  