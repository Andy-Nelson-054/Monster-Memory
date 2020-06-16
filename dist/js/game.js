'use strict';

import { Deck } from "./deck.class.js";
import { Timer } from "./timer.class.js";
import { Game } from "./game.class.js";

const gameTimer = new Timer(60);
const newDeck = new Deck(8, 16);
const newGame = new Game();
newDeck.buildBoard();

//will be moved to game class
const gameTable = document.getElementById('outer-board');
const gameBoard = document.getElementById('inner-board');
const coverMenu = document.getElementById('cover-menu');
const startMenu = document.getElementById('start-menu');
const timerStop = document.getElementById('timer-stop');
const controlPanel = document.getElementById('control-panel');
const cards = document.getElementsByClassName('card-title');
const scoreDisplay = document.getElementById('score-display');

gameTable.addEventListener('click', function () {

  //start menu
  if (event.target === startMenu) {
    $(gameBoard).removeClass('closed');
    $(coverMenu).attr('hidden', true);
  }

  // card clicks 
  if (event.target.classList.contains('click')) {

    if (!gameTimer.isRunning) {
      gameTimer.run();
    }
    newGame.cardClick(event.target);
  }

  //timer stop
  if (event.target === timerStop) {
    gameTimer.stop();
  }
}, false);

//to display score table
//gameBoard.classList.add('hidden');
//scoreDisplay.classList.remove('closed');