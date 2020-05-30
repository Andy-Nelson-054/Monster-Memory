# memory-game

## Current State

- [ ] Create game class
- [x] Move files that don't contain ES6 syntax out of src
- [x] Fix alignment of control panel buttons
- [x] Complete Game timer
- [x] Set up cards to only flip two at a time
- [ ] Settle on color scheme
- [x] Game starts after first card flip
- [x] Fix card pattern (not random)
- [ ] Migrate functionality from game.js to game.class.js / rename game.js to main.js
- [ ] Refactor shuffle functionality in deck.class.js
- [x] "Stop" button stops timer


## Setup
### Startup Commands
Can be viewed/ changed in package.json\
```npm run build``` to transpile ES6 code\
```npm start``` to start local server

## Game Feature Checklist
- [x] Only two cards flipped at a time
- [ ] Disable matched cards and remove image
- [x] Add points for matched cards

- [x] Timer
- [ ] Point bonus for time on board

- [ ] Ensure a card face can't be used for card back
- [ ] Reveal cards before starting game
- [ ] "Stop" button ends game and displays end game screen
- [ ] End game screen button to reset game board and return to main menu
- [ ] Rules screen to display rules to user. Return button to return to main menu

## Problems

- Only works in Chrome