import { Deck } from "./deck.class.js";

const newDeck = new Deck(8, 16);
newDeck.buildBoard();

//will be moved to game class
const gameTable = document.getElementById('outer-board');
const gameBoard = document.getElementById('inner-board');
const startMenu = document.getElementById('start-menu');
gameTable.addEventListener('click', function () {
  $(gameBoard).removeClass('closed');
  $(startMenu).attr("hidden", true);
}, false);