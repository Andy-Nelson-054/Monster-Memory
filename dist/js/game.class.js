//Manage scoring, cards, and end game

'use strict';

import { Deck } from "./deck.class.js";
import { Timer } from "./timer.class.js";

export class Game {
    constructor() {
        //can set flippedCount and flippedMax later as difficulty options
        this.flippedCount = 0;
        this.flippedMax = 2;
        this.flippedCards = [this.flippedMax];
        //this.flippedCards = [this.flippedMax];
        this.cards = document.getElementsByClassName('card-title');
        this.score = 0;
    }
    /*
    * @desc getter function to randomly selec image from /images directory to be
     displayed on card backs
    * @param N/A
    * @return string - filepath to selected image
    */
    cardClick(clickedCard) {
        this.flippedCount++;
        this.cardFlip();
        this.checkMatch(clickedCard);
    }

    /*
    * @desc getter function to randomly selec image from /images directory to be
     displayed on card backs
    * @param N/A
    * @return string - filepath to selected image
    */
    cardFlip() {
        if (this.flippedCount === this.flippedMax) {
            //flip cards after half a second
            setTimeout(() => {
                for (let card of this.cards) {
                    card.click();
                    this.flippedCount = 0;
                }
            }, 500);
        }
    }

    //update score, display it on screen, remove those cards from screen 
    //(remove a class/ add another)
    checkMatch(clickedCard) {
        let cardsMatch = false;
        let cardFace = clickedCard.querySelector('.card-face').getAttribute('src');
        let scoreBoard = document.getElementById('game-score');
        //console.log(`should be empty: ${this.flippedCards}`);
        this.flippedCards[this.flippedCount - 1] = cardFace;
        //console.log(this.flippedCards);
        if (this.flippedCount === this.flippedMax) {
            for (let i = 0; i < this.flippedCards.length; i++) {
                if (this.flippedCards[0] === this.flippedCards[i]) {
                    cardsMatch = true;
                } else cardsMatch = false;
            }
            console.log(cardsMatch);
            if (cardsMatch) {
                this.score++;
            }
            console.log(`score: ${this.score}`);
            scoreBoard.innerHTML = this.score;
        }
    }

}