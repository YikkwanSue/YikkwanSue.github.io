document.addEventListener("DOMContentLoaded", function() {
    const songs = [
      "Yesterday",
      "Bohemian Rhapsody",
      "Imagine",
      "Let It Be",
      "Hotel California",
      "Stairway to Heaven",
      "Hey Jude",
      "Smells Like Teen Spirit",
      "Like a Rolling Stone",
      "Sweet Child o' Mine"
    ];
    const gameBoard = document.getElementById('game-board');
    let currentSong = "";
    let guessedLetters = [];
  
    // Function to start a new game
    function newGame() {
      currentSong = getRandomSong();
      guessedLetters = [];
      displaySong();
    }
  
    // Function to get a random song from the list
    function getRandomSong() {
      return songs[Math.floor(Math.random() * songs.length)].toUpperCase();
    }
  
    // Function to display the blanks for the current song
    function displaySong() {
      gameBoard.innerHTML = "";
      for (let letter of currentSong) {
        if (letter === " ") {
          gameBoard.innerHTML += "<div class='blank'>&nbsp;</div>";
        } else if (guessedLetters.includes(letter)) {
          gameBoard.innerHTML += `<div class='blank'>${letter}</div>`;
        } else {
          gameBoard.innerHTML += "<div class='blank'></div>";
        }
      }
      gameBoard.innerHTML += "<br><input type='text' id='guessInput' placeholder='Enter a letter'>";
      document.getElementById("guessInput").addEventListener("keyup", checkGuess);
    }
  
    // Function to check the player's guess
    function checkGuess(event) {
      const guess = event.target.value.toUpperCase();
      if (guess && /[A-Z]/.test(guess) && !guessedLetters.includes(guess)) {
        guessedLetters.push(guess);
        displaySong();
        if (!currentSong.includes(guess)) {
          alert(`Oops! "${guess}" is not in the song title.`);
        }
      }
      event.target.value = "";
      if (guessedLetters.length === currentSong.replace(/ /g, "").length) {
        setTimeout(() => {
          if (confirm(`Congratulations! You guessed the song "${currentSong}"!\n\nDo you want to play again?`)) {
            newGame();
          }
        }, 500);
      }
    }
  
    // Function to restart the game
    window.restartGame = function() {
      newGame();
    };
  
    // Start the game
    newGame();
  });
  