document.addEventListener("DOMContentLoaded", function() {
  const balls = document.querySelectorAll('.ball');

  balls.forEach(ball => {
      ball.addEventListener('click', function() {
          ball.style.backgroundColor = '#9e8880';
      });
  });
});
