<h1 align="center">Snake Game - Project Portfolio 2</h1>

---

# *Snake Game*

A snake game is a classic game in which the player controls a snake that moves around a playing field or grid. The objective of the game is to eat food items that appear randomly on the screen, which causes the snake to grow longer. 

The site can be accessed by this [link]()

![Responsive Mockup](documentation/responsive-snake-min.png)

---

## User Stories

### First Time Visitor Goals:

* As a First Time Visitor, I want to  familiarize myself with the game's objective, which is usually to control the snake and eat food to grow longer. Make sure I understand the basic rules and what constitutes winning or losing.
* As a First Time Visitor, I want to learn how to control the snake's movements.
* As a First Time Visitor, I want to focus on eating the food items that appear on the screen. Each time the snake consumes food, it grows longer.
* As a First Time Visitor, I want to develop strategies to maximize the score.

### Returning Visitor Goals:

* As a Returning Visitor, I want to enjoy the game, so I can play it regularly.
* As a Returning Visitor, I want to challenge myself to surpass my previous high score. Focus on improving my strategies, reaction time, and ability to navigate the snake efficiently.
* As a Returning Visitor, I want the option of increased difficulty so I can challenge myself.

### Frequent Visitor Goals:
* As a Frequent User, I want to take my skills to the next level by mastering advanced techniques and maneuvers. 

## Features

+ ### Menu Page

    - Represent: 

        * The main goal of the game: controlling the snake to eat food and grow.
        * Instructions on how to play, including the controls and game rules.
        * Difficulty selection to start the game.

    ![Menu Page](documentation/snake-main-page-min.png)



    - The Menu screen has the following elements:

        1. Game title and snake logo.

        1. Instructions on how to play.

        1. Difficulty selection buttons (Easy and Hard) that also start the game.

     - It also has a footer which contains social media links that open in a new tab.
     ![Footer](documentation/snake-footer-min.png)

     ---


+ ### Game Screen
    The Game Screen is where all the action takes place. It provides the gameplay area where the player controls the snake to eat food and grow. It is the heart of the game, and the player spends most of their time here.

     ![Game Screen Page](documentation/snake-game-screen-min.png)

    - Elements of the Game Screen:
        
    
        1. Score Display:

             At the top of the Game Screen, there is a score box that keeps track of the player's current score. The score increases each time the snake successfully consumes a piece of food. Players aim to achieve higher scores with each playthrough.

             ![Score](documentation/snake-score-min.png)

        1. Play or Pause Control:

            This feature allows the player to manage the game. It provides three options:
            
            * Pause: When the player clicks the Pause icon, the game pauses, and the snake stops moving. This allows the player to take a break or assess the game situation.
            
            * Play (Hidden): Once the game is paused, the Pause icon is replaced with a Play icon. Clicking the Play icon resumes the game, and the snake continues its movement.

            * Stop: Clicking the Stop icon returns the player to the Game Over Screen.

            ![Play, Pause, Stop Controls ](documentation/play-or-pause-min.png)

        1. Game Grid:

            The Game Grid is a rectangular area where the snake and food are displayed. It is divided into squares, representing each cell on the grid. The snake and food move within this grid, and the player must navigate the snake across the cells to eat the food.

            ![Game Grid](documentation/snake-grid-min.png)

        1. On-Screen Controls:

            For players using desktop devices, the Game Screen provides on-screen controls in the form of arrow buttons. These arrow buttons (up, down, left, right) allow the player to change the snake's direction easily. Players can click these buttons to guide the snake around the grid.

            ![On-Screen Controls](documentation/snake-controls-min.png)

        1. Game Over Screen:

            Although the Game Over Screen is a separate element, it is an essential part of the Game Screen. When the game ends, whether due to the snake colliding with a barrier or itself, the Game Over Screen is triggered. It displays a modal window with a "Game Over!" message and the player's final score.

            ![Game Over Screen](documentation/snake-game-over-min.png)

