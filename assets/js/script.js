
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
  const gameControls = document.getElementById('controls')
  const difficultyBtnEasy = document.getElementById('easy-button');
  const difficultyBtnHard = document.getElementById('hard-button');
  const gameContainer = document.querySelector(".game-container");
  const closeBtn = document.querySelector('.close');



  document.getElementById("btn-up").addEventListener("click", gameControlsClicked);
  document.getElementById("btn-down").addEventListener("click", gameControlsClicked);
  document.getElementById("btn-left").addEventListener("click", gameControlsClicked);
  document.getElementById("btn-right").addEventListener("click", gameControlsClicked);


  // Game variables
  let squares = [];
  let currentSnake = [2, 1, 0];
  let direction = 1;
  let width = 10;
  let appleIndex = 0;
  let score = 0;
  let intervalTime = 1000;
  let interval = 0;
  
  // Game state
  let isGameOver = false;
  let intervalId = null;

  // Event listener for difficulty buttons
  difficultyBtnEasy.addEventListener('click', () => {
    intervalTime = 1000;
    startGame();
  });
  
  difficultyBtnHard.addEventListener('click', () => {
    intervalTime = 500;
    startGame();
  });
  
/**
 * Function to start the game based on the chosen difficulty
 */
  function startGame(difficulty) {
    // Hide the menu screen and show the game screen
    menuScreen.style.display = "none";
    gameScreen.style.display = "flex";
    gameOverScreen.style.display = "none";
    

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
    exitGame();
    return clearInterval(timerId);
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
   scoreElement.textContent = "Score: " + score;

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
  gameScreen.style.display = 'flex';
  gameOverScreen.style.display = 'block';
  modalText.textContent = `You scored: ${score}`;
  return gameOver;
}


/// Close modal and return to home screen 
closeBtn.addEventListener('click', () => {
  closeModal(gameOverScreen);
  displaygameScreen();
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
function displaygameScreen() {
  menuScreen.style.display = 'flex';
  gameScreen.style.display = 'none';
}





// sets touch control directions 
function gameControlsClicked() {
  if (this.getAttribute("id") === "btn-left") {
    direction = -1;
  }
  if (this.getAttribute("id") === "btn-right") {
    direction = 1;
  }
  if (this.getAttribute("id") === "btn-up") {
    direction = -width;
  }
  if (this.getAttribute("id") === "btn-down") {
    direction = +width;
  }

}







// Event listener for arrow key presses
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      if (direction !== width) direction = -width;
      break;
    case "ArrowDown":
      if (direction !== -width) direction = width;
      break;
    case "ArrowLeft":
      if (direction !== 1) direction = -1;
      break;
    case "ArrowRight":
      if (direction !== -1) direction = 1;
      break;
  }
});

});

 