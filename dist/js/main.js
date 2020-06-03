'use strict';

import { Deck } from "./deck.class.js";
import { Timer } from "./timer.class.js";
import { Game } from "./game.class.js";

const gameTimer = new Timer(60);
const newDeck = new Deck(8, 16);
const newGame = new Game();
newDeck.buildBoard();

// $(document).ready(() => {
//   let start = document.getElementById('start-menu');
//   start.click();
// })


//will be moved to game class
const startMenu = document.getElementById('start-menu');
const cards = document.getElementsByClassName('card-title');
const scoreDisplay = document.getElementById('score-display');
const gameTable = document.getElementById('outer-board');

gameTable.addEventListener('click', function () {

  //start menu
  if (event.target === startMenu) {
    newGame.init();
  }

  // // card clicks 
  // if(event.target.classList.contains('click')) {

  //   if(!gameTimer.isRunning) {
  //     gameTimer.run();
  //   }
  //   newGame.cardClick(event.target);
  // }

  // //timer stop
  // if(event.target === timerStop) {
  //   gameTimer.stop();
  // }
}, false);

//to display score table
//gameBoard.classList.add('hidden');
//scoreDisplay.classList.remove('closed');