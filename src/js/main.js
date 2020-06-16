'use strict';

import { Game } from "./game.class.js";

export let newGame = new Game();
//newDeck.buildBoard();

const startMenu = document.getElementById('start-menu');
const returnToMenu = document.getElementById('return-option');
const gameTable = document.getElementById('outer-board');
const aboutPage = document.getElementById('about-page');
const aboutButton = document.getElementById('about-button');
const coverMenu = document.getElementById('cover-menu');
const returnFromAbout = document.getElementById('return-from-about');

//game table evenet listener (start menu)
gameTable.addEventListener('click', function () {
  
  //start game
  if(event.target === startMenu) {
    newGame.start();
  }
  //about page
  if(event.target === aboutButton) {
    //reveal game board
    $(aboutPage).removeClass('closed');
    $(coverMenu).attr('hidden', true);
  }
  //return to main menu
  if(event.target === returnToMenu || event.target === returnFromAbout) {
    //need better solution here
    location.reload();
  }

}, false);
