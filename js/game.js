$(document).ready(function() {
   
    const Deck = {
        gameCards: 16 / 2, //replace with call to method from Game
        totalCards: 16,
        imageCount: 51,
        get cardBack() {
           const cardBackSelect = Math.floor(Math.random() * this.imageCount);
           return 'images/' + cardBackSelect + '.png';
        },
        get cardFaces() {
            var cardFaces = [];
            var cardFaceNum = new Array(this.totalCards);
            var lowerHalfRand = Math.floor((Math.random() * this.gameCards));
            //generate random non-repeating values for first half of array
            for(var i = 0; i < this.gameCards; i++){
                
                randCard = Math.floor(Math.random() * this.imageCount + 1);
                cardFaceNum[i] = randCard;
                
                for(var j = 0; j < i; j++) { //reassign repeated card faces
                    if(cardFaceNum[j] == randCard) {  //if newest card matches a previous one 
                        randCard = Math.floor(Math.random() * this.imageCount); //reset new card so it doesn't match 
                        cardFaceNum[i] = randCard;
                        j = -1; //reset counter to check new value again
                    } 
                } 
            }

            console.log(lowerHalfRand);
            //dublicate values once each for second half of array
            for(var i = this.gameCards; i < this.totalCards; i++){
                
                cardFaceNum[i] = cardFaceNum[Math.floor((Math.random() * this.gameCards))];
                
                for(var j = this.gameCards; j < i; j++) { //reassign repeated card faces
                    if(cardFaceNum[j + this.gameCards] == cardFaceNum[j]) {  //if newest card matches a previous one 
                        cardFaceNum[j] = cardFaceNum[Math.floor((Math.random() * this.gameCards))]; //reset new card so it doesn't match 
                        j = this.gameCards - 1; //reset counter to check new value again
                    } 
                } 
            }

            


            /*for(var i = 0; i < cardFaceNum.length; i++) {
                cardFaces[i] = 'images/' + cardFaceNum[i] + '.png';
            }*/
            console.log(cardFaceNum);
            return cardFaces;
        },
        buildDeck() {
            $('.card-back').attr('src', this.cardBack);
            $('.card-face').attr('src', this.cardFaces[19]);
        }
            /*const deck = [];
            const imageSelect = Math.floor(Math.random() * this.imageCount);

            for(var i = 0; i < this.imageCount; i++) {
                deck[i] = 'images/' + (i + 1) + '.png';
            }
            $('.card-face').attr('src', deck[imageSelect]);

            //assign 
            const cardBack = Math.floor(Math.random() * this.imageCount);
            $('.card-back').attr('src', 'images/' + cardBack + '.png');
        }*/
        
    };
    console.log(Deck.cardFaces);
    /*
    Deck.buildDeck();
    console.log(Deck);*/
   
    // i = 42;
    //$('.test').attr('src', 'images/' + i + '.png');
});

//load images half the images needed, duplicate them once, shuffle images, add them to card-face.