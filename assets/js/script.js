// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // game variables
    const menuScreen = document.getElementById('menu-screen');
    const gameScreen = document.getElementById('game-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
    const modalText = document.getElementById('modal-result');
    const gameGrid = document.querySelector(".game-grid");
    const scoreElement = document.querySelector(".score");
    const highScoreElement = document.querySelector(".high-score");
  
    // Click event listeners to the difficulty buttons
    const difficultyBtnEasy = document.getElementById('easy-button');
    const difficultyBtnHard = document.getElementById('hard-button');
  
    // Click event listeners to the difficulty buttons
    difficultyBtnEasy.addEventListener("click", function () {
      startGame("easy");
    });
  
    difficultyBtnHard.addEventListener("click", function () {
      startGame("hard");
    });
  
    // Rest of the code...
  
    // Function to start the game based on the chosen difficulty
    function startGame(difficulty) {
      // Hide the menu screen and show the game screen
      menuScreen.style.display = "none";
      gameScreen.style.display = "block";
  
      // Add your game initialization logic here based on the chosen difficulty
      if (difficulty === "easy") {
        // Easy game logic
        console.log("Starting easy game...");
      } else if (difficulty === "hard") {
        // Hard game logic
        console.log("Starting hard game...");
      }
    }
  });
  
  const gridSize = 20;
  let snake = {
    head: { x: 0, y: 0 },
    tail: [],
    direction: "right",
  };
  
  // Calculate gridWidth and gridHeight after DOMContentLoaded event
  let gridWidth, gridHeight;
  window.addEventListener("DOMContentLoaded", function () {
    const gameScreen = document.getElementById('game-screen');
    gridWidth = gameScreen.offsetWidth / gridSize;
    gridHeight = gameScreen.offsetHeight / gridSize;
  });
  