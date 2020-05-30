'use strict';

import { Game } from "./game.class.js";

export class Timer {
    constructor (timeCount) {
        this.timeCount = timeCount;
        this.isRunning = false
    }

    run () {
        this.isRunning = true;
        this.runTimer = setInterval(() => {
            if (this.timeCount > -1) {
                document.getElementById('game-timer').innerHTML = this.timeCount;
                this.timeCount --;
            }
            //Hacky solution, but theres about a 2 second delay from 
            //timer to display so we're checking the display
            if(document.getElementById('game-timer').textContent === '0') {
                Game.endGame();
                this.stop();
            }
            // if(this.timeCount === 0) {
            //     alert('Game Over');
            // }
        }, 1000);
    }

    stop () {
        clearInterval(this.runTimer);
    }
}