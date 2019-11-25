

const Deck = {
    faceCount: 16 / 2, //replace with call to method from Game
    deckSize: 16,
    imageCount: 50,
    get cardBack() {
        const cardBackSelect = Math.floor(Math.random() * (this.imageCount) + 1);
        return 'images/' + cardBackSelect + '.png';
    },
    get cardFaces() {
        var cardBack = this.cardBack;
        var cardFace = new Array(this.deckSize);
        var randCard;

        //generate random non-repeating values
        for(var i = 0; i < this.faceCount; i++){
            randCard = Math.floor(Math.random() * this.imageCount + 1);
            cardFace[i] = randCard;
            for(var j = 0; j < i; j++) { //reassign repeated card faces
                if(cardFace[j] === randCard || randCard === cardBack) { 
                    i-- 
                };
            }
            //assign upper half of array
            cardFace[i + this.faceCount] = cardFace[i];
        }

        //shuffle
        var randIndices = new Array(this.deckSize);
        var completeDeck = new Array(this.deckSize);
        var maxRepeat = 2;
        var randIndex;

        for(var i = 0; i < this.deckSize; i++){
            randIndex = Math.floor(Math.random() * this.deckSize);
            randIndices[i] = randIndex;
            for (var j = 0; j < i; j++){
                if (randIndices[j] === randIndex){
                    maxRepeat === 2 ? i-- : maxRepeat++;
                } 
            }
            completeDeck[i] = cardFace[randIndices[i]];
        }

        
        console.log('cardFaces: ' + cardFace);
        console.log('randIndices: ' + randIndices);
        console.log('completeDeck: ' + completeDeck);

        return completeDeck;
    },
    buildDeck() {
        $('.card-back').attr('src', this.cardBack);
        
        var cardSpace = $(".card-face");
        var fullDeck = (this.cardFaces);
        for(var i = 0; i < this.deckSize; i++){
            $(cardSpace[i]).attr('src', 'images/' + fullDeck[i] + '.png');
        }

    }
    
};

const Game = {

}


$(document).ready(function() {   
     Deck.buildDeck();
    console.log(Deck);
});

const gameTable = document.getElementById('outer-board');
const gameBoard = document.getElementById('inner-board');
gameTable.addEventListener('click', function (){ $(gameBoard).removeClass('closed') }, false);

   
