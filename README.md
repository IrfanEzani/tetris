# Tetris Game
<img width="926" alt="tetris" src="https://github.com/IrfanEzani/tetris/assets/59435235/89870aec-ff3b-40d1-8468-3e95a1b7146c">

## Overview
This project is a web-based version of the classic Tetris game. Players manipulate shapes composed of four square blocks that fall into a playing field. The objective is to create horizontal lines of blocks without gaps, which disappear and score points. The game speeds up as the player scores higher.

## Files
- `index.html`: Main entry point for the game.
- `app.js`: Contains the core game logic.
- `style.css`: Stylesheet for the game's appearance.

## Game Logic Implementation

### Initialization
The game begins by setting up the main grid and selecting DOM elements for the score, line score, and the start button. A fixed width for the grid is defined, and an array for Tetromino colors is initialized.

### Tetromino Definitions
Five Tetromino shapes (L, Z, T, O, I) are defined, each with multiple rotations. These shapes are represented as arrays of grid index positions to simulate their geometry.

### Game Controls and Movement
- **Keyboard Controls**: The game listens for key presses and maps them to Tetromino movements (left, right, down) and rotation.
- **Movement Functions**: Functions to move Tetrominoes in different directions are implemented. These include lateral movements and downward acceleration.
- **Rotation**: Tetrominoes can be rotated, changing their orientation on the grid.

### Drawing and Collision
- **Drawing Tetrominoes**: The game visually represents Tetrominoes on the grid by adding CSS classes and styles.
- **Collision Detection**: The script detects when a Tetromino has landed (either by hitting the bottom of the grid or another Tetromino) and then fixes it in place.

### Line Completion and Scoring
- **Line Completion**: The game checks for complete lines across the grid. Completed lines are removed, increasing the player's score.
- **Score Update**: The score and line count are updated whenever lines are completed.

### Next Tetromino Display
A mini-grid displays the shape of the next Tetromino, giving the player a preview of what is coming.

### Game Start and Pause
The start button begins the game and also serves to pause the game. It controls the timing of Tetromino descent.

### Game Over Conditions
The game ends when a new Tetromino cannot enter the play area, typically when blocks reach the top of the grid.

### Overall Gameplay
The game continuously cycles through generating new Tetrominoes, managing player input, updating the grid, and checking for completed lines. It speeds up and becomes more challenging as the player progresses, offering a dynamic and engaging Tetris experience.

## Setup and Play
1. Download the project files or clone the repository.
2. Open `index.html` in a web browser to start the game.
3. Use keyboard controls to move and rotate the Tetris blocks.
