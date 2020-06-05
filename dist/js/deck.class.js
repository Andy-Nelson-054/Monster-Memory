
'use strict';

export class Deck {
    constructor(faceCount, deckSize) {
        this.faceCount = faceCount;
        this.deckSize = deckSize;
        this.imageCount = 50;
    }

    /*
    * @desc getter function to randomly select image to 
     be displayed on card backs
    * @param N/A
    * @return string - filepath to selected image
    */
    get cardBack() {
        const cardBack = Math.floor(Math.random() * this.imageCount + 1);
        return `images/${cardBack}.png`;
    }

    /*
    * @desc getter function to randomly select images 
      to be displayed on card faces. 
    * @param N/A
    * @return cardFace - array of filepaths to images
    */
    get cardFaces() {
        let cardBack = this.cardBack;
        let cardFace = new Array(this.deckSize);
        let randCard;

        //generate random non-repeating values
        for (let i = 0; i < this.faceCount; i++) {
            randCard = Math.floor(Math.random() * this.imageCount + 1);
            cardFace[i] = randCard;

            //reassign repeated cards (add reassignment if image is used for card back)
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
    * @desc 
    * @param N/A
    * @return readyDeck - Array of shuffled cards ready for game
    */
    shuffleDeck() {
        let unorderedDeck = this.cardFaces;
        let readyDeck = new Array(this.deckSize);
        let randIndices = new Array(this.deckSize);
        let randIndex;

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
    * @return N/A
    */
    buildBoard() {
        $('.card-back').attr('src', this.cardBack);

        var cardSpace = $(".card-face");
        var fullDeck = this.shuffleDeck();

        for (var i = 0; i < this.deckSize; i++) {
            $(cardSpace[i]).attr('src', 'images/' + fullDeck[i] + '.png');
        }
    }

}