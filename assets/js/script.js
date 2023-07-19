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


/**
 * Function that generate a new apple on the grid
 */
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


  // Function to create the game grid
  function createGrid() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.classList.add('box');
      gameGrid.appendChild(square);
      squares.push(square);
    }
  }

// Set the initial position of the snake
currentSnake.forEach((index) => squares[index].classList.add("snake"));

/**
 * Function that generate a new apple on the grid
 */
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

/**
 * Function to move the snake
 */
function move() {
  // Check for collisions with the boundaries or itself
  if (
    (currentSnake[0] % width === 0 && direction === -1) || // Hit left wall
    (currentSnake[0] % width === width - 1 && direction === 1) || // Hit right wall
    (currentSnake[0] - width < 0 && direction === -width) || // Hit top wall
    (currentSnake[0] + width >= width * width && direction === width) || // Hit bottom wall
    squares[currentSnake[0] + direction].classList.contains('snake')
  ) {
    clearInterval(interval);
    modalText.textContent = `Your score: ${score}`;
    gameOverScreen.style.display = 'block';
    return;
  }

  // Remove the last element of the snake array
  const tail = currentSnake.pop();
  squares[tail].classList.remove('snake');

  // Add a new head to the snake array based on the direction
  currentSnake.unshift(currentSnake[0] + direction);
  squares[currentSnake[0]].classList.add('snake');

  // Check if the snake has eaten the apple
  if (currentSnake[0] === appleIndex) {
    squares[appleIndex].classList.remove('apple');
    currentSnake.push(tail); 
    score += 10;
    scoreElement.textContent = `Score: ${score}`;
    generateApple();
  }
}




});

 