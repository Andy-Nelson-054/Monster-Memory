
/** 
  * desc this class will hold functions and methods related to the deck of cards
  * examples include get cardFaces(), shuffle(), and buildDeck()
  * author Andy Nelson andy.nelson.054@gmail.com
  * requires jquery-3.4.1.min.js
*/
class Deck {
	constructor (faceCount, deckSize) {
	//Property values passed from game object
	var faceCount = this.faceCount;
	var deckSize = this.deckSize;
	var imageCount = 50; //must be altered to reflect the number of images in /images directory
	}

    
    /*
	* @desc getter function to randomly selec image from /images directory to be displayed on card backs
	* @param N/A
	* @return string - filepath to selected image
	*/
	get cardBack() {
	const cardBack = Math.floor(Math.random() * (this.imageCount) + 1);
	return `images/${cardBack}.png`
	}

    
    /*
	* @desc getter function to randomly select images from /images directory to be displayed on card faces
	* @param N/A
	* @return string - filepath to selected image
	*/
	get cardFaces() {
        let cardBack = this.cardBack;
        let cardFace = new Array(this.deckSize);
        let randCard;

        //generate random non-repeating values
        for(let i = 0; i < this.faceCount; i++){
            randCard = Math.floor(Math.random() * this.imageCount + 1);
            cardFace[i] = randCard;

            //reassign repeated cards
            for(var j = 0; j < i; j++){
                if(cardFace[j] === randCard || randCard === cardBack) {
                i--;
                }
            }
            //assign upper half of deck. Mirrors the bottom half. Deck still needs to be shuffled
            cardFace[i + this.faceCount] = cardFace[i]
        }
    }

    
    /*
    * @desc getter function to randomly selec image from /images directory to be displayed on card backs
    * @param N/A
    * @return string - filepath to selected image
    */
    static shuffleDeck() {
        let randIndices = new Array(this.deckSize);
        let readyDeck = new Array(this.deckSize);
        let maxRepeat = 2;
        let repeated = 0;
        let randIndex;

        for(let i = 0; i < this.deckSize; i++){
            randIndex[i] = Math.floor(Math.random() * this.deckSize);
            for(let j = 0; j < i; j++){
                if (randIndex[i] === randIndex[j]){
                    repeated === maxRepeat ? i-- : repeated++;
                }
            }
            readyDeck[i] = cardFace[randIndices[i]];
        }
    }

    /*
    * @desc getter function to randomly selec image from /images directory to be displayed on card backs
    * @param N/A
    * @return string - filepath to selected image
    */
    build(){
        console.log(this.cardBack);
        console.logt(this.cardFaces);
    }
}

//test
const newDeck2 = new Deck(8, 16);
console.log(newDeck.buildDeck());