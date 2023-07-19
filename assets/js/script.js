// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Dom variables
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

  // Game variables
  let squares = [];
  let currentSnake = [2, 1, 0];
  let direction = 1;
  let width = 10;
  let appleIndex = 0;
  let score = 0;
  let intervalTime = 1000;
  let interval = 0;

  // Event listener for difficulty buttons
  difficultyBtnEasy.addEventListener('click', () => {
    intervalTime = 1000;
    startGame();
  });
  
  difficultyBtnHard.addEventListener('click', () => {
    intervalTime = 500;
    startGame();
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
  
 // Clear previous game grid
 gameGrid.innerHTML = "";

 // Create the new game grid
 createGrid();

 // Reset score display
 scoreElement.textContent = "Score: 0";

 // Generate initial apple
 generateApple();

 // Start the game loop
 interval = setInterval(move, intervalTime);








  // Function to create the game grid
  function createGrid() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.classList.add('box');
      gameGrid.appendChild(square);
      squares.push(square);
    }
  }
  createGrid();

// Generate a new apple on the grid
 function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains('snake'));
  let isAppleOver = false;
  for (let i = 0; i < currentSnake.length; i++) {
    if (currentSnake[i] == appleIndex) {
      isAppleOver = true;
    }
  }
  if (isAppleOver) {
    generateApple();
  }
  squares[appleIndex].classList.add('apple');
}
generateApple();












});

 