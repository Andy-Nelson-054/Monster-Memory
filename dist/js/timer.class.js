'use strict';

export class Timer {
    constructor(timeCount) {
        this.timeCount = timeCount;
        this.timeReset = timeCount;
        this.continueCount = true;
    }

    reset() {
        return this.timeCount = this.timeReset;
    }

    stop() {
        this.continueCount = false;
    }

    display() {
        this.timeCount--;
        if (this.timeCount > 0) {
            console.log(this.timeCount);
            document.getElementById('game-timer').innerHTML = this.timeCount;
        } else this.stop();
        //Timer doesn't stop yet! just stops displaying
    }

    countDown() {
        setInterval(() => {
            if (this.continueCount) {
                this.display();
            }
        }, 1000);
    }

}