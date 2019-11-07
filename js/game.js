$(document).ready(function() {
   
    const Deck = {
        faceCount: 16 / 2, //replace with call to method from Game
        deckSize: 16,
        imageCount: 50,
        get cardBack() {
           const cardBackSelect = Math.floor(Math.random() * (this.imageCount) + 1);
           return 'images/' + cardBackSelect + '.png';
        },
        get cardFaces() {
            var cardFace = new Array(this.deckSize);
            var faceMax = 2;
            var faceCount = 0;
            var randCard;

            //generate random non-repeating values for first half of array
            for(var i = 0; i < this.faceCount; i++){
                randCard = Math.floor(Math.random() * this.imageCount + 1);
                cardFace[i] = randCard;
                for(var j = 0; j < i; j++) { //reassign repeated card faces
                    if(cardFace[j] === randCard) { i-- };
                }
                //assign upper half of array
                cardFace[i + this.faceCount] = cardFace[i];
            }

            
            //shuffle
            var randIndices = new Array(this.deckSize);
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
                cardFace[i] = randIndices[i];
            }

            //transpose 
            

            /*for(var i = 0; i < cardFace.length; i++) {
                cardFaces[i] = 'images/' + cardFace[i] + '.png';
            }*/
            
            console.log(cardFace);
            console.log('randIndices ' + randIndices);
            return cardFace;
        },
        buildDeck() {
            $('.card-back').attr('src', this.cardBack);
            $('.card-face').attr('src', 'images/' + this.cardFaces[Math.floor(Math.random() * this.imageCount) + 1] + '.png');

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
    console.log('cardFace: ' + Deck.cardFaces);
    
    Deck.buildDeck();
    console.log(Deck);
   
    // i = 42;
    //$('.test').attr('src', 'images/' + i + '.png');
});
