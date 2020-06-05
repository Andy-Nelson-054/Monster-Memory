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
        this.matchCount = 0;
        this.score = 0;
    }

    /*
    * @desc Initialize game by instantiating game timer and deck, revealing game
    * board, revealing card faces, and adding event listener to cards.
    * @param N/A 
    * @return N/A
    */
    start() {
        const gameTimer = new Timer(60);
        const newDeck = new Deck(8, 16);
        
        newDeck.buildBoard();

        const gameTable = document.getElementById('outer-board');
        const gameBoard = document.getElementById('inner-board');
        const coverMenu = document.getElementById('cover-menu');
        const controlPanel = document.getElementById('control-panel');
        const timerStop = document.getElementById('timer-stop');
        
        //reveal game board
        $(gameBoard).removeClass('closed');
        $(coverMenu).attr('hidden', true);
        $(controlPanel).attr('hidden', false);

        
        this.cardReveal(gameTimer);

        //need lots of refactoring. Use promises?
        setTimeout(() => {
            gameTable.addEventListener('click', () => {
                // card clicks 
                if(event.target.classList.contains('click')) {
                    this.cardClick(event.target, newDeck, gameTimer);
                }
    
                //timer stop
                if(event.target === timerStop) {
                    gameTimer.stop();
                }
    
            }, false);
        }, 3000);
        
    }

    /*
    * @desc Reveals cards at start of game in a waterfall. Hides cards again after a pause
    *       Needs refactoring. Use promises
    * @param Timer
    * @return N/A
    */
    cardReveal(timer) {
        //Need to better understand why this works
        let cardBacks = document.getElementsByClassName('click');
        setTimeout(() => {
            for (var i = 0; i <= cardBacks.length ; i++) {
                (() => {
           
                    var j = i;
                    setTimeout(() => { 
                        cardBacks[j].click(); //throws error, why?
                        cardBacks[j].classList.add('revealed');
                    }, 50 * j);
           
                })();
           }
        }, 1000);
        

       //hide cards again, start timer
       let revealedCards = document.getElementsByClassName('card-title');
        setTimeout(() => {
            for (let i = 0; i < revealedCards.length; i++) {
                revealedCards[i].click();
            }
            timer.run();
       }, 5000);

       
    };
    

    /*
    * @desc Counts number of cards clicked. Calls cardFlip(), calls checkMatch()
    * Get rid of this method and move everything to cardFlip()?
    * @param N/A
    * @return N/A
    */
    cardClick(clickedCard, newDeck, gameTimer) {
        this.flippedCount++;
        this.cardFlip();
        this.checkMatch(clickedCard, newDeck, gameTimer);
    }

    /*
    * @desc Flips cards back after a delay if maximum amount of allowed cards
    * are flipped.
    * @param N/A 
    * @return N/A
    */
   cardFlip() {
    if(this.flippedCount === this.flippedMax) {
            //flip cards after half a second
            setTimeout(() => {
                for(let card of this.cards) {
                    card.click();
                    this.flippedCount = 0;
                }
            }, 500);
        }
    }

    /*
    * @desc 
    * @param clickedCard, newDeck, gameTimer 
    * @return N/A
    */
    checkMatch(clickedCard, newDeck, gameTimer) {
        let cardsMatch = false;
        let cardFace = clickedCard.querySelector('.card-face')
            .getAttribute('src');
        let scoreBoard = document.getElementById('game-score');

        // prevent counting same card as a match
        //clickedCard.classList.add('flipped');

        this.flippedCards[this.flippedCount - 1] = clickedCard;
        //if all allowable cards have been flipped        
        if(this.flippedCount === this.flippedMax) {
            for(let i = 0; i < this.flippedCards.length; i++) {
                
                //check if image src matches
                //needs refactoring to match all new flips to previous ones
                if (this.flippedCards[0].querySelector('.card-face').getAttribute('src') 
                    === this.flippedCards[i].querySelector('.card-face').getAttribute('src')) {
                    //check that cards are not the same card
                    if (!this.flippedCards[0].isSameNode(this.flippedCards[i])) {
                        cardsMatch = true;
                    }
                } else cardsMatch = false;
            }
            //remove matched cards from game board and increase score
            if(cardsMatch) {
                this.score += 5;
                for(let j = 0; j < this.flippedCards.length; j++) {
                    this.flippedCards[j].classList.add('fade-out');
                }
                this.matchCount++;
                if (this.matchCount === newDeck.faceCount) {
                    gameTimer.stop();
                    alert('game over');
                }
            }
            scoreBoard.innerHTML = this.score;
        }
    }

    /*
    * @desc Close game board and reveal end-game score  view
    * @param N/A
    * @return N/A
    */
    static endGame() {
        document.getElementById('game-board').classList.add('closed');
        document.getElementById('game-board').classList.add('slide');
        document.getElementById('control-panel').classList.add('closed');
        document.getElementById('control-panel').classList.add('slide');
        document.getElementById('score-display').classList.remove('closed');
        //document.getElementById('score-display').classList.remove('slide');
        document.getElementById('score-display').innerHTML = this.score;
    }


    
}


