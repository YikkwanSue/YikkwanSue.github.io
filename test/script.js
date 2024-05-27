document.getElementById("inputText").addEventListener("input", function() {
    var inputValue = this.value.trim().toLowerCase();
    var startBtn = document.getElementById("startBtn");
    if (inputValue === "yeah!") {
      startBtn.removeAttribute("disabled");
    } else {
      startBtn.setAttribute("disabled", "disabled");
    }
  });
  
  document.getElementById("startBtn").addEventListener("click", function() {
    window.location.href = "content";
  });

   /* Ball Interaction */

  document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
  
    for (let i = 0; i < 10; i++) {
      const ball = document.createElement("div");
      ball.classList.add("ball");
      container.appendChild(ball);
  
  /* Ball Position */
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let vx = (Math.random() - 0.5) * 10;
      let vy = (Math.random() - 0.5) * 10;
  
      /* Function to update ball's position */
      function update() {
        // Update position
        x += vx;
        y += vy;
  
        /* Bounce off walls */
        if (x < 0 || x + ball.offsetWidth > window.innerWidth) {
          vx *= -1;
        }
        if (y < 0 || y + ball.offsetHeight > window.innerHeight) {
          vy *= -1;
        }
  
        ball.style.left = x + "px";
        ball.style.top = y + "px";
      }
  
      setInterval(update, 1200 / 70);
    }
  

    // Function to handle mouse interaction with balls
    container.addEventListener("mousemove", function(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      // Loop through all balls and calculate distance from mouse
      const balls = document.querySelectorAll(".ball");
      balls.forEach(ball => {
        const ballX = parseFloat(ball.style.left) + ball.offsetWidth / 2;
        const ballY = parseFloat(ball.style.top) + ball.offsetHeight / 2;
        const distanceX = mouseX - ballX;
        const distanceY = mouseY - ballY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  
        // React to mouse proximity
        if (distance < 100) {
          ball.style.backgroundColor = "#e74c3c";
        } else {
          ball.style.backgroundColor = "#97eac2";
        }
      });
    });
  });