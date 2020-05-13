'use strict';

import { Deck } from "./deck.class.js";
import { Timer } from "./timer.class.js";

const newDeck = new Deck(8, 16);
newDeck.buildBoard();

const newTimer = new Timer(10);
console.log("timeCount: " + newTimer.timeCount);
newTimer.timeCount -= 5;
console.log("timeCount - 5: " + newTimer.timeCount);
newTimer.reset();
console.log("reset: " + newTimer.timeCount);
newTimer.countDown();

//will be moved to game class
const gameTable = document.getElementById('outer-board');
const gameBoard = document.getElementById('inner-board');
const coverMenu = document.getElementById('cover-menu');
const startMenu = document.getElementById('start-menu');
const timerStop = document.getElementById('timer-stop');
const controlPanel = document.getElementById('control-panel');
const gameTimer = document.getElementById('game-timer');

gameTable.addEventListener('click', function () {
  
  //start menu
  if(event.target === startMenu) {
    $(gameBoard).removeClass('closed');
    $(coverMenu).attr('hidden', true);
    $(controlPanel).attr('hidden', false);
  }
  //timer stop
  if(event.target === timerStop) {
    newTimer.stop();
  }
}, false);