$(document).ready(function() {
   
    const Deck = {
        cardCount: 16, //replace with call to method from Game
        imageCount: 51,
        cardBack() {
            const image = Math.floor(Math.random() * this.imageCount);
            $('.card-back').attr('src', 'images/' + image + '.png');
        },
        buildDeck() {
            const face = [];
            for(var i = 0; i < this.imageCount; i++) {
                face[i] = 'images/' + (i + 1) + '.png';
            }
            $('.card-face').attr('src', face[38]);
        }

    };
    Deck.cardBack();
    Deck.buildDeck();
   
    // i = 42;
    //$('.test').attr('src', 'images/' + i + '.png');
});

//load images half the images needed, duplicate them once, shuffle images, add them to card-face.