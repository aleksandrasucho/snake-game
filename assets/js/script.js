// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // game variables
    const difficultyBtnEasy = document.getElementById('easy-button');
    const difficultyBtnHard = document.getElementById('hard-button');
    const gameScreen = document.getElementById('game-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
    const modalText = document.getElementById('modal-result');
    const gameGrid = document.querySelector(".game-grid");
    const scoreElement = document.querySelector(".score");
    const highScoreElement = document.querySelector(".high-score");
  
  });
  
  const gridSize = 20;
  const gridWidth = gameScreen.offsetWidth / gridSize;
  const gridHeight = gameScreen.offsetHeight / gridSize;
  
  let snake = {
    head: { x: 0, y: 0 },
    tail: [],
    direction: "right",
  };
 // Click event listeners to the difficulty buttons
 easyButton.addEventListener("click", function () {
    startGame("easy");
  });

  hardButton.addEventListener("click", function () {
    startGame("hard");
  });