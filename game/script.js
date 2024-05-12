document.addEventListener("DOMContentLoaded", function() {
    const notes = ['♫', '♪', '♬', '♩', '♭', '♯', '𝄞', '𝄢'];
    const gameBoard = document.getElementById('game-board');
    let flippedCard = null;
    let canFlip = true;
  
    // Function to create game board
    function createGameBoard() {
      const shuffledNotes = [...notes, ...notes].sort(() => Math.random() - 0.5);
      shuffledNotes.forEach(note => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = note;
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
      });
    }
  
    // Function to flip card
    function flipCard(card) {
      if (!canFlip || card === flippedCard) return;
      card.classList.add('flipped');
      if (!flippedCard) {
        flippedCard = card;
      } else {
        canFlip = false;
        setTimeout(() => {
          if (flippedCard.textContent === card.textContent) {
            flippedCard.style.visibility = 'hidden';
            card.style.visibility = 'hidden';
          } else {
            flippedCard.classList.remove('flipped');
            card.classList.remove('flipped');
          }
          flippedCard = null;
          canFlip = true;
        }, 1000);
      }
    }
  
    // Function to restart game
    window.restartGame = function() {
      gameBoard.innerHTML = '';
      createGameBoard();
    };
  
    // Initialize the game
    createGameBoard();
  });
  