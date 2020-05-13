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
const startMenu = document.getElementById('start-menu');
gameTable.addEventListener('click', function () {
  $(gameBoard).removeClass('closed');
  $(startMenu).attr("hidden", true);
}, false);