
'use strict';
/** 
  * desc this class will hold functions and methods related to the deck of 
  * cards
  * examples include get cardFaces(), shuffle(), and buildDeck()
  * author Andy Nelson andy.nelson.054@gmail.com
  * requires jquery-3.4.1.min.js
*/
export class Deck {
    constructor(faceCount, deckSize) {
        this.faceCount = faceCount;
        this.deckSize = deckSize;
        this.imageCount = 50;
    }

    /*
    * @desc getter function to randomly selec image from /images directory to 
     be displayed on card backs
    * @param N/A
    * @return string - filepath to selected image
    */
    get cardBack() {
        const cardBack = Math.floor(Math.random() * this.imageCount + 1);
        return `images/${cardBack}.png`;
    }

    /*
    * @desc getter function to randomly select images from /images directory 
      to be displayed on card faces
    * @param N/A
    * @return string - filepath to selected image
    */
    get cardFaces() {
        let cardBack = this.cardBack;
        let cardFace = new Array(this.deckSize);
        let randCard;

        //generate random non-repeating values
        for (let i = 0; i < this.faceCount; i++) {
            randCard = Math.floor(Math.random() * this.imageCount + 1);
            cardFace[i] = randCard;

            //reassign repeated cards
            for (var j = 0; j < i; j++) {
                if (cardFace[j] === randCard || randCard === cardBack) {
                    i--;
                }
            }
            //assign upper half of deck. Mirrors the bottom half. Deck still 
            //needs to be shuffled
            cardFace[i + this.faceCount] = cardFace[i];
        }
        return cardFace;
    }

    /*
    * @desc getter function to randomly selec image from /images directory to be
     displayed on card backs
    * @param N/A
    * @return string - filepath to selected image
    */
    shuffleDeck() {
        let unorderedDeck = this.cardFaces;
        let readyDeck = new Array(this.deckSize);
        let randIndices = new Array(this.deckSize);
        let randIndex;
        let maxRepeat = 1;
        
        for (let i = 0; i < this.deckSize; i++) {
            randIndices[i] = Math.floor(Math.random() * this.deckSize);
            for (let j = 0; j < i; j++) {
                if (randIndices[i] === randIndices[j]) {
                    i--;
                } 
            }
            randIndex = randIndices[i];
            readyDeck[i] = unorderedDeck[randIndex];
        }
        return readyDeck;
    }

    /*
    * @desc deals cards onto the game board ***MOVE THIS TO GAME CLASS***
    * @param N/A
    * @return void
    */
    buildBoard() {
        //console.log(this.shuffleDeck());
        $('.card-back').attr('src', this.cardBack);

        var cardSpace = $(".card-face");
        var fullDeck = this.shuffleDeck();
        //console.log(fullDeck);
        for (var i = 0; i < this.deckSize; i++) {
            $(cardSpace[i]).attr('src', 'images/' + fullDeck[i] + '.png');
        }
    }
}

