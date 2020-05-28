//Manage scoring, cards, and end game

'use strict';

import { Deck } from "./deck.class.js";
import { Timer } from "./timer.class.js";

export class Game {
    constructor() {
        this.cardsFlipped = 0;
        this.flippedMax = 2;
        this.cards = document.getElementsByClassName('card-title');
    }

    flipBack() {
        for (let card of this.cards) {
            card.click();
        }
    }

}