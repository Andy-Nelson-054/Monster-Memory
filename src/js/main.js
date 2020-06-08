'use strict';

import { Game } from "./game.class.js";

export let newGame = new Game();
//newDeck.buildBoard();

const startMenu = document.getElementById('start-menu');
const returnToMenu = document.getElementById('return-option');
const gameTable = document.getElementById('outer-board');

//game table evenet listener (start menu)
gameTable.addEventListener('click', function () {
  
  //start game
  if(event.target === startMenu) {
    newGame.start();
  }
  //return to main menu
  if(event.target === returnToMenu) {
    //need better solution here
    location.reload();
  }

}, false);
