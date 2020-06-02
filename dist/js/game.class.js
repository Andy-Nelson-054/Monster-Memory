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
        //clickedCard.classList.indexOf('card-title') ? alert('Double') : alert('Single');
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
    // checkMatch(clickedCard) {
    //     let cardsMatch = false;

    //     let cardFace = clickedCard.querySelector('.card-face')
    //         .getAttribute('src');

    //         let scoreBoard = document.getElementById('game-score');

    //     this.flippedCards[this.flippedCount - 1] = cardFace;
    //     if(this.flippedCount === this.flippedMax) {
    //         for(let i = 0; i < this.flippedCards.length; i++) {
    //             if (this.flippedCards[0] === this.flippedCards[i]) {
    //                 cardsMatch = true;
    //             } else cardsMatch = false;
    //         }
    //         //move to its own method?
    //         if(cardsMatch) {
    //             this.score ++;
    //             clickedCard.classList.add('fade-out');
    //         }
    //         scoreBoard.innerHTML = this.score;
    //     }
    // }

    //refactored
    checkMatch(clickedCard) {
        let cardsMatch = false;
        let cardFace = clickedCard.querySelector('.card-face').getAttribute('src');
        let scoreBoard = document.getElementById('game-score');

        // prevent counting same card as a match
        clickedCard.classList.add('flipped');

        this.flippedCards[this.flippedCount - 1] = clickedCard;
        //if all allowable cards have been flipped        
        if (this.flippedCount === this.flippedMax) {
            for (let i = 0; i < this.flippedCards.length; i++) {

                //check if image src matches
                //needs refactoring to match all new flips to previous ones
                if (this.flippedCards[0].querySelector('.card-face').getAttribute('src') === this.flippedCards[i].querySelector('.card-face').getAttribute('src')) {
                    //check that cards are not the same card
                    if (!this.flippedCards[0].isSameNode(this.flippedCards[i])) {
                        cardsMatch = true;
                    }
                } else cardsMatch = false;
            }
            //remove matched cards from game board and increase score
            if (cardsMatch) {
                this.score += 5;
                for (let j = 0; j < this.flippedCards.length; j++) {
                    this.flippedCards[j].classList.add('fade-out');
                }
            }
            scoreBoard.innerHTML = this.score;
        }
    }

    static endGame() {
        document.getElementById('game-board').classList.add('closed');
        document.getElementById('control-panel').classList.add('closed');
        document.getElementById('score-display').classList.remove('closed');
    }

}