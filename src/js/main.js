'use strict';

import { Game } from "./game.class.js";

const newGame = new Game();
//newDeck.buildBoard();

const startMenu = document.getElementById('start-menu');
const gameTable = document.getElementById('outer-board');

//game table evenet listener (start menu)
gameTable.addEventListener('click', function () {
  
  //start game
  if(event.target === startMenu) {
    newGame.start();
  }
  

}, false);
