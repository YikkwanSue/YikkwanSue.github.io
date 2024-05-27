document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("ball-container");
  const containerRect = container.getBoundingClientRect(); // Get position and size of the container

  // Create and append balls to the container
  for (let i = 0; i < 6; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    container.appendChild(ball);

    // Set initial position within the container
    let x = containerRect.left + Math.random() * containerRect.width;
    let y = containerRect.top + Math.random() * containerRect.height;

    // Set initial velocity for each ball
    let vx = (Math.random() - 0.5) * 5;
    let vy = (Math.random() - 0.5) * 5;

    // Function to update ball's position
    function update() {
      // Update position
      x += vx;
      y += vy;

      // Bounce off container walls
      if (x <= containerRect.left || x + ball.offsetWidth >= containerRect.right) {
        vx *= -1;
      }
      if (y <= containerRect.top || y + ball.offsetHeight >= containerRect.bottom) {
        vy *= -1;
      }

      // Update ball's position
      ball.style.left = x + "px";
      ball.style.top = y + "px";
    }

    // Update position periodically
    setInterval(update, 1000 / 60);

    // Add mouseover event listener to each ball
    ball.addEventListener("mouseover", function() {
      ball.style.backgroundColor = "#9e8880"; // Change color on mouseover
    });

    // Add mouseout event listener to each ball to revert to original color
    ball.addEventListener("mouseout", function() {
      ball.style.backgroundColor = "#e2cac0"; // Revert to original color on mouseout
    });
  }
});
