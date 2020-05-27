'use strict';

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
        }, 1000);
    }

    stop () {
        clearInterval(this.runTimer);
    }
}