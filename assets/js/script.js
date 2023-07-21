// DOM variables
const menuScreen = document.getElementById('menu-screen');
const gameScreen = document.getElementById('game-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const modalText = document.querySelector('.modal-result');
const gameGrid = document.querySelector('.game-grid');
const scoreElement = document.querySelector('.score');
const difficultyBtnEasy = document.getElementById('easy-button');
const difficultyBtnHard = document.getElementById('hard-button');
const closeBtn = document.querySelector('.close');

// Game variables
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let width = 10;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let interval = 0;
let isGameOver = false;

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Event Listener for arrow key presses
  document.addEventListener('keydown', (event) => keyControlFunction(event));

displayGameScreen()



  // Create the new game grid
  createGrid();

  // Event listener for difficulty buttons
  difficultyBtnEasy.addEventListener('click', () => {
    intervalTime = 1000;
    startGame('easy');
  });

  difficultyBtnHard.addEventListener('click', () => {
    intervalTime = 500;
    startGame('hard');
  });

  // Generate initial apple
  generateApple();

  // Start the game loop
  interval = setInterval(move, intervalTime);
});

/**
 * Function to start the game based on the chosen difficulty
 */
function startGame(difficulty) {
  // Hide the menu screen and show the game screen
  menuScreen.style.display = 'none';
  gameScreen.style.display = 'flex';
  gameOverScreen.style.display = 'none';

  if (difficulty === 'easy') {
    // Easy game
    console.log('Starting easy game');
  } else if (difficulty === 'hard') {
    // Hard game
    console.log('Starting hard game');
  }
}

/**
 * Function to create the game grid
 */
function createGrid() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div');
    square.classList.add('box');
    gameGrid.appendChild(square);
    squares.push(square);
  }
}

/**
 * Function that generates a new apple on the grid
 */
function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains('snake'));

  squares[appleIndex].classList.add('apple');
}

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
    console.log("Game Over");
    clearInterval(interval);
    modalText.textContent = `Your score: ${score}`;
    gameOverScreen.style.display = 'block';
    return;
  }

  // Remove the tail of the snake
  const tail = currentSnake.pop();
  squares[tail].classList.remove('snake');

  // Add a new head to the snake
  currentSnake.unshift(currentSnake[0] + direction);

  // Check if the snake eats the apple
  if (squares[currentSnake[0]].classList.contains('apple')) {
    // Increase the score
    score++;
    scoreElement.textContent = 'Score: ' + score;

    // Remove the apple and generate a new one
    squares[currentSnake[0]].classList.remove('apple');
    generateApple();

    // Grow the snake by adding the tail back
    currentSnake.push(tail);
    squares[tail].classList.add('snake');
  }

  // Move the snake visually on the grid
  squares[currentSnake[0]].classList.add('snake');
}

/**
 * Clear game screen and display the score to user
 */ 
function exitGame() {
  console.log("Exit Game");
  gameScreen.style.display = 'none'; // Hide the game screen
  gameOverScreen.style.display = 'flex'; // Show the game over screen
  modalText.textContent = `You scored: ${score}`;
  return gameOver;
}

// Close modal and return to home screen 
closeBtn.addEventListener('click', () => {
  console.log("Close button clicked");
  closeModal(gameOverScreen);
  displayGameScreen();
});

/**
 * Function to close the game over modal
 */
function closeModal(modal) {
  modal.style.display = 'none';
}

/**
 * Function to display the menu screen after closing the game over modal
 */
const displayGameScreen = () => {
  menuScreen.style.display = 'flex';
  gameScreen.style.display = 'none';
}



/**
 * Event listener for arrow key presses
 */
function keyControlFunction(event) {
  console.log(event.key);
  switch (event.key) {
    case 'ArrowUp':
      if (direction !== width) direction = -width;
      break;
    case 'ArrowDown':
      if (direction !== -width) direction = width;
      break;
    case 'ArrowLeft':
      if (direction !== 1) direction = -1;
      break;
    case 'ArrowRight':
      if (direction !== -1) direction = 1;
      break;
  }
}
