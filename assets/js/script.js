// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // dom variables
  const menuScreen = document.getElementById('menu-screen');
  const gameScreen = document.getElementById('game-screen');
  const gameOverScreen = document.getElementById('game-over-screen');
  const modalText = document.getElementById('modal-result');
  const gameGrid = document.querySelector(".game-grid");
  const scoreElement = document.querySelector(".score");
  const highScoreElement = document.querySelector(".high-score");
  const gameControls = document.getElementById('controls');
  const difficultyBtnEasy = document.getElementById('easy-button');
  const difficultyBtnHard = document.getElementById('hard-button');

  const gridSize = 20; 
  const gridWidth = gameScreen.offsetWidth / gridSize;
  const gridHeight = gameScreen.offsetHeight / gridSize;

  let Snake = [2, 1, 0];
  let direction = 1;
  const width = 10;
  let appleIndex = 0;

  let currentIndex = 0;
  let speed = 0.8;
  let intervalTime = 1000;
  let interval = 0;

  const food = {
    x: Math.floor(Math.random() * gridWidth),
    y: Math.floor(Math.random() * gridHeight),
  };

  let score = 0;
  let highScore = 0;

  difficultyBtnEasy.addEventListener("click", function () {
    startGame("easy");
  });

  difficultyBtnHard.addEventListener("click", function () {
    startGame("hard");
  });

  // Function to start the game based on the chosen difficulty
  function startGame(difficulty) {
    // Hide the menu screen and show the game screen
    menuScreen.style.display = "none";
    gameScreen.style.display = "block";
    gameContainer.style.display = "flex";

    if (difficulty === "easy") {
      // Easy game 
      console.log("Starting easy game");
    } else if (difficulty === "hard") {
      // Hard game 
      console.log("Starting hard game");
    }
  }

  // touch controls 
  for (let i = 0; i < gameControls.length; i++) {
    gameControls[i].addEventListener('click', gameControlsClicked);
  }

  function gameControlsClicked(event) {
    // Handle touch control events here
  }
});