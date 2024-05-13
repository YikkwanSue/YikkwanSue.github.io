document.addEventListener("DOMContentLoaded", function() {
    const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const keyDisplay = document.getElementById("key-display");
    const guessInput = document.getElementById("guess-input");
    const timerDisplay = document.getElementById("timer");
    let timerInterval;
    let currentKey;
    let timeLeft = 5;
  
    // Function to start the game
    function startGame() {
      guessInput.value = "";
      timeLeft = 5;
      displayNewKey();
      timerInterval = setInterval(updateTimer, 1000);
    }
  
    // Function to display a new key
    function displayNewKey() {
      currentKey = keys[Math.floor(Math.random() * keys.length)];
      keyDisplay.textContent = currentKey;
    }
  
    // Function to update the timer
    function updateTimer() {
      if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
      } else {
        clearInterval(timerInterval);
        alert("Time's up! You lose.");
        startGame();
      }
    }
  
    // Function to check if the pressed key is correct
    window.checkKey = function(event) {
      const pressedKey = event.key.toUpperCase();
      if (pressedKey === currentKey) {
        clearInterval(timerInterval);
        alert("Congratulations! You pressed the correct key.");
        startGame();
      }
    }
  
    // Start the game when the page loads
    startGame();
  });
  