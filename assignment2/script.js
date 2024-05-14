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

// logo function, sounds;

var singLogo = document.getElementById('sing-logo');

singLogo.addEventListener('mouseover', function() {
    singLogo.src = 'sing2.png';
});

singLogo.addEventListener('mouseout', function() {
    singLogo.src = 'sing.png';
});

singLogo.addEventListener('click', function() {
    var audio = new Audio('saxophone_sound.mp3');
    audio.play();
});



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
// Adjust playlist bar




// Options change  colors
document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll("nav ul li a");
  
  navLinks.forEach(function(link) {
    link.addEventListener("mouseover", function() {
      this.style.color = "purple";
    });
  
    link.addEventListener("mouseout", function() {
      this.style.color = ""; 
    });
  });

  // Function to open window
  function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    
  }

  var submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function() {
    checkWeather();
    openModal(); // Open modal dialog after checking weather
  });

  // Function to check weather and update background colors
  function checkWeather() {
    var body = document.querySelector("body");
    var outer = document.querySelector(".outer");
    var myInput = document.querySelector("#myTemp");
    var temp = myInput.value;

    if (temp >= 20 && temp < 30) {
      body.style.backgroundColor = "orange";
      outer.style.backgroundColor = "purple";
    } else if (temp >= 10 && temp < 20) {
      body.style.backgroundColor = "lightblue";
      outer.style.backgroundColor = "lime";
    } else if (temp >= 30) {
      body.style.backgroundColor = "crimson";
      outer.style.backgroundColor = "blue";
    } else if (temp < 10) {
      body.style.backgroundColor = "gray";
      outer.style.backgroundColor = "yellow";
    }
  }
});


/* Ball Interaction */

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container");

  for (let i = 0; i < 8; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    container.appendChild(ball);

/* Ball Position */
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let vx = (Math.random() - 0.6) * 10;
    let vy = (Math.random() - 0.9) * 10;

    function update() {
      x += vx;
      y += vy;

      if (x < 0 || x + ball.offsetWidth > window.innerWidth) {
        vx *= -1;
      }
      if (y < 0 || y + ball.offsetHeight > window.innerHeight) {
        vy *= -1;
      }

      ball.style.left = x + "px";
      ball.style.top = y + "px";
    }

    setInterval(update, 1700 / 90);
  }


  // Function to handle mouse interaction with balls
  container.addEventListener("mousemove", function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const balls = document.querySelectorAll(".ball");
    balls.forEach(ball => {
      const ballX = parseFloat(ball.style.left) + ball.offsetWidth / 2;
      const ballY = parseFloat(ball.style.top) + ball.offsetHeight / 2;
      const distanceX = mouseX - ballX;
      const distanceY = mouseY - ballY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      // React to mouse proximity
      if (distance < 200) {
        ball.style.backgroundColor = "#e74c3c";
      } else {
        ball.style.backgroundColor = "#da9ff5";
      }
    });
  });
});

function redirectToYouTube() {
  var typedText = document.getElementById('inputText').value;
  if (typedText.toLowerCase() === "yes i do") {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
}


